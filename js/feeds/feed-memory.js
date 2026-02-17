export const feedMemory = {
    cache: {},
    store(feedId, data) {
        this.cache[feedId] = data;
    },
    get(feedId) {
        return this.cache[feedId];
    }
};