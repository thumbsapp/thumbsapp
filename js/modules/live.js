// js/modules/live.js (Updated with video controls)
(function() {
    window.ThumbsApp = window.ThumbsApp || {};
    
    ThumbsApp.live = {
        initVideoControls: function(videoElement) {
            const controls = document.createElement('div');
            controls.className = 'video-controls-overlay';
            controls.innerHTML = `
                <button class="control-btn" onclick="event.target.closest('video').volume += 0.1">🔊+</button>
                <button class="control-btn" onclick="event.target.closest('video').volume -= 0.1">🔊-</button>
                <button class="control-btn" onclick="event.target.closest('video').requestFullscreen()">⛶</button>
                <button class="control-btn" onclick="ThumbsApp.live.downloadVideo(this)">⬇️</button>
            `;
            videoElement.parentElement.appendChild(controls);
            let timeout;
            videoElement.parentElement.addEventListener('mousemove', () => {
                controls.style.opacity = '1';
                clearTimeout(timeout);
                timeout = setTimeout(() => { controls.style.opacity = '0'; }, 3000);
            });
            videoElement.parentElement.addEventListener('mouseleave', () => {
                controls.style.opacity = '0';
            });
        },

        downloadVideo: function(btn) {
            // dummy download
            alert('Download started (simulated)');
        }
    };
})();