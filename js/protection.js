// Disable right click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
}, false);

// Disable keyboard shortcuts and F12
document.addEventListener('keydown', function(e) {
    if (
        // Disable F12
        e.keyCode === 123 || 
        // Disable Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
        // Disable Ctrl+Shift+J
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) ||
        // Disable Ctrl+U
        (e.ctrlKey && e.keyCode === 85) ||
        // Disable Ctrl+Shift+C
        (e.ctrlKey && e.shiftKey && e.keyCode === 67)
    ) {
        e.preventDefault();
    }
});

// Disable dragging images
document.addEventListener('dragstart', function(e) {
    e.preventDefault();
}, false);

// Clear console on open
console.clear();

// Disable view source
document.onkeypress = function(event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        return false;
    }
}

// Disable selection
document.onselectstart = function(e) {
    e.preventDefault();
}

// Additional protection
setInterval(function() {
    debugger;
}, 100);

// Disable developer tools
function checkDevTools() {
    const widthThreshold = window.outerWidth - window.innerWidth > 160;
    const heightThreshold = window.outerHeight - window.innerHeight > 160;
    if (widthThreshold || heightThreshold) {
        document.body.innerHTML = 'Developer tools detected!';
    }
}

window.addEventListener('resize', checkDevTools);
checkDevTools();
