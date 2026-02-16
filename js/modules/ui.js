// js/modules/ui.js (full updated file with wiki card and overlay logic)
window.ThumbsApp = window.ThumbsApp || {};

ThumbsApp.ui = {
    renderHeader: function() {
        // header is already in HTML, but we can update dynamic parts
        document.getElementById('walletBalance').textContent = ThumbsApp.state.wallet.balance;
        document.getElementById('notificationBadge').textContent = ThumbsApp.state.notifications.length;
        if (ThumbsApp.state.user) {
            document.getElementById('headerAvatar').src = ThumbsApp.state.user.avatar;
        }
    },
    
    renderLeftSidebar: function() {
        const user = ThumbsApp.state.user || { username: 'Guest', avatar: 'assets/avatars/default.jpg', level: 'L1', reputation: 0, country: 'us' };
        const sidebarHTML = `
            <div class="identity-card">
                <img src="${user.avatar}" class="avatar-large">
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
                <button class="quick-action-btn" onclick="ThumbsApp.challenges.checkAuthAndCreate()">➕ Create Challenge</button>
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
        this.appendWikiCard(); // Task G
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
        alert('Profile / Settings / Logout');
    },
    
    // Task G: wiki card
    appendWikiCard: function() {
        const rightRail = document.getElementById('rightRail');
        if (!rightRail) return;
        const wikiCard = document.createElement('div');
        wikiCard.className = 'wiki-card';
        wikiCard.innerHTML = `
            <h4>📚 ThumbsApp Wiki</h4>
            <input type="text" id="wikiSearch" placeholder="Search wiki...">
            <div class="wiki-results" id="wikiResults">
                <div>How to create a challenge</div>
                <div>Escrow rules</div>
                <div>Donation tips</div>
                <div>Live streaming setup</div>
            </div>
        `;
        rightRail.appendChild(wikiCard);

        document.getElementById('wikiSearch').addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const results = document.getElementById('wikiResults');
            const items = results.querySelectorAll('div');
            items.forEach(item => {
                if (item.textContent.toLowerCase().includes(query)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    },
    
    // Task H: mobile overlay
    initMobileOverlay: function() {
        const plusBtn = document.getElementById('mobilePlusBtn');
        const overlay = document.getElementById('mobileOverlay');
        const closeBtn = document.getElementById('closeOverlay');
        if (plusBtn) {
            plusBtn.addEventListener('click', () => {
                overlay.classList.add('show');
            });
        }
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                overlay.classList.remove('show');
            });
        }
    },
    
    hideOverlay: function() {
        document.getElementById('mobileOverlay').classList.remove('show');
    },
    
    toggleMoreDropdown: function() {
        ThumbsApp.dropdown.showMoreDropdown();
    },
    
    toggleMenuDropdown: function() {
        ThumbsApp.dropdown.showMenuDropdown();
    }
};