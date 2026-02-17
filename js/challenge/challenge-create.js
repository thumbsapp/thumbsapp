import { auth } from '../core/auth.js';
import { idGenerator } from '../utils/id-generator.js';

document.getElementById('challengeCreateForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const challenge = {
        id: idGenerator.generate(),
        game: document.getElementById('gameSelect').value,
        level: document.getElementById('levelSelect').value,
        bet: document.getElementById('betAmount').value,
        gift: document.getElementById('giftIncentive').value,
        creator: auth.currentUser?.id,
        status: 'waiting'
    };
    const challenges = JSON.parse(localStorage.getItem('challenges') || '[]');
    challenges.push(challenge);
    localStorage.setItem('challenges', JSON.stringify(challenges));
    window.location.href = '/challenge-details.html?id=' + challenge.id;
});