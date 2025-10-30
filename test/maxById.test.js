import { maxById } from "../src/maxById";

test("ищем максимальное значение", () => {
    const data = [
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
    ]


    expect(maxById(data)).toEqual({
        id: 1,
        value: 3,
    })
})
test("ищем максимальное перове", () => {
    const data2max = [
        {
            id: 1,
            value: 1,
        },
        {
            id: 2,
            value: 2,
        },
        {
            id: 3,
            value: 2,
        },
    ]
    expect(maxById(data2max)).toEqual({
        id: 2,
        value: 2,
    })
})
test("ищем максимальное значение", () => {
    const data = [
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
    ]
    expect(maxById([{
        id: 1,
        value: 3,
    }])).toEqual({
        id: 1,
        value: 3,
    })
    expect(maxById(data)).toEqual({
        id: 1,
        value: 3,
    })
    expect(maxById([])).toBe(null)
})