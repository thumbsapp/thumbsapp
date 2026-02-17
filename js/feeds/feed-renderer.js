export const feedRenderer = {
    renderPosts(posts, container) {
        posts.forEach(post => {
            const card = this.createCard(post);
            container.appendChild(card);
        });
    },
    createCard(post) {
        const div = document.createElement('div');
        div.className = 'post-card';
        div.innerHTML = `<div>${post.content || 'Challenge'}</div>`;
        return div;
    }
};