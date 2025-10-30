// test/arrayTools.test.js
import { unique, flattenOnce, chunk } from '../src/arrayTools.js';

describe('массивы', () => {
    test('toEqual: точное соответствие массива (важен порядок)', () => {
        expect([1, 2, 3]).toEqual([1, 2, 3]);
        expect([1, 2, 3]).not.toEqual([3, 2, 1]);
    });

    test('toContain / toContainEqual: элемент в массиве', () => {
        const arr = [1, 2, { a: 1 }];
        expect(arr).toContain(2);                 // примитив
        expect(arr).toContainEqual({ a: 1 });    // объект по содержимому
    });

    test('toHaveLength: длина массива', () => {
        const arr = ['a', 'b', 'c'];
        expect(arr).toHaveLength(3);
    });

    test('unique: убирает повторы, сохраняет порядок первых встреч', () => {
        expect(unique([1, 2, 2, 3, 1, 4])).toEqual([1, 2, 3, 4]);
        expect(unique([1, '1', 1])).toEqual([1, '1']); // разные типы не сливаются
    });

    test('flattenOnce: сплющивание на 1 уровень', () => {
        expect(flattenOnce([1, [2, 3], [4], 5])).toEqual([1, 2, 3, 4, 5]);
        expect(flattenOnce([[1], [[2, 3]]])).toEqual([1, [2, 3]]); // только 1 уровень
    });

    test('chunk: разбивка на подмассивы', () => {
        expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
        expect(chunk([], 3)).toEqual([]);
    });

    test('chunk: неправильный size -> ошибка', () => {
        expect(() => chunk([1, 2], 0)).toThrow();
        expect(() => chunk([1, 2], -1)).toThrow();
        expect(() => chunk([1, 2], 1.5)).toThrow();
    });
});