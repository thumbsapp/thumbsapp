export const modalManager = {
    open(modalId) {
        document.getElementById(modalId).style.display = 'block';
    },
    close(modalId) {
        document.getElementById(modalId).style.display = 'none';
    }
};