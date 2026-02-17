import { stateManager } from './state-manager.js';
import { eventBus } from './event-bus.js';

export const auth = {
    currentUser: null,
    checkAuth() {
        const token = localStorage.getItem('token');
        if (token) {
            // validate token
            this.currentUser = JSON.parse(localStorage.getItem('user'));
        }
        this.updateUI();
    },
    login(email, password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            localStorage.setItem('token', 'mock-jwt');
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUser = user;
            this.updateUI();
            return true;
        }
        return false;
    },
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.currentUser = null;
        this.updateUI();
        window.location.href = '/';
    },
    updateUI() {
        if (this.currentUser) {
            document.querySelectorAll('.auth-links .login, .auth-links .register').forEach(el => el.style.display = 'none');
            document.getElementById('logout-link').style.display = 'inline';
            // update avatar etc
        } else {
            document.querySelectorAll('.auth-links .login, .auth-links .register').forEach(el => el.style.display = 'inline');
            document.getElementById('logout-link').style.display = 'none';
        }
    }
};