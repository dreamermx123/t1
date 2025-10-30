
export function makeUser(id, name) {
    return { id, name, active: true, meta: { role: 'user' } };
}

export function deactivate(user) {
    return { ...user, active: false };
}

export function hasRole(user, role) {
    return user?.meta?.role === role;
}