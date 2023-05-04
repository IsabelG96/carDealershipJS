const Dealership = function(name, maxCars) {

    this.name = name; 
    this.maxCars = maxCars;
    this.carsInStock = []  

}

Dealership.prototype.stockCount = function() {
    return this.carsInStock.length 
}

Dealership.prototype.addCarToStock = function(car){
   this.carsInStock.push(car);
}

Dealership.prototype.getAllCarManufacturers = function(){
    ;
}

Dealership.prototype.findAllCarsFromManufacturer = function(manufacturer){
    ;
}

Dealership.prototype.calculateStockValue = function(manufacturer){
    ;
}

module.exports = Dealership;