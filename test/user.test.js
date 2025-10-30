import { makeUser, deactivate, hasRole } from '../src/user.js';

describe('объекты', () => {
    test('toEqual: глубокое сравнение объектов', () => {
        const u = makeUser(1, 'Ann');
        expect(u).toEqual({ id: 1, name: 'Ann', active: true, meta: { role: 'user' } });
    });

    test('toMatchObject: частичное сравнение (только важные поля)', () => {
        const u = makeUser(2, 'Bob');
        expect(u).toMatchObject({ id: 2, active: true });
    });

    test('объект не мутируется (иммутабельность)', () => {
        const u1 = makeUser(3, 'Cat');
        const u2 = deactivate(u1);

        expect(u1).toEqual({ id: 3, name: 'Cat', active: true, meta: { role: 'user' } });
        expect(u2).toEqual({ id: 3, name: 'Cat', active: false, meta: { role: 'user' } });
        expect(u1).not.toBe(u2); // разные ссылки
    });

    test('проверка ключей и типов', () => {
        const u = makeUser(4, 'Dan');
        expect(u).toHaveProperty('meta.role', 'user'); // вложенное свойство
        expect(typeof u.name).toBe('string');
    });

    test('логика по роли', () => {
        const u = makeUser(5, 'Eve');
        expect(hasRole(u, 'user')).toBe(true);
        expect(hasRole(u, 'admin')).toBe(false);
    });
});