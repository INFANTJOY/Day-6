class UberPriceCalculator {
    constructor(baseFare, costPerKilometer, minimumFare) {
        this.baseFare = baseFare;
        this.costPerKilometer = costPerKilometer;
        this.minimumFare = minimumFare;
    }

    calculatePrice(distanceInKilometers) {
        // Ensure distance is non-negative
        const distance = Math.max(0, distanceInKilometers);

        // Calculate the total fare
        const totalFare = this.baseFare + this.costPerKilometer * distance;

        // Ensure the total fare is not below the minimum fare
        return Math.max(totalFare, this.minimumFare);
    }
}

// Example usage:
const uberCalculator = new UberPriceCalculator(5, 2, 10); // Example base fare, cost per kilometer, and minimum fare

const distance1 = 8;
const price1 = uberCalculator.calculatePrice(distance1);
console.log(`Uber Price for ${distance1} km: $${price1}`);

const distance2 = 3;
const price2 = uberCalculator.calculatePrice(distance2);
console.log(`Uber Price for ${distance2} km: $${price2}`);
