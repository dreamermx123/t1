import { findById } from '../src/search.js';

test('поиск объекта по id', () => {
    const items = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
    expect(findById(items, 2)).toEqual({ id: 2, name: 'B' });
    expect(findById(items, 3)).toBeNull();
});