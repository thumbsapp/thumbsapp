// js/core/storage.js
(function() {
    window.ThumbsApp = window.ThumbsApp || {};
    
    ThumbsApp.storage = {
        get: function(key) {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        },
        set: function(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        },
        remove: function(key) {
            localStorage.removeItem(key);
        }
    };
})();