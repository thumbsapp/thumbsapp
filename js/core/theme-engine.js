import { eventBus } from './event-bus.js';

export const themeEngine = {
    init() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.setTheme(savedTheme);
        document.getElementById('theme-toggle')?.addEventListener('click', () => this.toggle());
    },
    setTheme(theme) {
        document.documentElement.setAttribute('theme', theme);
        localStorage.setItem('theme', theme);
        eventBus.emit('theme:changed', theme);
    },
    toggle() {
        const current = document.documentElement.getAttribute('theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        this.setTheme(next);
    }
};