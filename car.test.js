const {Car} = require("./car");

const car1 = new Car("Mercedes", 17000, "V8");

describe("car properties access", () => {

  test("can access manufacturer property", () => {
    const expected = "Mercedes";
    const actual = car1.manufacturer;
    expect(actual).toBe(expected);
  })

  test("can access price property", () => {
    const expected = 17000;
    const actual = car1.price;
    expect(actual).toBe(expected);
  })

  test("can access engine property", () => {
    const expected = "V8";
    const actual = car1.engineType;
    expect(actual).toBe(expected);
  })

})