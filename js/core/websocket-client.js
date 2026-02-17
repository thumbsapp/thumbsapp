export const websocket = {
    ws: null,
    connect(url) {
        this.ws = new WebSocket(url);
        this.ws.onmessage = (e) => {
            const data = JSON.parse(e.data);
            eventBus.emit('ws:message', data);
        };
    }
};