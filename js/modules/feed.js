// js/modules/feed.js
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
            
            // add ThumbTok section?
        },
        
        createCard: function(post) {
            const card = document.createElement('div');
            card.className = 'feed-card';
            // construct full card with all required elements
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
                <div class="engagement-bar">
                    <button class="engagement-btn" onclick="ThumbsApp.feed.like('${post.id}')">👍 <span>${post.likes}</span></button>
                    <button class="engagement-btn" onclick="ThumbsApp.feed.shoutout('${post.id}')">📊</button>
                    <button class="engagement-btn" onclick="ThumbsApp.messenger.openChat('${post.userId}')">💬</button>
                    <button class="engagement-btn" onclick="ThumbsApp.feed.share('${post.id}')">🔁</button>
                    <button class="engagement-btn donate-btn" onclick="ThumbsApp.donations.openDonateModal('${post.userId}')">💰</button>
                </div>
                <button class="accept-challenge" onclick="ThumbsApp.challenges.accept('${post.id}')">Accept Challenge</button>
            `;
            return card;
        },
        
        like: function(postId) {
            const post = ThumbsApp.state.feed.find(p => p.id === postId);
            if (post) {
                post.likes++;
                ThumbsApp.state.save();
                this.renderFeed(); // re-render for simplicity
            }
        },
        
        shoutout: function(postId) {
            alert('Shoutout modal - public reply');
        },
        
        share: function(postId) {
            alert('Shared!');
        }
    };
})();