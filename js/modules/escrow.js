// js/modules/escrow.js
(function() {
    window.ThumbsApp = window.ThumbsApp || {};
    
    ThumbsApp.escrow = {
        renderEscrow: function() {
            const container = document.getElementById('centerFeed');
            let html = '<h2>Escrow Transactions</h2>';
            ThumbsApp.state.escrow.forEach(e => {
                html += `
                    <div class="feed-card">
                        <div class="escrow-preview">
                            <div>Stake: $${e.stake}</div><div>Fee: $${e.fee}</div><div>Payout: $${e.payout}</div>
                        </div>
                        <div>Status: ${e.status}</div>
                    </div>
                `;
            });
            container.innerHTML = html;
        }
    };
})();