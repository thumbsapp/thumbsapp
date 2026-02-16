// js/modules/wallet.js
(function() {
    window.ThumbsApp = window.ThumbsApp || {};
    
    ThumbsApp.wallet = {
        show: function() {
            alert(`Wallet balance: $${ThumbsApp.state.wallet.balance}`);
        }
    };
})();