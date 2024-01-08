class Circle {
    constructor(radius, color) {
        this.radius = 1.0;
        this.color = "red";

        if (radius !== undefined) {
            this.radius = radius;
        }

        if (color !== undefined) {
            this.color = color;
        }
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return `Circle - Radius: ${this.radius}, Color: ${this.color}`;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

// Example usage:
const circle1 = new Circle();
console.log(circle1.toString()); // Output: Circle - Radius: 1, Color: red

const circle2 = new Circle(3.5, "blue");
console.log(circle2.getArea()); // Output: Area of the circle: 38.48451000647496
