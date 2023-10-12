function validateAndSubmit() {
    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const message = document.getElementById("message").value;

    if (mobile.length !== 9) {
        alert("Mobile number must be 9 digits long.");
        return;
    }

    const receiptDate = new Date();
    generateReceipt(receiptDate);

    const person = new Person(name, mobile, message);

    console.log(person);
    const student = new Student(name, mobile, message, "12345");
    student.displayStudentDetails();
}

function generateReceipt(receiptDate) {
    const receiptDiv = document.getElementById("receipt");
    const receiptDateElement = document.getElementById("receiptDate");

    receiptDateElement.textContent = `Date of Receipt: ${receiptDate.toLocaleString()}`;
    receiptDiv.style.display = "block";
}

class Person {
    constructor(name, mobile, message) {
        this.name = name;
        this.mobile = mobile;
        this.message = message;
    }
}
Person.prototype.printDetails = () => {
    console.log(`Name: ${this.name}, Mobile: ${this.mobile}, Message: ${this.message}`);
};

class Student extends Person {
    constructor(name, mobile, message, rollNo) {
        super(name, mobile, message);
        this.rollNo = rollNo;
    }

    displayStudentDetails() {
        console.log(`Name: ${this.name}, Mobile: ${this.mobile}, Message: ${this.message}, Roll No: ${this.rollNo}`);
    }
}
