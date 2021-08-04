/*Create a Rectangle class. Rectangle should have: length and width.
It should have getters and setters for all fields.
It should have getArea() method.
It should have getPerimeter() method.
It should have toString() method.

Solution*/

class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }
  
  get width() {
    return this._width;
  }
  
  set width(value) {
    this._width = value;
  }
  
  get length() {
    return this._length;
  }
  
  set length(value) {
    return this._length = value;
  }
  
  getArea(){
    return this.width * this.length;
  }
  
  getPerimeter(){
    return 2 * (this.width + this.length);
  }
  
  toString(){
    return JSON.stringify(this);
  }
  
};

let example1 = new Rectangle(100, 200);

/*Create an Employee class. Employee should have: id, firstName, lastName, position, salary, workingHours.
It should have setters and getters for appropriate fields.
It should have a method: getFullName().
It should have a method: getAnnularSalary() which should be the total salary of the employee within a year.
It should have a method: raiseSalary(percent), which increases the salary by the given percent and returns new salary.

Solution*/

class Employee {
  constructor(id, firstName, lastName, position, salary, workingHours){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.salary = salary;
    this.workingHours = workingHours;
  }
  
  get id(){
    return this._id;
  }
  
  set id(value){
    return this._id = value;
  }
  
  get firstName(){
    return this._firstName;
  }
  
  set firstName(value){
    return this._firstName = value;
  }
  
  get lastName(){
    return this._lastName;
  }
  
  set lastName(value){
    return this._lastName = value;
  }
  
  get position(){
    return this._position;
  }
  
  set position(value){
    return this._position = value
  }
  
  get salary(){
    return this._salary;
  }
  
  set salary(value){
    return this._salary = value;
  }
  
  get workingHours(){
    return this._workingHours;
  }
  
  set workingHours(value){
    return this._workingHours = value;
  }
  
  getFullName(){
    return this.firstName + ' ' + this.lastName;
  }
  
  getAnnularSalary(){
    return this.salary * 12;
  }
  
  raiseSalary(percent){
    return (this.salary * percent / 100) + this.salary
  }
}; 

let example1 = new Employee(15158, 'Hamlet', 'Muradyan', 'VIUR', 450000, 12);
example1.getFullName();
example1.getAnnularSalary();
example1.raiseSalary(10);


/*Create an Author class and a Book class.
Author should have: name, email, gender. 
It should have appropriate getters and setters.
It should have a toString method.

Book should have: title, author(Author), price, quantity.
It should have appropriate getters and setters.
It should have a method: getProfit(), which calculates the profit from the book based on the price and quantity.
It should have a toString method.

Solution*/

class Author {
  constructor(name, email, gender){
    this.name = name;
    this.email = email;
    this._gender = gender;
  }
  
  set name(value){
    this._name = value;
  }
  
  get name(){
    return this._name
  };
  
  set email(value){
    this._email = value;
  }
  
  get email(){
    return this._email;
  }
  
  get gender(){
    return this._gender
  }
  
  toString(){
    return JSON.stringify(this);
  }
  
};

class Book {
  constructor(title, author, price, quantity){
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }
  
  get title(){
    return this._title;
  }
  
  set title(value){
    this._title = value;
  }
  
  get author(){
    return this._author;
  }
  
  set author(value){
    if(value instanceof Author){
      this._author = value
    }
    else{
      console.log('error')
    }
  }
  
  get price(){
    return this._price;
  }
  
  set price(value){
    this._price = value;
  }
  
  get quantity(){
    return this._quantity;
  }
  
  set quantity(value){
    this._quantity = value;
  }
  
  getProfit(){
    return this.price * this.quantity
  }
  
  toString(){
    return JSON.stringify(this);
  }
  
};

let author = new Author('Hamo', 'hamomuradyan93@gmail.com', 'male');
let bulgakov = new Book('Varpety ev margaritan', author, 5900, 4);

/*Create an Account class. Account should have: id, name, balance.
It should have setters for name and balance, and getters for all fields.
It should have a method: credit(amount), which should add amount to balance and return the updated balance.
It should have a method: debit(amount), which should subtract the amount from the balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
It should have a method: transferTo(anotherAccount, amount): which should subtract the amount from the account balance and add it to the given anotherAccount and return the updated balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
It should have a static method: identifyAccounts(accountFirst, accountSecond) which gets two accounts and identifies if they are the same or not, comparing all fields.
It should have toString method.

Solution*/

