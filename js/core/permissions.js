export const permissions = {
    canModerate(user) {
        return user && (user.role === 'mod' || user.role === 'admin');
    }
};