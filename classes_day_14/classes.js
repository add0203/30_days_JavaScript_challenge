// Day 14: Classes
// Tasks/Activities:
// Activity 1: Class Definition
// • Task 1:
// Define a class Person with properties name and age , and a method to return a greeting message. Create an instance of the class and log the greeting message.
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const p1 = new person("anand", 20);

console.log(`${p1.name} has a age of ${p1.age}`);
// • Task 2: Add a method to the Person class that updates the age property and logs the updated age.
class person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  updatePerson(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`${this.name} has a age of ${this.age}`);
  }
}

let p2 = new person2("abhi", 23);
p2.greet();
p2.updatePerson("abhi kumar", 24);
p2.greet();

// Activity 2: Class Inheritance
// • Task 3: Define a class Student that extends the Person class. Add a property studentld and a method to return the student ID.
// Create an instance of the Student class and log the student ID.

class student extends person2 {
  constructor(name, age, stuId, course) {
    super(name, age);
    this.stuId = stuId;
    this.course = course;
  }

  stuDettail() {
    console.log(
      `${this.name} has Studend ID ${this.stuId} and has a age of ${this.age} ans enrolled in Cousre : ${this.course}`
    );
  }

  getStuID() {
    console.log(`student ID : ${this.stuId}`);
  }
}

let stu1 = new student("amit", 23, "2020A1", "BCA");
stu1.stuDettail();
stu1.getStuID();

// . Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

class Person3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Employee extends Person3 {
  constructor(name, age, position, salary) {
    super(name, age); // Call the parent class constructor
    this.position = position;
    this.salary = salary;
  }

  // Override the greet method
  greet() {
    console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.position}.`
    );
  }

  // Override the getDescription method
  getDescription() {
    // Call the parent class's getDescription method
    const parentDescription = super.getDescription();
    return `${parentDescription} They work as a ${this.position} and earn $${this.salary}.`;
  }

  work() {
    console.log(`${this.name} is working as a ${this.position}.`);
  }
}

const person1 = new Person3("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
console.log(person1.getDescription()); // Output: Alice is 30 years old.

const emp1 = new Employee("John", 35, "Developer", 60000);
emp1.greet(); // Output: Hello, my name is John, I am 35 years old and I work as a Developer.
emp1.work(); // Output: John is working as a Developer.
console.log(emp1.getDescription()); // Output: John is 35 years old. They work as a Developer and earn $60000.

// Activity 3: Static Methods and Properties
// . Task 5: Add a static method to the Person class that returns a generic greeting message.
//           Call this static method without creating an instance of the class and log the message.

class person4 {
  construtor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`${this.name} has age ${this.age}`);
  }

  static genricGreeting() {
    console.log("hello person");
  }
}

//without creating the instance of the class
person4.genricGreeting();

// . Task 6: Add a static property to the Student class to keep track of the number of students created.
//           Increment this property in the constructor and log the total number of students.

class student1 extends person4 {
  static studentCount = 0;
  constructor(name, age, stuId) {
    super(name, age);
    this.stuId = stuId;
    student1.studentCount++;
  }
  static count() {
    console.log(`number of student : ${this.studentCount}`);
  }
}

let s1 = new student1("anand", 23, "s1a");
let s2 = new student1("anand", 23, "s2a");
student1.count();
// Activity 4:
// Getters and Setters
// • Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property).
//           Create an instance and log the full name using the getter.
class Person5 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getter() {
    console.log(`firstName: ${this.firstName} & lastName : ${this.lastName}`);
  }
}

let per1 = new Person5("anand", "dwivedi");
per1.getter();
// . Task 8: Add a setter method to the Person class to update the name properties ( firstName and lastName ).
//           Update the name using the setter and log the updated full name.
class Person6 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  getter() {
    console.log(`firstName: ${this.firstName} & lastName : ${this.lastName}`);
  }
}

let per6 = new Person6("anjali", "jaiswal");
per6.getter();
per6.setLastName("dwivedi");
per6.getter();

// Activity 5:
// Private Fields (Optional)
class Person7 {
  // Private fields
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
  }
}

let Per7 = new Person7("anand", 23);
console.log(Per7.getAge());
console.log(Per7.getName());

// • Task 9:
// Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
  //private fields
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  deposit(val) {
    this.#balance = this.#balance + val;
  }

  withdraw(val) {
    this.#balance = this.#balance - val;
  }

  checkBalance() {
    return this.#balance;
  }
}

let acc1 = new Account(20000);
console.log(`current balance : ${acc1.checkBalance()}`);
acc1.deposit(300);
acc1.withdraw(400);
console.log(`current balance : ${acc1.checkBalance()}`);
// • Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
acc1.deposit(40000);
acc1.withdraw(10000);
console.log(`current balance : ${acc1.checkBalance()}`);
