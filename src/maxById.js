function isObject(variable) {
    return typeof variable === 'object' && variable !== null;
}

export function maxById(arr) {
    const maxObjId = arr.reduce((acc, item) => {
        if (acc === null && isObject(item)) {
            return item
        }
        if (acc.value < item.value) {
            return item
        }
        return acc
    }, null)
    return maxObjId
}

const res = maxById([
    {
        id: 1,
        value: 1,
    },
    {
        id: 1,
        value: 3,
    },
    {
        id: 1,
        value: 2,
    },
])

