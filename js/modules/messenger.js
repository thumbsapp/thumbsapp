// js/modules/messenger.js
(function() {
    window.ThumbsApp = window.ThumbsApp || {};
    
    ThumbsApp.messenger = {
        renderMessages: function() {
            const container = document.getElementById('centerFeed');
            container.innerHTML = `
                <div class="messages-container">
                    <div class="conversations-list" id="convList"></div>
                    <div class="chat-window" id="chatWindow">
                        <div class="chat-messages" id="chatMessages"></div>
                        <div class="chat-input-area">
                            <input type="text" id="messageInput" placeholder="Type a message...">
                            <button onclick="ThumbsApp.messenger.sendMessage()">Send</button>
                        </div>
                    </div>
                </div>
            `;
            this.loadConversations();
        },
        
        loadConversations: function() {
            const list = document.getElementById('convList');
            ThumbsApp.state.messages.forEach(conv => {
                const div = document.createElement('div');
                div.className = 'conversation-item';
                div.textContent = conv.with;
                div.onclick = () => this.openConversation(conv.id);
                list.appendChild(div);
            });
        },
        
        openConversation: function(convId) {
            const conv = ThumbsApp.state.messages.find(c => c.id === convId);
            const msgDiv = document.getElementById('chatMessages');
            msgDiv.innerHTML = conv.messages.map(m => `<div><b>${m.from}:</b> ${m.text}</div>`).join('');
        },
        
        sendMessage: function() {
            const input = document.getElementById('messageInput');
            if (input.value) {
                // store in localStorage
                const msg = { from: 'me', text: input.value, timestamp: Date.now() };
                // assume first conversation for demo
                if (ThumbsApp.state.messages[0]) {
                    ThumbsApp.state.messages[0].messages.push(msg);
                    ThumbsApp.state.save();
                }
                input.value = '';
                this.openConversation(ThumbsApp.state.messages[0].id);
            }
        }
    };
})();