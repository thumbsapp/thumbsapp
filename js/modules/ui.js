// js/modules/ui.js
(function() {
    window.ThumbsApp = window.ThumbsApp || {};
    
    ThumbsApp.ui = {
        renderHeader: function() {
            const headerHTML = `
                <header>
                    <div class="logo"><i>👍</i> ThumbsApp</div>
                    <nav class="main-nav">
                        <a href="feed.html" class="${ThumbsApp.router.currentPage === 'feed' ? 'active' : ''}">Home</a>
                        <a href="live.html" class="${ThumbsApp.router.currentPage === 'live' ? 'active' : ''}">Live Arena</a>
                        <a href="games.html" class="${ThumbsApp.router.currentPage === 'games' ? 'active' : ''}">Games</a>
                        <a href="marketplace.html" class="${ThumbsApp.router.currentPage === 'marketplace' ? 'active' : ''}">Marketplace</a>
                        <a href="leaderboard.html" class="${ThumbsApp.router.currentPage === 'leaderboard' ? 'active' : ''}">Leaderboard</a>
                    </nav>
                    <div class="search-bar">
                        <input type="text" placeholder="Search games, users, challenges...">
                    </div>
                    <div class="header-actions">
                        <div class="wallet-badge"><span>💰</span> $${ThumbsApp.state.wallet.balance}</div>
                        <div class="notification-icon" onclick="ThumbsApp.notifications.open()">
                            🔔
                            <span class="notification-badge">${ThumbsApp.state.notifications.length}</span>
                        </div>
                        <button class="create-challenge-btn" onclick="ThumbsApp.challenges.openCreateModal()">+ Create Challenge</button>
                        <div class="avatar-dropdown" onclick="ThumbsApp.ui.toggleDropdown()">
                            <img src="${ThumbsApp.state.user.avatar || 'assets/avatars/default.jpg'}" alt="avatar">
                            <span>▼</span>
                        </div>
                        ${ThumbsApp.live.isLiveActive ? '<span class="live-indicator"></span>' : ''}
                    </div>
                </header>
            `;
            document.querySelector('#app').insertAdjacentHTML('afterbegin', headerHTML);
        },
        
        renderLeftSidebar: function() {
            const user = ThumbsApp.state.user;
            const sidebarHTML = `
                <div class="identity-card">
                    <img src="${user.avatar || 'assets/avatars/default.jpg'}" class="avatar-large">
                    <div class="username">${user.username}</div>
                    <div class="reputation-ring">
                        <span class="level-badge">${user.level || 'L1'}</span>
                        <img src="assets/flags/${user.country || 'us'}.png" class="country-flag" alt="flag">
                    </div>
                    <div class="reputation-meter"><div class="reputation-fill" style="width:${user.reputation || 50}%"></div></div>
                </div>
                <nav class="nav-menu">
                    <a href="feed.html" class="nav-item ${ThumbsApp.router.currentPage === 'feed' ? 'active' : ''}"><span>🏠</span> Home</a>
                    <a href="live.html" class="nav-item ${ThumbsApp.router.currentPage === 'live' ? 'active' : ''}"><span>🔴</span> Live Arena</a>
                    <a href="thumtok.html" class="nav-item"><span>🎬</span> ThumTok</a>
                    <a href="games.html" class="nav-item ${ThumbsApp.router.currentPage === 'games' ? 'active' : ''}"><span>🎮</span> Games</a>
                    <a href="marketplace.html" class="nav-item ${ThumbsApp.router.currentPage === 'marketplace' ? 'active' : ''}"><span>🛒</span> Marketplace</a>
                    <a href="leaderboard.html" class="nav-item ${ThumbsApp.router.currentPage === 'leaderboard' ? 'active' : ''}"><span>🏆</span> Leaderboard</a>
                    <a href="messages.html" class="nav-item ${ThumbsApp.router.currentPage === 'messages' ? 'active' : ''}"><span>💬</span> Messenger</a>
                    <a href="escrow.html" class="nav-item ${ThumbsApp.router.currentPage === 'escrow' ? 'active' : ''}"><span>⚖️</span> Escrow</a>
                    <a href="donations.html" class="nav-item ${ThumbsApp.router.currentPage === 'donations' ? 'active' : ''}"><span>💰</span> Donations</a>
                </nav>
                <div class="quick-actions">
                    <button class="quick-action-btn" onclick="ThumbsApp.challenges.openCreateModal()">➕ Create Challenge</button>
                    <button class="quick-action-btn" onclick="ThumbsApp.wallet.show()">💳 View Wallet</button>
                </div>
            `;
            document.getElementById('leftSidebar').innerHTML = sidebarHTML;
        },
        
        renderRightRail: function() {
            const liveMatches = ThumbsApp.state.live.slice(0, 3);
            let matchesHTML = '';
            liveMatches.forEach(match => {
                matchesHTML += `
                    <div class="live-match-card">
                        <div class="match-players">
                            <div class="player"><img src="assets/avatars/avatar${match.playerA}.jpg"> <span>Player${match.playerA}</span></div>
                            <span class="vs">VS</span>
                            <div class="player"><img src="assets/avatars/avatar${match.playerB}.jpg"> <span>Player${match.playerB}</span></div>
                        </div>
                        <div class="match-meta">
                            <span>👥 ${match.viewers}</span>
                            <span>⏱️ LIVE</span>
                        </div>
                        <button class="join-btn">Join Match</button>
                    </div>
                `;
            });
            const railHTML = `
                <h3>🔥 Live Matches</h3>
                ${matchesHTML}
                <div class="donation-ticker">💰 User123 donated $50 to PlayerX 💰 User456 donated $20 to PlayerY</div>
                <div class="trending-games">
                    <h4>Trending Games</h4>
                    <ul>
                        <li>🎮 Valorant</li>
                        <li>🎮 League of Legends</li>
                        <li>🎮 CS:GO</li>
                    </ul>
                </div>
                <div class="suggested-users">
                    <h4>Suggested Players</h4>
                    <ul>
                        <li>👤 ProGamer</li>
                        <li>👤 NoobSlayer</li>
                    </ul>
                </div>
            `;
            document.getElementById('rightRail').innerHTML = railHTML;
        },
        
        renderFooter: function() {
            const footerHTML = `
                <footer>
                    <div>© 2025 ThumbsApp · Competition Social</div>
                    <div>Donation Transparency | Escrow Explained | Regional Rules | Sponsor Disclosure | Safety</div>
                </footer>
            `;
            document.querySelector('#app').insertAdjacentHTML('beforeend', footerHTML);
        },
        
        toggleDropdown: function() {
            // simple dropdown
            alert('Profile / Settings / Logout');
        }
    };
})();