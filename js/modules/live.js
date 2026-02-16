// js/modules/live.js (full updated file with video controls)
window.ThumbsApp = window.ThumbsApp || {};

ThumbsApp.live = {
    isLiveActive: true,
    interval: null,
    
    startSimulation: function() {
        this.interval = setInterval(() => {
            ThumbsApp.state.live.forEach(match => {
                match.viewers += Math.floor(Math.random() * 10) - 3;
                if (match.viewers < 0) match.viewers = 0;
            });
            ThumbsApp.ui.renderRightRail();
        }, 10000);
    },
    
    stopSimulation: function() {
        clearInterval(this.interval);
    },
    
    setupVideoControls: function() {
        document.querySelectorAll('.live-video-container').forEach(container => {
            const video = container.querySelector('video');
            if (!video) return;
            const controls = document.createElement('div');
            controls.className = 'video-controls-overlay';
            controls.innerHTML = `
                <button class="control-btn" onclick="event.stopPropagation(); this.closest('.live-video-container').querySelector('video').volume += 0.1">🔊+</button>
                <button class="control-btn" onclick="event.stopPropagation(); this.closest('.live-video-container').querySelector('video').volume -= 0.1">🔊-</button>
                <button class="control-btn" onclick="event.stopPropagation(); alert('Download simulated')">⬇️</button>
                <button class="control-btn" onclick="event.stopPropagation(); alert('Settings')">⚙️</button>
                <button class="control-btn" onclick="event.stopPropagation(); this.closest('.live-video-container').querySelector('video').requestFullscreen()">⛶</button>
            `;
            container.appendChild(controls);
        });
    },
    
    renderLiveArena: function() {
        const container = document.getElementById('centerFeed');
        container.innerHTML = `
            <div class="live-video-container">
                <video src="assets/videos/live-stream.mp4" autoplay muted loop playsinline></video>
            </div>
            <div class="match-info">
                <h2>Live Match: Player1 vs Player2</h2>
                <p>Viewers: 1234</p>
            </div>
        `;
        this.setupVideoControls();
    }
};