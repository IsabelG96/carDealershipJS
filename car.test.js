// const { describe } = require('yargs');
const Car = require("./car");

const toyota = new Car("Toyota", 10500, "hybrid")

describe('Car', () => {

    test('can get the manufacturer name', () => {
            const expected = "Toyota";
            const actual = toyota.manufacturer;
            expect(actual).toBe(expected);

    })

    test('can console log the price', () => {
        const expected = 10500;
        const actual = toyota.price;
        expect(actual).toBe(expected);
    })

    test('can console log the manufacturer name', () => {
        const expected = "hybrid";
        const actual = toyota.engineType;
        expect(actual).toBe(expected);
})

});