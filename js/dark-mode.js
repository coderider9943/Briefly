window.addEventListener('DOMContentLoaded', (event) => {
    // Check if the user prefers dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }
});

// Toggle dark mode on button click
document.getElementById('dark-mode-button-id').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Listen for changes in the user's color scheme preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newColorScheme = e.matches ? "dark" : "light";
    
    // Update the body's class to match the new color scheme
    if(newColorScheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});
