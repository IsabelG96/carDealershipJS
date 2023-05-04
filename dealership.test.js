const Dealership = require("./dealership");
const Car = require("./car");


const toyota = new Car("Toyota", 10500, "hybrid");
const tesla = new Car("Tesla", 27500, "electric");
const izzyDealership = new Dealership("izzyDealership", 100);

describe('Dealership', () => {

    test('can count cars in stock', () => {
        izzyDealership.addCarToStock(toyota)
        izzyDealership.addCarToStock(tesla)
        const expected = 2;
        const actual = izzyDealership.stockCount();
        expect(actual).toBe(expected);
    })

    test('can add a car to stock', () => {
        const expected = [toyota, tesla];
        const actual = izzyDealership.carsInStock;
        expect(actual).toEqual(expected);
    })

    test('can return an array with each car manufacturer', () => {
        const expected = ["Toyota","Tesla"];
        const actual = izzyDealership.getAllCarManufacturers();
        expect(actual).toEqual(expected);
    })

    test('find all cars from a given manufacturer', () => {
        const expected = [toyota];
        const actual = izzyDealership.getCarsByManufacturer("Toyota");
        expect(actual).toEqual(expected);
    })

    test('calculate value of total stock', () => {
        const expected = 38000;
        const actual = izzyDealership.calculateStockValue();
        expect(actual).toEqual(expected);
    })
    
});
    
   
//     test('can count cars', () => {
//         const expected = 10500;
//         const actual = toyota.price;
//         expect(actual).toBe(expected);
//     })

//     test('can console log the manufacturer name', () => {
//         const expected = "hybrid";
//         const actual = toyota.engineType;
//         expect(actual).toBe(expected);
// })



// Dealership.prototype.countCars = function(car){
//     console.log(`I added ${car} to stock`)
//     this.carsInStock.add(car);
// }