// three-dot menu for posts
import { moderationEngine } from '../core/moderation-engine.js';

export function attachPostMenu(menuElement, postId) {
    menuElement.addEventListener('click', (e) => {
        e.stopPropagation();
        // show menu
        const menu = document.createElement('div');
        menu.className = 'dropdown-content';
        menu.innerHTML = `
            <button class="report-post">Report Post</button>
            <button class="mute-user">Mute User</button>
            <button class="copy-link">Copy Link</button>
            <button class="save">Save</button>
            <button class="share">Share</button>
        `;
        document.body.appendChild(menu);
        // position
        // event listeners
        menu.querySelector('.report-post').addEventListener('click', () => {
            moderationEngine.reportPost(postId);
        });
        menu.querySelector('.mute-user').addEventListener('click', () => {
            moderationEngine.muteUser(postId);
        });
        menu.querySelector('.copy-link').addEventListener('click', () => {
            // copy link logic
        });
        menu.querySelector('.save').addEventListener('click', () => {
            // save logic
        });
        menu.querySelector('.share').addEventListener('click', () => {
            // share logic
        });
    });
}