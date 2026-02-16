// js/modules/thumtok.js
(function() {
    window.ThumbsApp = window.ThumbsApp || {};
    
    ThumbsApp.thumtok = {
        initThumtok: function() {
            const container = document.getElementById('centerFeed');
            container.innerHTML = `
                <div class="thumtok-container">
                    <div class="thumtok-video-card">
                        <video src="assets/videos/vid1.mp4" loop muted playsinline></video>
                        <div class="thumtok-overlay">
                            <button class="thumtok-action">👍</button>
                            <button class="thumtok-action">📊</button>
                            <button class="thumtok-action">💬</button>
                            <button class="thumtok-action">🔁</button>
                            <button class="thumtok-action">💰</button>
                        </div>
                    </div>
                    <div class="thumtok-video-card">
                        <video src="assets/videos/vid2.mp4" loop muted playsinline></video>
                        <div class="thumtok-overlay">...</div>
                    </div>
                </div>
            `;
            this.setupScrollPlay();
        },
        
        setupScrollPlay: function() {
            const videos = document.querySelectorAll('.thumtok-video-card video');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.play();
                    } else {
                        entry.target.pause();
                    }
                });
            }, { threshold: 0.7 });
            videos.forEach(v => observer.observe(v));
        }
    };
})();