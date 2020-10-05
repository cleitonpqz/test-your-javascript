const getUndefined = require("./undefined");

test("should return undefined type of value", () => {
  const result = getUndefined();

  expect(result).toBeUndefined();
});
