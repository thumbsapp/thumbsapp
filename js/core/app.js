import { bootloader } from './bootloader.js';
import { router } from './router.js';
import { stateManager } from './state-manager.js';
import { eventBus } from './event-bus.js';
import { auth } from './auth.js';
import { themeEngine } from './theme-engine.js';

class App {
    constructor() {
        this.init();
    }
    async init() {
        await bootloader.load();
        themeEngine.init();
        auth.checkAuth();
        router.init();
        eventBus.emit('app:ready');
    }
}
window.app = new App();