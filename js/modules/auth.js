// js/modules/auth.js (Auth redirect logic)
(function() {
    window.ThumbsApp = window.ThumbsApp || {};
    
    ThumbsApp.auth = {
        isLoggedIn: function() {
            return !!ThumbsApp.state.user; // if user object exists
        },

        requireAuth: function(callback) {
            if (this.isLoggedIn()) {
                callback();
            } else {
                window.location.href = 'login.html';
            }
        },

        logout: function() {
            ThumbsApp.state.user = null;
            ThumbsApp.state.save();
            window.location.href = 'index.html';
        }
    };

    // Override create challenge button to check auth
    const originalOpenCreateModal = ThumbsApp.challenges.openCreateModal;
    ThumbsApp.challenges.openCreateModal = function() {
        ThumbsApp.auth.requireAuth(() => {
            originalOpenCreateModal.call(ThumbsApp.challenges);
        });
    };
})();