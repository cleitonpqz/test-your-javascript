const getNull = require("./null");

test("should return null value", () => {
  const value = getNull();
  expect(value).toBeNull();
});
