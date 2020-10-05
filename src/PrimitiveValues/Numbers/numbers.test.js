const getRandomNumber = require("./numbers");

describe("Numbers", () => {
  test("should be a number", () => {
    const value = getRandomNumber();
    expect(typeof value === "Number").toBe(true);
  });

  test("should not repeat numbers", () => {
    const a = getRandomNumber();
    const b = getRandomNumber();

    expect(a).toBeDefined();
    expect(a.equals(b)).toBe(false);
  });
});
