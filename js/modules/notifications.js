// js/modules/notifications.js
(function() {
    window.ThumbsApp = window.ThumbsApp || {};
    
    ThumbsApp.notifications = {
        interval: null,
        
        startPolling: function() {
            this.interval = setInterval(() => {
                // simulate new notification
                if (Math.random() > 0.7) {
                    ThumbsApp.state.notifications.push({ id: Date.now(), message: 'New like' });
                    ThumbsApp.state.save();
                    // update badge
                    document.querySelector('.notification-badge').textContent = ThumbsApp.state.notifications.length;
                }
            }, 15000);
        },
        
        open: function() {
            alert('Notifications: ' + ThumbsApp.state.notifications.map(n => n.message).join(', '));
        }
    };
})();