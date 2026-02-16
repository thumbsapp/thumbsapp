// js/modules/challenges.js (full updated file with auth methods)
window.ThumbsApp = window.ThumbsApp || {};

ThumbsApp.challenges = {
    openCreateModal: function() {
        const modal = document.getElementById('modalContainer');
        modal.innerHTML = `
            <div class="modal active">
                <div class="modal-content">
                    <span class="close-modal" onclick="ThumbsApp.challenges.closeModal()">&times;</span>
                    <h2>Create Challenge</h2>
                    <div class="form-step">
                        <label>Select Game</label>
                        <select id="gameSelect">
                            ${ThumbsApp.state.games.map(g => `<option value="${g.id}">${g.name}</option>`).join('')}
                        </select>
                    </div>
                    <div class="form-step">
                        <label>Difficulty</label>
                        <select id="difficultySelect">
                            <option>Easy</option><option>Medium</option><option>Hard</option>
                        </select>
                    </div>
                    <div class="form-step">
                        <label>Level</label>
                        <select id="levelSelect">
                            <option>L1</option><option>L2</option><option>L3</option><option>L4</option><option>L5</option><option>L6</option>
                        </select>
                    </div>
                    <div class="form-step">
                        <label>Attach Gift (optional)</label>
                        <select id="giftSelect">
                            <option value="">None</option>
                            <option value="gift1">Gold Star</option>
                        </select>
                    </div>
                    <div class="escrow-preview">
                        <div>Stake: $50</div><div>Fee: $5</div><div>Payout: $95</div>
                    </div>
                    <div class="modal-actions">
                        <button class="cancel-btn" onclick="ThumbsApp.challenges.closeModal()">Cancel</button>
                        <button class="submit-btn" onclick="ThumbsApp.challenges.submitChallenge()">Create</button>
                    </div>
                </div>
            </div>
        `;
    },
    
    closeModal: function() {
        document.getElementById('modalContainer').innerHTML = '';
    },
    
    submitChallenge: function() {
        const escrowRecord = {
            id: 'esc' + Date.now(),
            playerA: ThumbsApp.state.user ? ThumbsApp.state.user.id : 'guest',
            playerB: null,
            stake: 50,
            fee: 5,
            payout: 95,
            status: 'pending'
        };
        ThumbsApp.state.escrow.push(escrowRecord);
        ThumbsApp.state.save();
        alert('Challenge created! Stored in escrow.');
        this.closeModal();
    },
    
    accept: function(postId) {
        alert('Challenge accepted! Escrow visualization shown.');
    },
    
    checkAuthAndCreate: function() {
        if (!ThumbsApp.state.user) {
            const action = confirm('Not logged in. Press OK to simulate login, Cancel to simulate signup.');
            if (action) {
                this.simulateLogin();
            } else {
                this.simulateSignup();
            }
        } else {
            this.openCreateModal();
        }
    },
    
    simulateLogin: function() {
        ThumbsApp.state.user = {
            id: 'user' + Date.now(),
            username: 'LoggedInUser',
            avatar: 'assets/avatars/default.jpg',
            level: 'L3',
            reputation: 50,
            country: 'us'
        };
        ThumbsApp.state.save();
        alert('Logged in as ' + ThumbsApp.state.user.username);
        ThumbsApp.ui.renderLeftSidebar();
        document.getElementById('headerAvatar').src = ThumbsApp.state.user.avatar;
        this.openCreateModal();
    },
    
    simulateSignup: function() {
        const name = prompt('Enter username:') || 'NewUser';
        ThumbsApp.state.user = {
            id: 'user' + Date.now(),
            username: name,
            avatar: 'assets/avatars/default.jpg',
            level: 'L1',
            reputation: 0,
            country: 'us'
        };
        ThumbsApp.state.save();
        alert('Signed up as ' + name);
        ThumbsApp.ui.renderLeftSidebar();
        document.getElementById('headerAvatar').src = ThumbsApp.state.user.avatar;
        this.openCreateModal();
    }
};