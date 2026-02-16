// js/modules/marketplace.js
(function() {
    window.ThumbsApp = window.ThumbsApp || {};
    
    ThumbsApp.marketplace = {
        renderMarketplace: function() {
            const container = document.getElementById('centerFeed');
            container.innerHTML = `
                <h2>Gift Marketplace</h2>
                <div class="marketplace-grid">
                    <div class="gift-card">
                        <div class="gift-icon">⭐</div>
                        <h3>Gold Star</h3>
                        <div class="gift-price">$5</div>
                        <button class="attach-to-challenge" onclick="ThumbsApp.challenges.openCreateModal()">Attach to Challenge</button>
                    </div>
                    <div class="gift-card">
                        <div class="gift-icon">💎</div>
                        <h3>Diamond</h3>
                        <div class="gift-price">$20</div>
                        <button class="attach-to-challenge">Attach</button>
                    </div>
                </div>
            `;
        }
    };
})();