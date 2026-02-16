// js/core/router.js
(function() {
    window.ThumbsApp = window.ThumbsApp || {};
    
    ThumbsApp.router = {
        currentPage: 'feed',
        
        init: function() {
            const path = window.location.pathname.split('/').pop() || 'index.html';
            if (path === 'index.html' || path === '') this.currentPage = 'feed';
            else this.currentPage = path.replace('.html', '');
        },
        
        navigate: function(page) {
            window.location.href = page + '.html';
        }
    };
})();