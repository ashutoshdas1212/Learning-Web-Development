let name = ["John", "Jane", "Cena"];
console.log(name);
console.log(name[1]);
console.log(name.length);

let name2 = ["John", null, 1, true];
console.log(name2);

name2.push("Cena");
console.log(name2);

name2.unshift("Cena1");
console.log(name2);

name2.unshift("Apple");
name2.splice(1, 1); // 1st index 1st data is splice
console.log(name2);

name2.splice(1, 0, "Splice");
console.log(name2);

name2.splice(1, 1, "Splice");
console.log(name2);

let arr = [10, 20, 35, 19, 25, 60];
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach((val, index, arr) => {
  console.log(val + " " + index + " " + arr);
});

arr.forEach((val, index) => {
  console.log(index);
});

let a = arr.map((val, ind) => {
  return val;
});
console.log(a);
let b = arr.map((val, ind) => {
  return val + 10;
});
console.log(b);
console.log(arr);

let num3 = [10, 20, 30, 40, 50];
let num4 = [30, 60, 90, 120, 150];
console.log(num3.concat(num4));
console.log(num3.indexOf(20));
console.log(num3.reverse());
console.log(num3.sort());

let v = num3.slice(1, 4);
console.log(v);

let v1 = num4.splice(1, 4);
console.log(v1);
console.log(num4);

let arr1 = [10, 20, 30, 10, 40, 50, 60];
let b1 = arr1.filter((val, ind, arr) => {
  if (val >= 10 && val <= 25) {
    return val;
  }
});

console.log(b1);

let w1 = arr1.findIndex((val, index, array) => {
  return val == 10;
});

console.log(w1);

let w2 = arr1.findLastIndex((val, index, array) => {
  return val == 10;
});

console.log(w2);

let num5 = "10,20,30";
let y = num5.split(",");

y.forEach((element) => {
  console.log(element);
});
console.log(y);

let jo = y.join(" , ");
console.log(jo);

let y1 = [10, 20, 30, 40];

// for(let ar in y1)
// {
//     console.log(ar);
// }

for (let ar in y1) {
  console.log(y1[ar]);
}
console.log(" ");

for (let ar of y1) {
  console.log(ar);
}

let arr5 = [
  ["John", 30],
  ["Thomas", 28],
  ["Robert", 22],
];
console.log(arr5);
console.log(arr5[1]);
console.log(arr5[1][0]);

for (let i = 0; i < 3; i++) {
  console.log(arr);
}

for (i = 0; i < arr5.length; i++) {
  for (j = 0; j < arr5[i].length; j++) {
    console.log(arr5[i][j]);
  }
}
for (let ar of arr5) {
  for (i of ar) {
    console.log(i);
  }
}

let arrd1 = ["John", 202, true];

let arrd2 = arrd1;
arrd1.push("Berg");

console.log(arrd1);
console.log(arrd2);

let arrs1 = ["John", 202, true];

let arrs2 = arrs1;
arrs2.push("Berg");

console.log(arrs1);
console.log(arrs2);

let arrc1 = ["John", 202, true];

let arrc2 = arrc1.slice(0);
arrc2.push("Berg");

console.log(arrc1);
console.log(arrc2);

let arrb1 = ["John", 202, true];

let arrb2 = arrb1.slice(0).concat("item");
arrb2.push("Berg");

console.log(arrb1);
console.log(arrb2);

let arrf1 = ["John", 202, true];

let arrf2 = [...arrf1];
arrf2.push("Berg");

console.log(arrf1);
console.log(arrf2);

let array1 = ["Thomas", "Chad"];
let item1 = array1[0];
let item2 = array1[1];
console.log(item1);
console.log(item2);

let arraya1 = ["Thomas", "Chad"];
let [itema1, itema2] = arraya1;
console.log(itema1);
console.log(itema2);

let arrayb1 = ["Thomas", "Chad", "Neo", "Magnus"];
let [itemb1, itemb2, ...itemb3] = arrayb1;
console.log(itemb1);
console.log(itemb2);
console.log(itemb3);

let obj = {
  name: "Bravo", //name can be without ""
  age: 21,
  "last name": "John",
  fun: function () {
    console.log("I am function");
  },
  arr: [20, 30, 40],
};
console.log(obj.name);
console.log(obj.age);
console.log(obj["age"]);
console.log(obj["last name"]);
console.log(obj.fun());
console.log(obj.arr);
console.log(obj);
obj.key = "item";
console.log(obj);

