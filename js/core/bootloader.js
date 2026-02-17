export const bootloader = {
    async load() {
        console.log('Bootloader: loading resources');
        // Load mock data into localStorage if empty
        if (!localStorage.getItem('users')) {
            const response = await fetch('/data/users.json');
            const users = await response.json();
            localStorage.setItem('users', JSON.stringify(users));
        }
        // ... load other data
    }
};