// js/modules/feed.js (full updated file with engagement bar changes)
// (Only showing the modified parts; assume all previous code remains)
// For brevity, we present the entire file with the new engagement bar.

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
            <div class="engagement-bar-new">
                <button class="engagement-btn" onclick="ThumbsApp.feed.follow('${post.userId}')">➕ Follow</button>
                <button class="engagement-btn" onclick="ThumbsApp.feed.thumbsUp('${post.id}')">👍 <span>${post.likes}</span></button>
                <button class="engagement-btn" onclick="ThumbsApp.feed.thumbsDown('${post.id}')">👎</button>
                <button class="engagement-btn" onclick="ThumbsApp.feed.tips('${post.userId}')">💸 Tips</button>
                <button class="engagement-btn" onclick="ThumbsApp.feed.bookmark('${post.id}')">🔖</button>
                <button class="engagement-btn" onclick="ThumbsApp.feed.share('${post.id}')">🔁 Share</button>
                <button class="engagement-btn" onclick="ThumbsApp.feed.reply('${post.id}')">↩️ Reply</button>
                <button class="engagement-btn" onclick="ThumbsApp.feed.repost('${post.id}')">🔄 Repost</button>
            </div>
            <button class="accept-challenge" onclick="ThumbsApp.challenges.accept('${post.id}')">Accept Challenge</button>
        `;
        return card;
    },
    
    follow: function(userId) {
        alert(`Following user ${userId} (simulated)`);
    },
    thumbsUp: function(postId) {
        const post = ThumbsApp.state.feed.find(p => p.id === postId);
        if (post) {
            post.likes++;
            ThumbsApp.state.save();
            this.renderFeed();
        }
    },
    thumbsDown: function(postId) {
        alert('Thumbs down recorded');
    },
    tips: function(userId) {
        alert(`Tip for user ${userId} (simulated)`);
    },
    bookmark: function(postId) {
        alert('Bookmarked');
    },
    share: function(postId) {
        alert('Shared');
    },
    reply: function(postId) {
        alert('Reply modal');
    },
    repost: function(postId) {
        alert('Reposted');
    },
    
    // existing methods like like, shoutout, etc. might be removed or kept; we keep them for compatibility
    like: function(postId) {
        this.thumbsUp(postId);
    },
    shoutout: function(postId) {
        alert('Shoutout modal');
    }
};