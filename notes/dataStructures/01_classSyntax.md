# New! Class

- What is a class? and how JS implements the **idea** of classes
- abstraction, polymorphism and encapsulation

## What is a class?

- a blueprint for creating objects with pre-defined properties and methods
- primarily syntactical sugar over JS existing prototype-base inheritance

## Why

- we are going to use them to define Data structures

## Syntax

- the method to create new objects must be called **constructor**
- the class keyword creates a constant, so you can not redefine it

```js
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// make a new Student, must be instantiated

const student1 = new Student("Matt", "Davis");
```

- the this keyword refers to the new instance of a given constructor

## Methods

- instance methods
  - provide functionality that references an individual instance of a class

```js
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isLate = 0;
  }
  // instance
  fullName() {
    retrun`Your full name is ${this.firstName}, ${this.lastName}`;
  }
  //instance
  markLate() {
    this.isLate += 1;
    return `${this.fistName} has been late ${this.isLate} times`;
  }
}

// make a new Student, must be instantiated

const student1 = new Student("Matt", "Davis");

student1.fullName; // "Your full name is Matt Davis"
student1.isLate; // 0
student1.markLate();
student1.isLate; // 1
```

## Class Methods

- use the `static` keyword in front of a method
- static methods **cannot** be called through a class instance
- often used for creating a utility function
- not related to single individual instance

```js
class Student {
  constructor(firstName, lastName) {
    // ... this...
  }
  // ... previous instance methods

  static EnrollStudents() {
    return `ENROLLING STUDENTS`;
  }
}
// make a new Student, must be instantiated

const student1 = new Student("Matt", "Davis");

student1.fullName; // "Your full name is Matt Davis"
student1.isLate; // 0
student1.markLate();
student1.isLate; // 1

Student.EnrollStudents(); // "ENROLLING STUDENTS"
```
