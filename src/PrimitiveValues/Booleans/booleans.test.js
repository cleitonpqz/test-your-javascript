const getTrueValue = require("./booleans");

describe("Booleans", () => {
  test("should be true", () => {
    const value = getTrueValue();
    expect(value).toBeTruthy();
  });

  test("should be false", () => {
    const value = !getTrueValue();
    expect(value).toBeFalsy();
  });
});
