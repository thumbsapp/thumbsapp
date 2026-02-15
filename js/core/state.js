// js/core/state.js
(function() {
    window.ThumbsApp = window.ThumbsApp || {};
    
    ThumbsApp.state = {
        user: null,
        feed: [],
        games: [],
        live: [],
        wallet: { balance: 1250, donations: [] },
        notifications: [],
        messages: [],
        escrow: [],
        
        init: async function() {
            // load from localStorage or fetch initial data
            const saved = ThumbsApp.storage.get('thumbsapp_state');
            if (saved) {
                Object.assign(this, saved);
            } else {
                await this.loadInitialData();
            }
            // set default user if none
            if (!this.user) {
                this.user = {
                    id: 'user1',
                    username: 'ThumbMaster',
                    avatar: 'assets/avatars/avatar1.jpg',
                    level: 'L5',
                    reputation: 85,
                    country: 'us'
                };
            }
            this.save();
        },
        
        loadInitialData: async function() {
            try {
                const [users, posts, games, liveData, messagesData] = await Promise.all([
                    fetch('data/users.json').then(r => r.json()),
                    fetch('data/posts.json').then(r => r.json()),
                    fetch('data/games.json').then(r => r.json()),
                    fetch('data/live.json').then(r => r.json()),
                    fetch('data/messages.json').then(r => r.json())
                ]);
                this.feed = posts;
                this.games = games;
                this.live = liveData;
                this.messages = messagesData;
                // other data...
            } catch (e) {
                console.warn('Using fallback data');
                this.fallbackData();
            }
        },
        
        fallbackData: function() {
            this.feed = [
                { id: 'p1', userId: 'u1', type: 'challenge', content: 'Who wants to play?', game: 'Valorant', difficulty: 'Hard', level: 'L4', likes: 24, comments: 5, shares: 2, donations: 150, timestamp: '2h ago' }
            ];
            this.games = [{ id: 'g1', name: 'Valorant' }];
            this.live = [{ id: 'l1', playerA: 'u1', playerB: 'u2', viewers: 123 }];
        },
        
        save: function() {
            const stateCopy = { ...this };
            // don't save methods
            ThumbsApp.storage.set('thumbsapp_state', stateCopy);
        },
        
        update: function(key, value) {
            this[key] = value;
            this.save();
        }
    };
})();