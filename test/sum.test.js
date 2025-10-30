import { sum } from '../src/sum.js';




describe('sum()', () => {
    test('adds numbers', () => {
        expect(sum(2, 3)).toBe(5);
    });

    test('adds numbers -', () => {
        expect(sum(2, -3)).toBe(-1);
    });

    test('adds numbers + string', () => {
        expect(() => sum(2, "22")).toThrow("Both arguments must be numbers");
    });

    test('adds numbers + string', () => {
        expect(() => (sum(2, ""))).toThrow("Both arguments must be numbers");
    });
});