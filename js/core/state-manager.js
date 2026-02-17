export const stateManager = {
    state: {},
    get(key) {
        return this.state[key];
    },
    set(key, value) {
        this.state[key] = value;
        localStorage.setItem(key, JSON.stringify(value));
    },
    load(key) {
        const data = localStorage.getItem(key);
        if (data) this.state[key] = JSON.parse(data);
    }
};