// js/modules/dropdown.js (new file)
(function() {
    window.ThumbsApp = window.ThumbsApp || {};
    
    ThumbsApp.dropdown = {
        init: function() {
            // close all dropdowns when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.nav-dropdown')) {
                    document.querySelectorAll('.dropdown-menu').forEach(menu => {
                        menu.classList.remove('show');
                    });
                }
            });

            // MORE dropdown (text) toggle
            const moreBtn = document.querySelector('.more-btn');
            if (moreBtn) {
                moreBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const dropdown = document.getElementById('moreDropdown');
                    dropdown.classList.toggle('show');
                    // close others
                    document.querySelectorAll('.dropdown-menu').forEach(menu => {
                        if (menu !== dropdown) menu.classList.remove('show');
                    });
                });
            }

            // MENU dropdown toggle
            const menuBtn = document.querySelector('.menu-btn');
            if (menuBtn) {
                menuBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const dropdown = document.getElementById('menuDropdown');
                    dropdown.classList.toggle('show');
                    document.querySelectorAll('.dropdown-menu').forEach(menu => {
                        if (menu !== dropdown) menu.classList.remove('show');
                    });
                });
            }

            // MORE icon dropdown toggle
            const moreIconBtn = document.querySelector('.more-icon-btn');
            if (moreIconBtn) {
                moreIconBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const dropdown = document.getElementById('moreIconDropdown');
                    dropdown.classList.toggle('show');
                    document.querySelectorAll('.dropdown-menu').forEach(menu => {
                        if (menu !== dropdown) menu.classList.remove('show');
                    });
                });
            }

            // theme switching (simple simulation)
            document.querySelectorAll('[data-theme]').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const theme = e.target.dataset.theme;
                    document.body.className = theme; // simplistic
                    localStorage.setItem('theme', theme);
                });
            });

            // language selection simulation
            document.querySelectorAll('.dropdown-section a').forEach(link => {
                if (link.parentElement.querySelector('strong')?.textContent === 'Language') {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        alert('Language changed to ' + e.target.textContent);
                    });
                }
            });

            // other options (mute, report, etc.)
            document.querySelectorAll('.dropdown-section a').forEach(link => {
                const section = link.closest('.dropdown-section');
                if (section && section.querySelector('strong')?.textContent === 'Options') {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        alert(e.target.textContent + ' clicked (simulated)');
                    });
                }
            });
        },

        // for mobile overlay (Task H)
        showMoreDropdown: function() {
            // simulate opening more dropdown in mobile view
            alert('MORE options (Language, Theme, etc.)');
        },
        showMenuDropdown: function() {
            alert('MENU options (Followers, Create Post, etc.)');
        }
    };

    // initialize on load
    document.addEventListener('DOMContentLoaded', () => {
        ThumbsApp.dropdown.init();
    });
})();