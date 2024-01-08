class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        return this.age;
    }

    getEmail() {
        return this.email;
    }

    toString() {
        return `Person - Name: ${this.getFullName()}, Age: ${this.age}, Email: ${this.email}`;
    }
}

// Example usage:
const person1 = new Person("John", "Doe", 25, "john.doe@example.com");
console.log(person1.toString()); // Output: Person - Name: John Doe, Age: 25, Email: john.doe@example.com

const person2 = new Person("Jane", "Smith", 30, "jane.smith@example.com");
console.log(person2.getAge()); // Output: 30