let g = "key2";
obj[g] = "item2";
console.log(obj);

for (let i in obj) {
  console.log(i);
}
for (let i in obj) {
  console.log(obj[i]);
}
for (let k of Object.keys(obj)) {
  console.log(k);
}
for (let k of Object.keys(obj)) {
  console.log(obj[k]);
}

let arry = [
  { user: 1, name5: "tate" },
  { user: 2, name5: "shelby" },
  { user: 4, name5: "chad" },
];
console.log(arry);
console.log(arry[0]);

for (let i in arry) {
  // can use of
  console.log(i); // can use arry[i]
}

for (let i of arry) {
  // can use of
  console.log(i.name); // can use arry[i]
}

let [itemz1, itemz2] = arry;
console.log(item1);
console.log(item2);

let [{ name5 }, itemj1, { name5: namenew }] = arry; //name5 has been redeclared so we change the name5 to namenew
console.log(name5);
console.log(itemj1);
console.log(namenew);

function fun() {
  console.log("I am function 1");

  function fun2() {
    console.log("i am function 2");
  }

  fun2();
}
fun();

function fun() {
  var a = 1;
  console.log("This is Function: " + a);
  function fun2() {
    var a = 2;
    console.log("This is function:" + a);
  }
  fun2();
}
fun();
//if it doesnt get variable from local scope it gets it from global scope
// function always tries to find variable in its lexical scope it means within the fiunction and outside of it

function fun() {
  // debugger;
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}
fun();

const arrg = [10, 20, 30, 40, 30, 50];
console.log(arrg);

const s = new Set([10, 20, 30, 40, 50, 30]); // set has unique values
s.add(60);
s.add("Hello");
console.log(s);
//s.length i shows undefined in console

length = 0;
for (let element of s) {
  length++;
}
console.log(length);

var map1 = new Map([
  [1, "one"],
  ["fname", "Vickey"],
  ["whole number ", [0, 1, 2, 3, 4]],
]);

console.log(map1);
console.log(map1.get(1));
console.log(map1.get("fname"));
var k = map1.keys();
for (var key of k) {
  console.log(key);
}

var map2 = new Map();
map2.set("fname", "mouse");
console.log(map2);

var obj1 = {
  fName: "John",
  age: 8,
  fun: function () {
    console.log(this); //just trying to print fName will give error
    // so we have to use this
  },
};
obj1.fun();
var obj2 = {
  fName: "John",
  age: 8,
  fun: function () {
    console.log(this.age); //just trying to print fName will give error
    // so we have to use this
  },
};
obj2.fun();

function fun() {
  let fName = "John";
  return this.fName; // return this.fName will give error
}
console.log(fun());
console.log(new fun());

function fun1() {
  let fName = "John";
  this.fName = fName; // return this.fName will give error
}

var obj1 = new fun1();
console.log(obj1.fName);

//Constructor function technically are 2 conventiuons though:
//They are  named with capital letters first
//They should be executed only with "new" operator

function User(name) {
  //User is a constructor
  this.name = name;
}
let person = new User("Jack");
console.log(person.name);

function User1(name) {
  //User is a constructor
  if (!new.target) {
    // if new is not present
    return new User(name);
  }
  this.name = name;
}
let person1 = User1("Jack12");
console.log(person1.name);

let sym = Symbol("id");
console.log(sym.toString()); // to print this u have to convert to .toString
console.log(sym.description);
let sym1 = Symbol("id");
console.log(sym == sym1);
console.log(sym === sym1); //Because each symbo is unique

let id = Symbol("id");
let obj3 = {
  name: "John",
  [id]: 1,
};

obj3[id] = 4;
console.log(obj3);
console.log(obj3.name);
console.log(obj3.id);
console.log(obj3[id]);
obj[id] = 3;
console.log(obj3[id]);

for (let key in obj3) {
  console.log(key);
}

let id3 = Symbol("id");
let id4 = Symbol("id");
let obj5 = {
  name: "John",
  age: 20,
};

obj5[id] = 1;

console.log(obj);

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

function recursive(n) {
  if (n <= 10) {
    console.log(n);
    recursive(n + 1);
  }
}

recursive(1);

function fact(n) {
  if (n == 0) {
    return 1;
  }
  else{
    return n*fact(n-1);
  }
}
console.log(fact(5));



