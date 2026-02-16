// js/modules/leaderboard.js
(function() {
    window.ThumbsApp = window.ThumbsApp || {};
    
    ThumbsApp.leaderboard = {
        renderLeaderboard: function() {
            const container = document.getElementById('centerFeed');
            container.innerHTML = `
                <div class="leaderboard-filters">
                    <select class="filter-select"><option>Country</option><option>Global</option></select>
                    <select class="filter-select"><option>Category</option><option>FPS</option></select>
                </div>
                <div class="leaderboard-table">
                    <div class="table-row header">
                        <div>Rank</div><div>Player</div><div>Score</div><div>Level</div>
                    </div>
                    ${this.generateRows()}
                </div>
            `;
        },
        
        generateRows: function() {
            let rows = '';
            for (let i=1; i<=10; i++) {
                rows += `
                    <div class="table-row">
                        <div class="rank-${i}">#${i}</div>
                        <div class="player-cell"><img src="assets/avatars/avatar${i}.jpg"> ProPlayer${i}</div>
                        <div>${10000 - i*100}</div>
                        <div>L${Math.ceil(i/2)}</div>
                    </div>
                `;
            }
            return rows;
        }
    };
})();