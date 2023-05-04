const {Dealership} = require("./dealership");
const {Car} = require("./car");

const car1 = new Car("Mercedes", 17000, "V8");
const car2 = new Car("Audi", 60000, "V6");
const car3 = new Car("Ferrari", 100000, "V12");
const car4 = new Car("VW", 7000, "V6");
const car5 = new Car("Bugatti", 1500000, "W16");

const dealership1 = new Dealership("T Dealership", 6, [car1, car2, car3, car4, car5]);

describe("car properties access", () => {

  test("can access dealership name", () => {
    const expected = "T Dealership";
    const actual = dealership1.name;
    expect(actual).toBe(expected);
  })

  test("can access dealership maxNumOfCars", () => {
    const expected = 6;
    const actual = dealership1.maxNumOfCars;
    expect(actual).toBe(expected);
  })

})

describe("Dealership prototype methods", () => {

  test("can count cars", () => {
    const expected = 5;
    const actual = dealership1.countCars();
    expect(actual).toBe(expected);
  })

  const car6 = new Car("Audi", 100000, "V8");

  test("can add cars", () => {
    dealership1.addCar(car6);
    const expected = car6;
    const actual = dealership1.carsInStock[5];
    expect(actual).toBe(expected);
  })

  test("can list all car manufacturers", () => {
    const expected = new Set(["Mercedes", "Audi", "Ferrari", "VW", "Bugatti"]);
    const actual = dealership1.listCarManufacturers();
    expect(actual).toEqual(expected);
  })

  test("can find the total value of all cars in stock", () => {
    const expected = 1784000;
    const actual = dealership1.getTotalValueOfCars();
    expect(actual).toBe(expected);
  })

  test("can filter by manufacturer", () => {
    const manufacturerCallback = (manufacturer) => {
      return dealership1.carsInStock.filter(car => car.manufacturer === manufacturer);
    }
    const expected = [car2, car6];
    const actual = dealership1.filterBy("Audi", manufacturerCallback);
    expect(actual).toEqual(expected);
  })

  test("can filter by price", () => {
    const priceCallback = (price) => {
      return dealership1.carsInStock.filter(car => car.price <= price);
    }
    const expected = [car4];
    const actual = dealership1.filterBy(7000, priceCallback);
    expect(actual).toEqual(expected);
  })
  
})