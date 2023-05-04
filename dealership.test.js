const Dealership = require("./dealership");
const Car = require("./car");


const toyota = new Car("Toyota", 10500, "hybrid");
const tesla = new Car("Tesla", 27500, "electric");
const izzyDealership = new Dealership("izzyDealership", 100);

describe('Dealership', () => {

    test('can add a car to stock', () => {
        izzyDealership.addCarToStock(toyota)
        izzyDealership.addCarToStock(tesla)
        const expected = 2;
        const actual = izzyDealership.stockCount();
        expect(actual).toBe(expected);
    })
    
    
    // test('can count number of cars in stock', () => {
    //         izzyDealership.carsInStock.length = 5
    //         const expected = 5;
    //         const actual = izzyDealership.countCars();
    //         expect(actual).toBe(expected);
    // })

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

});

// Dealership.prototype.countCars = function(car){
//     console.log(`I added ${car} to stock`)
//     this.carsInStock.add(car);
// }