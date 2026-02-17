export const infiniteScroll = {
    observe(element, callback) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) callback();
            });
        });
        observer.observe(element);
    }
};