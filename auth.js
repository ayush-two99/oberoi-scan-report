// Hardcoded credentials
const VALID_ID = 'cyberaudit2026';
const VALID_PASSWORD = 'two99$9897$';

// Check if user is already authenticated
function checkAuth() {
    const isAuthenticated = sessionStorage.getItem('authenticated') === 'true';
    if (isAuthenticated) {
        showMainContent();
    } else {
        showAuthScreen();
    }
}

// Show authentication screen
function showAuthScreen() {
    document.getElementById('authScreen').classList.remove('hidden');
    document.getElementById('mainContent').classList.add('hidden');
}

// Show main content
function showMainContent() {
    document.getElementById('authScreen').classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');
}

// Handle authentication form submission
function handleAuth(event) {
    event.preventDefault();
    const userIdInput = document.getElementById('userId');
    const passwordInput = document.getElementById('password');
    const userId = userIdInput.value.trim();
    const password = passwordInput.value;
    const errorDiv = document.getElementById('authError');

    // Check if both ID and password are valid
    if (userId === VALID_ID && password === VALID_PASSWORD) {
        // Set authentication flag in sessionStorage
        sessionStorage.setItem('authenticated', 'true');
        // Hide error if shown
        errorDiv.classList.remove('show');
        // Show main content
        showMainContent();
    } else {
        // Show error message
        errorDiv.classList.add('show');
        userIdInput.value = '';
        passwordInput.value = '';
        userIdInput.focus();
    }
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', checkAuth);

