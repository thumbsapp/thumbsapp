// js/modules/live.js
(function() {
    window.ThumbsApp = window.ThumbsApp || {};
    
    ThumbsApp.live = {
        isLiveActive: true,
        interval: null,
        
        startSimulation: function() {
            this.interval = setInterval(() => {
                // update viewer counts randomly
                ThumbsApp.state.live.forEach(match => {
                    match.viewers += Math.floor(Math.random() * 10) - 3;
                    if (match.viewers < 0) match.viewers = 0;
                });
                // update right rail
                ThumbsApp.ui.renderRightRail();
            }, 10000);
        },
        
        stopSimulation: function() {
            clearInterval(this.interval);
        }
    };
})();