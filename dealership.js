const Dealership = function(name, maxNumOfCars, carsInStock) {
    this.name = name;
    this.maxNumOfCars = maxNumOfCars;
    this.carsInStock = carsInStock;
    this.balance = 0;
  }
  
  Dealership.prototype.countCars = function() {
    return this.carsInStock.length;
  }
  
  Dealership.prototype.addCar = function(car) {
    if (this.carsInStock.length < this.maxNumOfCars) {
      this.carsInStock.push(car);
  }}
  
  Dealership.prototype.listCarManufacturers = function() {
    return new Set(this.carsInStock.reduce((accumulator, car) => accumulator.concat(car.manufacturer), []));
  }
  
  
  
  const manufacturerCallback = (manufacturer) => {
      return this.carsInStock.filter(car => car.manufacturer === manufacturer);
  }
  
  const engineTypeCallback = (engineType) => {
      return this.carsInStock.filter(car => car.engineType === engineType);
  }
  
  const priceCallback = (price) => {
      return this.carsInStock.filter(car => car.price <= price);
  }
  
  
  Dealership.prototype.filterBy = function(search, callback){
      return callback(search);
  }
  
  Dealership.prototype.getTotalValueOfCars = function() {
    return this.carsInStock.reduce((accumulator, car) => accumulator + car.price, 0);
  }
  
  module.exports = {Dealership};
  
