export async function getUser(fetchImpl, id) {
    const res = await fetchImpl(`https://example.com/users/${id}`);
    return res.json();
}