/*Create an Account class. Account should have: id, name, balance.
It should have setters for name and balance, and getters for all fields.
It should have a method: credit(amount), which should add amount to balance and return the updated balance.
It should have a method: debit(amount), which should subtract the amount from the balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
It should have a method: transferTo(anotherAccount, amount): which should subtract the amount from the account balance and add it to the given anotherAccount and return the updated balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
It should have a static method: identifyAccounts(accountFirst, accountSecond) which gets two accounts and identifies if they are the same or not, comparing all fields.
It should have toString method.

Solution*/

class Account {
  constructor(id, name, balance){
    this._id = id;
    this.name = name;
    this.balance = balance;
  }
  
  get id(){
    return this._id;
  }
  
  get name(){
    return this._name;
  }
  
  set name(value){
    this._name = value;
  }
  
  get balance(){
    return this._balance
  }
  
  set balance(value){
    this._balance = value;
  }
  
  credit(amount){
    this.balance = amount;
    return this.balance;
  }
  
  debit(amount){
    if(amount > this.balance){
      alert('Amount exceeded balance.')
    }
    else{
      this.balance -= amount;
    }
  }
  
  transferTo(anotherAccount, amount){
    if(amount > this.balance){
      alert('Amount exceeded balance.')
    }
    else{
      this.balance -= amount;
      anotherAccount.balance += amount;
      return this.balance;
    }
  }
  
  static identifyAccounts(accountFirst, accountSecond){
    if(accountFirst.id === accountSecond.id){
      return true;
    }
    return false;
  }
  
  toString(){
    return JSON.stringify(this);
  }
  
};
let accountFirst = new Account(5802, 'Hamo Muradyan', 0);
let anotherAccount = new Account(5802, 'Tigran Muradyan', 0);


accountFirst.credit(150);
accountFirst.debit(10);
accountFirst.debit(170);

accountFirst.transferTo(anotherAccount, 40);
accountFirst.transferTo(anotherAccount, 140);

Account.identifyAccounts(accountFirst, anotherAccount)
Account.identifyAccounts(accountFirst, {id: 4856})

/*Write classes: Person, Student
Person should have: firstName, lastName, gender, age.
It should have appropriate getters and setters.
It should have a method: toString().

Student is inherited from Person. It should have programs(array of strings), year, fee.
It should have appropriate getters and setters. 
It should have method: passExam(program, grade). Student should contain the data about its programs and exams. passExam will update that data, so if student passed all the exams(grade is great or equal to 50), its year should be increased by one.
It should have a toString method.

Solution*/

class Person {
  constructor (firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._gender = gender;
    this.age = age;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    this._firstName = value;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    this._lastName = value;
  }
  get gender() {
    return this._gender;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }
  toString() {
    return JSON.stringify(this);
  }
}

class Student extends Person {
  constructor (programs, year, fee, ...args) {
    super(...args);
    this.ararkaner = programs;
    this.year = year;
    this.fee = fee;
  }

  get ararkaner(){
    return this._ararkaner;
  }
  
  set ararkaner(value){
    if(Array.isArray(value)){
      this._ararkaner = value;
      this.dataStore = {};
      this.ararkaner.forEach(item => this.dataStore[item] = 0);
    }
    else{
      alert('Առարկաները պետք է լինեն array')
    }
  }
  
  get year() {
    return this._year;
  }
  set year(value) {
    this._year = value;
  }
  get fee() {
    return this._fee;
  }
  set fee(value) {
    this._fee = value;
  }
  
  passExam(nameOfArarka, grade){
    if(this.ararkaner.includes(nameOfArarka)){
      this.dataStore[nameOfArarka] = grade;
      if(Object.values(this.dataStore).every(item => item >= 50)){
        ++this.year;
        this.ararkaner = this.ararkaner;
      }
    }
  }
  
  toString() {
    return JSON.stringify(this);
  }
}

let student1 = new Student(['Math', 'English', 'Armenian'], 0, 200000, 'Hamo', 'Muradyan', 'Male', 27);
