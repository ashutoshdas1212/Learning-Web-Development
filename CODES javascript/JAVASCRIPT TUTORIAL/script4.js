// let num=0
// setInterval(fun,2000)

// function fun(){
//     num=num+1;

// }

// var inter=setInterval(fun,1000)

// function fun(){
//     let date=new Date().toLocaleTimeString();
//     console.log(date);
// }

// setTimeout(()=>{
// clearInterval(inter);
// },10000)
// 10 sec ke baad ruk jaayega,clearInetrval ko call krr dega

// var obj1={
// fName:"John",
// fun: function(){
//     console.log(this.fName);
// }

// }

// var obj2={
//     fName:"Kenny"
// }

// obj1.fun.call(obj2)

//----------------------------------

// function fun() {
//   console.log(this.fName);
// }

// var obj1 = {
//   fName: "John",
// };

// var obj2 = {
//   fName: "Kenny",
// };

// fun.call(obj2);
// fun.call(obj1);
//----------------------------------------

function fun(age, gender) {
  console.log(this.fName, age, gender);
}

var obj1 = {
  fName: "John",
};

var obj2 = {
  fName: "Kenny",
};

fun.call(obj1, 12, "male");
fun.apply(obj1, [12, "male"]); //in apply all parameter passed should
// be in square brackets ,it is similar to call function

var a = fun.bind(obj2, 12, "male");
console.log(typeof a);

let emp = {};
emp.name = "John";
console.log(Object.getOwnPropertyDescriptor(emp, "name"));

Object.defineProperty(emp, "age", {
  value: 21,
  writable: true,
  configurable: true,
  enumerable: true,
});

//emp.age=20
// to set age you have to make writable is true if false
// it will be in read only mode

//delete emp.age;
//delete will not work if configurable is false

for (k in emp) {
  console.log(k);
}
//if enumerable is false(loop mein dikhna band) the above loop will not work
console.log(Object.getOwnPropertyDescriptor(emp, "age"));

let obja = {
  fName: "John",
};

let obja2 = {
  lName: "Smith",
};

obja2.__proto__ = obja;
console.log(obja2.fName);

var objb = {
  fName: "John",
};
objb2 = Object.create(objb);

console.log(objb2);
objb2.lName = "Smith";
console.log(objb2);

function Person(name, age) {
  let person = Object.create(obj);
  person.name = name;
  person.age = age;
  return person;
}
var obj = {
  greet() {
    console.log(`Hello ${this.name}`);
  },
};
let user = Person("John", 8);
console.log(user);
user.greet();

console.log(Person.prototype);

//------------------------------------------------------------------

function Person1(name, age) {
  this.name = name;
  this.age = age;
}
Person1.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

let user2 = new Person1("John", 8);
user2.greet();
console.log(user2);

class Person3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
}
let user3 = new Person3("John", 8);

user3.greet();
console.log(user3);

class User {
  constructor(name, age) {
    this.name = name;
  }
  sayhi() {
    console.log("Hello " + this.name);
  }
}
let user4 = new User("John");
user4.sayhi();

let user5 = new User("Smith");
user5.sayhi();

console.log(typeof User); // output will be a function ,it is a fake class ,function acting like class

console.log(User.prototype.sayhi);

// class Animal{
//      constructor(name){
//         this.name=name;
//      }
//      speak(){
//         console.log(`${this.name} makes a noise`);

//      }
//      sing(){
//         console.log(`${this.name} sings Tunak`);
//      }
// }
// class Dog extends Animal{
//      constructor(name){
//         super(name);
//      }
//      speak(){
//         console.log(`${this.name} makes a noise`);

//      }
// }
// class Cat extends Animal{
//      constructor(name){
//         super(name);
//      }
//      speak(){
//         console.log(`${this.name} makes a noise`);

//      }
// }

// let d = new Dog('Rufus')
// let c = new Cat('Billi')
// d.speak();
// c.sing();

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise`);
  }
  static sing(name) {
    console.log(`${name} sings Tunak`);
  }
}
let d = new Animal("Huskey"); //sing function which is static cannot be used by oject it can be only accessed by the class
//d.sing()
Animal.sing(d.name);

class Game {
  static score = 0;
  constructor() {
    this.isPlaying = false;
  }
  start() {
    this.isPlaying = true;
    console.log("The game has started");
  }
  end() {
    this.isPlaying = false;
    console.log("The game has ended");
    Game.updateScore();
  }

  static updateScore() {
    Game.score++;
    console.log(`Score: ${Game.score}`);
  }
}
const game = new Game();
game.start();
game.end();
game.end();
game.end();
game.end();
//In game the user itself cannot update the score so it is better to declare it as static
//variable so we cannot use the function outside the class
//---------------------------------------------------------------------------------------------------------------
class BankAccount {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited ${amount},new balance is ${this.#balance}`);
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("insufficient funds");
    } else {
      this.#balance -= amount;
      console.log(`withdraw ${amount},new balance is ${this.#balance}`);
    }
  }
  // fun(){
  //     console.log(this.#balance);
  // }
  balance() {
    console.log(this.#balance);
  }
}

const account = new BankAccount();
account.deposit(100);
account.deposit(10000);
account.withdraw(100);
account.balance();

//console.log(account.balance);// we can put hash in methods and variables in class
//to make them private, the code will give error

// console.log(account.fun());

function d1(a, b) {
  try {
    if (b == 0) {
      throw new Error("Cant divide by 0");
    } else {
      return a / b;
    }
  } catch (err) {
    console.log(err.message);
  }
}

console.log(d1(10, 0));
