import { eventBus } from './event-bus.js';

export const router = {
    routes: {},
    init() {
        window.addEventListener('popstate', () => this.handleRoute());
        this.handleRoute();
    },
    handleRoute() {
        const path = window.location.pathname;
        // load corresponding page module
        eventBus.emit('route:changed', path);
    },
    navigate(path) {
        window.history.pushState({}, '', path);
        this.handleRoute();
    }
};