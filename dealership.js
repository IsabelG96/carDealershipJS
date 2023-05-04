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
    manufacturerArray = this.carsInStock.map(car => car.manufacturer) 
    return manufacturerArray;    
}

Dealership.prototype.getCarsByManufacturer = function(manufacturer){
    filteredArray = this.carsInStock.filter(car => car.manufacturer == manufacturer)
    return filteredArray;
}

Dealership.prototype.calculateStockValue = function(){
    totalStockValue = this.carsInStock.reduce((accumulator, car) => {
        return accumulator + car.price}, 0)
    return totalStockValue;
}



module.exports = Dealership;