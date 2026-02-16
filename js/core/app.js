// js/core/app.js
(function() {
    window.ThumbsApp = window.ThumbsApp || {};
    
    ThumbsApp.init = async function(page) {
        this.router.init();
        await this.state.init();
        this.ui.renderHeader();
        this.ui.renderLeftSidebar();
        this.ui.renderFooter();
        this.live.startSimulation();
        this.notifications.startPolling();
        
        // load page-specific module
        if (page === 'feed') {
            this.feed.renderFeed();
        } else if (page === 'profile') {
            // profile module
        } else if (page === 'messages') {
            this.messenger.renderMessages();
        } else if (page === 'leaderboard') {
            this.leaderboard.renderLeaderboard();
        } else if (page === 'marketplace') {
            this.marketplace.renderMarketplace();
        } else if (page === 'donations') {
            this.donations.renderDonations();
        } else if (page === 'escrow') {
            this.escrow.renderEscrow();
        } else if (page === 'live') {
            this.thumtok.initThumtok();
        } else if (page === 'games') {
            // games list
        }
        
        this.ui.renderRightRail();
    };
})();