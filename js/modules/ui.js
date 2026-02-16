// js/modules/ui.js (Updated with new header and dropdowns)
(function() {
    window.ThumbsApp = window.ThumbsApp || {};
    
    ThumbsApp.ui = {
        renderHeader: function() {
            const headerHTML = `
                <header>
                    <div class="header-container">
                        <div class="logo">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00f5d4" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 1.96-1.56l1.68-7A2 2 0 0 0 20 11h-6z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
                            ThumbsApp
                        </div>
                        <nav class="main-nav">
                            <a href="feed.html" class="${ThumbsApp.router.currentPage === 'feed' ? 'active' : ''}">Home</a>
                            <a href="earn.html" class="${ThumbsApp.router.currentPage === 'earn' ? 'active' : ''}">Earn</a>
                            <a href="trending.html" class="${ThumbsApp.router.currentPage === 'trending' ? 'active' : ''}">Trending Now</a>
                        </nav>
                        <div class="header-actions">
                            <button class="create-challenge-btn" onclick="ThumbsApp.challenges.openCreateModal()">+ Create Challenge</button>
                            <div class="wallet-icon" onclick="ThumbsApp.wallet.show()">
                                <svg viewBox="0 0 24 24"><path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5"/><path d="M16 14h.01"/><circle cx="16" cy="14" r="1"/><path d="M3 10h18"/></svg>
                            </div>
                            <div class="notification-icon" onclick="ThumbsApp.notifications.open()">
                                <svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                                <span class="notification-badge">${ThumbsApp.state.notifications.length}</span>
                            </div>
                            <div class="avatar-icon" onclick="ThumbsApp.ui.toggleProfileMenu()">
                                <img src="${ThumbsApp.state.user.avatar || 'assets/avatars/default.jpg'}" alt="avatar">
                            </div>
                            <button class="more-button" onclick="ThumbsApp.ui.toggleMoreDropdown(event)">⋯</button>
                            <div class="more-dropdown" id="moreDropdown">
                                <div class="dropdown-item" onclick="ThumbsApp.ui.openLanguageSubmenu(event)">
                                    <span>🌍 Language</span>
                                    <span class="arrow">▶</span>
                                    <div class="submenu" id="languageSubmenu">
                                        <div class="radio-item"><input type="radio" name="lang" checked> English</div>
                                        <div class="radio-item"><input type="radio" name="lang"> French</div>
                                        <div class="radio-item"><input type="radio" name="lang"> Arabic</div>
                                    </div>
                                </div>
                                <div class="dropdown-item">🎨 Appearance</div>
                                <div class="dropdown-item">🖌 Theme</div>
                                <div class="dropdown-item">⭐ My Reputation</div>
                                <div class="dropdown-item">📊 My Activity</div>
                                <div class="dropdown-item">⚙ Settings</div>
                                <div class="dropdown-item">❓ Help Center</div>
                                <div class="dropdown-item" onclick="ThumbsApp.auth.logout()">🚪 Logout</div>
                            </div>
                        </div>
                    </div>
                </header>
            `;
            document.querySelector('#app').insertAdjacentHTML('afterbegin', headerHTML);
            this.attachMoreDropdownEvents();
        },

        toggleMoreDropdown: function(event) {
            event.stopPropagation();
            const dropdown = document.getElementById('moreDropdown');
            dropdown.classList.toggle('active');
            // close when clicking outside
            document.addEventListener('click', function closeDropdown(e) {
                if (!dropdown.contains(e.target) && !e.target.classList.contains('more-button')) {
                    dropdown.classList.remove('active');
                    document.removeEventListener('click', closeDropdown);
                }
            });
        },

        openLanguageSubmenu: function(event) {
            event.stopPropagation();
            const item = event.currentTarget;
            item.classList.toggle('open');
        },

        attachMoreDropdownEvents: function() {
            // any additional logic
        },

        renderFooter: function() {
            const footerHTML = `
                <footer>
                    <div class="pre-footer">
                        <div class="top-player"><span>🏆 Top Player:</span> <strong>ThumbMaster</strong> <span class="reputation-badge">Rep 92</span></div>
                        <div class="trending-hashtag">#ValorantChallenge</div>
                        <div class="mini-stats">📊 1.2k online</div>
                    </div>
                    <div class="footer-main">
                        <div class="footer-col brand">
                            <div class="logo">ThumbsApp</div>
                            <p>Competitive social arena. Play, earn, and connect.</p>
                            <div class="mini-reputation">
                                <span>Your Rep</span>
                                <div class="meter"><div class="fill" style="width: ${ThumbsApp.state.user.reputation || 70}%"></div></div>
                            </div>
                        </div>
                        <div class="platform-strip">
                            <a href="feed.html"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> Home</a>
                            <a href="live.html"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg> Live Arena</a>
                            <a href="games.html"><svg viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h4"/><path d="M14 12h4"/><circle cx="8" cy="10" r="1"/><circle cx="16" cy="14" r="1"/></svg> Games</a>
                            <a href="leaderboard.html"><svg viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M12 11v6"/><path d="M9 14h6"/></svg> Leaderboard</a>
                            <a href="thumtok.html"><svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M9 8l6 4-6 4V8z"/></svg> ThumTok</a>
                            <a href="ads.html"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 12h6"/><path d="M12 9v6"/></svg> Ads</a>
                            <a href="marketplace.html"><svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> Marketplace</a>
                        </div>
                        <div class="footer-col links">
                            <div class="accordion-header" onclick="ThumbsApp.ui.toggleAccordion(this)">About <span>▼</span></div>
                            <div class="accordion-content">
                                <a href="#">About</a>
                                <a href="#">Careers</a>
                                <a href="#">Blog</a>
                                <a href="#">Press</a>
                            </div>
                        </div>
                        <div class="footer-col links">
                            <div class="accordion-header" onclick="ThumbsApp.ui.toggleAccordion(this)">Safety <span>▼</span></div>
                            <div class="accordion-content">
                                <a href="#">Safety</a>
                                <a href="#">Community Rules</a>
                                <a href="#">Privacy</a>
                                <a href="#">Terms</a>
                            </div>
                        </div>
                        <div class="footer-col links">
                            <div class="accordion-header" onclick="ThumbsApp.ui.toggleAccordion(this)">Developers <span>▼</span></div>
                            <div class="accordion-content">
                                <a href="#">Developers</a>
                                <a href="#">API</a>
                                <a href="#">Monetization</a>
                                <a href="#">Support</a>
                            </div>
                        </div>
                    </div>
                    <div class="legal-strip">
                        <div>© 2026 ThumbsApp. All rights reserved.</div>
                        <div class="legal-links">
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                            <a href="#">Cookies</a>
                        </div>
                    </div>
                </footer>
            `;
            document.querySelector('#app').insertAdjacentHTML('beforeend', footerHTML);
        },

        toggleAccordion: function(header) {
            const col = header.closest('.footer-col.links');
            col.classList.toggle('active');
        },

        // Contextual menu for profile (three dots)
        renderProfileContextMenu: function(userId) {
            // This would be attached to a three-dots button on a profile card
            const menuHTML = `
                <div class="context-menu">
                    <button class="context-menu-trigger" onclick="this.parentElement.classList.toggle('active')">⋯</button>
                    <div class="context-dropdown">
                        <div class="dropdown-item" onclick="ThumbsApp.user.mute('${userId}')">Mute User</div>
                        <div class="dropdown-item" onclick="ThumbsApp.user.block('${userId}')">Block User</div>
                        <div class="dropdown-item" onclick="ThumbsApp.user.report('${userId}')">Report User</div>
                    </div>
                </div>
            `;
            return menuHTML;
        },

        // Post card context menu
        renderPostContextMenu: function(postId) {
            const menuHTML = `
                <div class="context-menu">
                    <button class="context-menu-trigger" onclick="this.parentElement.classList.toggle('active')">⋯</button>
                    <div class="context-dropdown">
                        <div class="dropdown-item" onclick="ThumbsApp.feed.reportPost('${postId}')">Report Post</div>
                        <div class="dropdown-item" onclick="ThumbsApp.user.muteFromPost('${postId}')">Mute User</div>
                        <div class="dropdown-item" onclick="ThumbsApp.feed.copyLink('${postId}')">Copy Link</div>
                        <div class="dropdown-item" onclick="ThumbsApp.feed.savePost('${postId}')">Save</div>
                        <div class="dropdown-item" onclick="ThumbsApp.feed.share('${postId}')">Share</div>
                    </div>
                </div>
            `;
            return menuHTML;
        }
    };
})();