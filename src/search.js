
export function findById(list, id) {
    return list.find(x => x.id === id) || null;
}