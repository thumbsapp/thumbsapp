// js/modules/feed.js (Updated with competition interaction row)
(function() {
    window.ThumbsApp = window.ThumbsApp || {};
    
    ThumbsApp.feed = {
        renderFeed: function() {
            const feedContainer = document.getElementById('centerFeed');
            feedContainer.innerHTML = '<div class="feed-container"></div>';
            const container = feedContainer.querySelector('.feed-container');
            
            ThumbsApp.state.feed.forEach(post => {
                const card = this.createCard(post);
                container.appendChild(card);
            });
        },

        createCard: function(post) {
            const card = document.createElement('div');
            card.className = 'feed-card';
            // competition interaction row with SVGs
            const interactionRow = `
                <div class="competition-row">
                    <button class="interaction-btn" onclick="ThumbsApp.feed.follow('${post.userId}')"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> <span>Follow</span></button>
                    <button class="interaction-btn" onclick="ThumbsApp.feed.like('${post.id}')"><svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 1.96-1.56l1.68-7A2 2 0 0 0 20 11h-6z"/></svg> <span>${post.likes}</span></button>
                    <button class="interaction-btn" onclick="ThumbsApp.feed.dislike('${post.id}')"><svg viewBox="0 0 24 24"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-1.96 1.56l-1.68 7A2 2 0 0 0 4 13h6z"/></svg></button>
                    <button class="interaction-btn" onclick="ThumbsApp.donations.openDonateModal('${post.userId}')"><svg viewBox="0 0 24 24"><path d="M12 2v20M17 7h-3.5a2.5 2.5 0 0 0 0 5h2a2.5 2.5 0 0 1 0 5H7"/></svg> Tip</button>
                    <button class="interaction-btn" onclick="ThumbsApp.feed.save('${post.id}')"><svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg></button>
                    <button class="interaction-btn" onclick="ThumbsApp.feed.reply('${post.id}')"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Reply</button>
                    <button class="interaction-btn" onclick="ThumbsApp.feed.repost('${post.id}')"><svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> Repost</button>
                    <button class="interaction-btn" onclick="ThumbsApp.feed.share('${post.id}')"><svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> Share</button>
                </div>
            `;

            card.innerHTML = `
                <div class="card-header">
                    <img src="assets/avatars/avatar${post.userId}.jpg" class="avatar-sm">
                    <div class="user-info">
                        <span class="username">User${post.userId}</span>
                        <span class="verified-badge">✅</span>
                        <img src="assets/flags/us.png" class="country-flag">
                        <div class="reputation-meter"><div class="reputation-fill" style="width:70%"></div></div>
                        <span class="timestamp">${post.timestamp}</span>
                    </div>
                    ${ThumbsApp.ui.renderPostContextMenu(post.id)} <!-- three-dots menu -->
                </div>
                <div class="card-badges">
                    <span class="game-tag">🎮 ${post.game}</span>
                    <span class="game-tag difficulty">${post.difficulty}</span>
                    <span class="game-tag level-${post.level.toLowerCase()}">${post.level}</span>
                    ${post.gift ? '<span class="game-tag gift-badge">🎁 Gift</span>' : ''}
                    ${post.sponsor ? '<span class="game-tag sponsor-badge">🏢 Sponsor</span>' : ''}
                </div>
                <div class="card-content">
                    <p>${post.content}</p>
                    ${post.image ? `<img src="${post.image}" class="card-image">` : ''}
                </div>
                <div class="escrow-preview">
                    <div class="escrow-stake">Stake: <span class="amount">$${post.stake || 50}</span></div>
                    <div class="escrow-fee">Fee: <span class="amount">$${post.fee || 5}</span></div>
                    <div class="escrow-payout">Payout: <span class="amount">$${post.payout || 95}</span></div>
                </div>
                ${interactionRow}
            `;
            return card;
        },

        like: function(postId) { /* increment like */ },
        dislike: function(postId) { /* dislike logic */ },
        follow: function(userId) { /* follow */ },
        save: function(postId) { /* save post */ },
        reply: function(postId) { /* open reply */ },
        repost: function(postId) { /* repost */ },
        share: function(postId) { /* share */ },
        reportPost: function(postId) { alert('Reported'); },
        copyLink: function(postId) { navigator.clipboard.writeText(window.location.origin + '/post/' + postId); },
        savePost: function(postId) { /* save to localStorage */ }
    };
})();