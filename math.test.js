const { sumPlus, sumMinus, sumMultiply,sumDivide } = require("./math");

test("sum add two numbers", () => {
    const result = sumPlus(20, 30)
    const expected = 50;
    expect(result).toBe(expected);
});
test("sum add two numbers", () => {
    const result = sumMinus(25, 25)
    const expected = 0;
    expect(result).toBe(expected);
});
test("sum add two numbers", () => {
    const result = sumMultiply(2, 3)
    const expected = 6;
    expect(result).toBe(expected);
});
test("sum add two numbers", () => {
    const result = sumDivide(6, 2)
    const expected = 3;
    expect(result).toBe(expected);
});