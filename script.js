document.addEventListener('DOMContentLoaded', () => {
    // Set current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Handle form submission
    const form = document.getElementById('notify-form');
    const messageEl = document.getElementById('form-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        
        if (email) {
            // Simulate API call
            const btn = form.querySelector('.submit-btn span');
            const originalText = btn.textContent;
            btn.textContent = 'Wait...';
            
            setTimeout(() => {
                messageEl.textContent = 'Thank you! You have been added to our list.';
                messageEl.className = 'message success';
                form.reset();
                btn.textContent = originalText;
                
                setTimeout(() => {
                    messageEl.style.opacity = '0';
                }, 5000);
            }, 1000);
        }
    });
});
