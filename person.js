
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };

    this.printDetails = () => {
        console.log(`Name: ${this.getFullName()}, Age: ${this.age}`);
    };
}

const person1 = new Person("Darash", "Mishra", 20);

console.log(person1.getFullName());
person1.printDetails();
