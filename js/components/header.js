import { auth } from '../core/auth.js';
import { themeEngine } from '../core/theme-engine.js';

// header interactions
document.querySelector('.avatar-dropdown').addEventListener('click', () => {
    document.getElementById('moreDropdown').classList.toggle('show');
});
document.getElementById('logout-dropdown').addEventListener('click', (e) => {
    e.preventDefault();
    auth.logout();
});