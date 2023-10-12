class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, rollNo) {
        super(firstName, lastName, age); 
        this.rollNo = rollNo;
    }

    getFullName() {
        return `Student: ${super.getFullName()}`;
    }

    displayDetails() {
        if (this.rollNo === 0) {
            throw new Error("Invalid roll number. Roll number cannot be zero.");
        }
        console.log(`Name: ${this.getFullName()}, Age: ${this.age}, Roll No: ${this.rollNo}`);
    }
}

try {
    const student = new Student("Darash", "Mishra", 20, 12345);

    console.log(student.getFullName());
    student.displayDetails();
    const studentWithZeroRoll = new Student("Anket", "Kadam", 18, 0);
    studentWithZeroRoll.displayDetails();
} catch (error) {
    console.error(error.message);
}
