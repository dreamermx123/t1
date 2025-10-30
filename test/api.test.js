import { getUser } from '../src/api.js';

test('getUser returns data', async () => {
    const fakeFetch = jest.fn(async () => ({
        json: async () => ({ id: 1, name: 'Ann' })
    }));

    const data = await getUser(fakeFetch, 1);
    expect(data).toEqual({ id: 1, name: 'Ann' });
});