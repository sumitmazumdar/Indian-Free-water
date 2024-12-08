// Background music functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create audio element
    const audio = new Audio('background music.mp3');
    audio.loop = true;
    audio.volume = 1.0;

    // Create a styled prompt
    const prompt = document.createElement('div');
    prompt.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 30px 40px;
        background: linear-gradient(135deg, #00B4DB, #0083B0);
        color: white;
        border-radius: 15px;
        text-align: center;
        cursor: pointer;
        z-index: 999999;
        font-family: 'Poppins', sans-serif;
        box-shadow: 0 10px 25px rgba(0, 131, 176, 0.3);
        transition: all 0.3s ease;
        border: 2px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        animation: float 2s infinite ease-in-out;
    `;

    // Add hover effect styles
    prompt.onmouseover = () => {
        prompt.style.transform = 'translate(-50%, -52%) scale(1.05)';
        prompt.style.boxShadow = '0 15px 30px rgba(0, 131, 176, 0.4)';
    };
    prompt.onmouseout = () => {
        prompt.style.transform = 'translate(-50%, -50%) scale(1)';
        prompt.style.boxShadow = '0 10px 25px rgba(0, 131, 176, 0.3)';
    };

    // Add floating animation
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes float {
            0% { transform: translate(-50%, -50%); }
            50% { transform: translate(-50%, -54%); }
            100% { transform: translate(-50%, -50%); }
        }
    `;
    document.head.appendChild(styleSheet);

    // Add the message with icon
    prompt.innerHTML = `
        <div style="font-size: 24px; margin-bottom: 10px;">
            <i class="fas fa-tint" style="color: rgba(255, 255, 255, 0.9);"></i>
        </div>
        <div style="font-size: 18px; font-weight: 500; line-height: 1.4;">
            Ready to get your brand into everyone's hands!
        </div>
    `;
    document.body.appendChild(prompt);

    // Start audio on prompt click with fade out effect
    prompt.addEventListener('click', function() {
        audio.play().then(() => {
            prompt.style.opacity = '0';
            prompt.style.transform = 'translate(-50%, -50%) scale(0.95)';
            setTimeout(() => prompt.remove(), 500);
        }).catch(error => {
            console.log('Failed to start audio:', error);
        });
    });

    // Preload audio
    audio.load();
});
