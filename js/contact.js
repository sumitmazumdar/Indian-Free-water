document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formMessages = document.getElementById('form-messages');
    const spinner = form.querySelector('.spinner-border');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading spinner
        spinner.style.display = 'inline-block';
        
        // Collect form data
        const formData = new FormData(form);
        
        // Send the form data using fetch
        fetch('process-contact.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Hide spinner
            spinner.style.display = 'none';
            
            // Show message
            formMessages.style.display = 'block';
            formMessages.className = 'alert ' + (data.success ? 'alert-success' : 'alert-danger');
            formMessages.textContent = data.message;
            
            // Clear form if successful
            if (data.success) {
                form.reset();
            }
        })
        .catch(error => {
            // Hide spinner
            spinner.style.display = 'none';
            
            // Show error message
            formMessages.style.display = 'block';
            formMessages.className = 'alert alert-danger';
            formMessages.textContent = 'Oops! An error occurred. Please try again later.';
        });
    });
});
