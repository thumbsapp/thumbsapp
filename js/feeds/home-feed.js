import { feedRenderer } from './feed-renderer.js';
import { infiniteScroll } from '../core/infinite-scroll.js';
import { feedMemory } from './feed-memory.js';

const feedStream = document.getElementById('feedStream');
const trigger = document.querySelector('.infinite-scroll-trigger');

let page = 0;
async function loadMore() {
    const posts = await fetchMockPosts(page);
    feedRenderer.renderPosts(posts, feedStream);
    page++;
}

function fetchMockPosts(page) {
    // mock data
    return Promise.resolve([
        { type: 'post', id: 1, content: 'Hello' },
        { type: 'challenge', id: 2, bet: 10 }
    ]);
}

infiniteScroll.observe(trigger, loadMore);
loadMore();