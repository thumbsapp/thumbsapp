export const moderationEngine = {
    reportPost(postId, reason) {
        // store report in localStorage
        const reports = JSON.parse(localStorage.getItem('reports') || '[]');
        reports.push({ postId, reason, timestamp: Date.now() });
        localStorage.setItem('reports', JSON.stringify(reports));
    }
};