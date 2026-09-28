/**
 * Fill The Tank

Given the size of a fuel tank, the current fuel level, and the price per gallon, return the cost to fill the tank all the way.

    tankSize is the total capacity of the tank in gallons.
    fuelLevel is the current amount of fuel in the tank in gallons.
    pricePerGallon is the cost of one gallon of fuel.
    The returned value should be rounded to two decimal places in the format: "$d.dd".
 * 
 */
function costToFill(tankSize, fuelLevel, pricePerGallon) {
    if(typeof tankSize != "number" || typeof fuelLevel != "number" || typeof pricePerGallon != "number"){
        throw new TypeError("All inputs must be a number")
    }
    if (tankSize < 0 || fuelLevel < 0 || pricePerGallon < 0){
        throw new RangeError("Inputs cannot be negative value!")
    }
    if (fuelLevel > tankSize){
        throw new RangeError("Fuel level cannot exceed tank size");        
    }

    const fuelToFill = tankSize - fuelLevel;
    const priceToPay = (fuelToFill * pricePerGallon).toFixed(2)
    return "$" + priceToPay;
}
export default costToFill;