export function unique(arr) {
    const seen = new Set();
    const out = [];
    for (const x of arr) {
        if (!seen.has(x)) {
            seen.add(x);
            out.push(x);
        }
    }
    return out;
}

export function flattenOnce(arr) {
    // сплющить только на 1 уровень
    const out = [];
    for (const item of arr) {
        if (Array.isArray(item)) out.push(...item);
        else out.push(item);
    }
    return out;
}

export function chunk(arr, size) {
    if (!Number.isInteger(size) || size <= 0) throw new Error('size must be positive integer');
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size));
    }
    return res;
}