// console.log("this");
// setTimeout(() => {
//    console.log("SYNCHRONOUS");
// }, 5000);

// console.log("IS");

// setTimeout(fun,1000)
// console.log("this");

// function fun(){
//     console.log("asynchronous");
// }

// console.log("is1");

// setTimeout(fun,0)
// console.log("this");

// function fun(){
//     console.log("asynchronous");
// }

// console.log("is");//Asynchronous will be printed at last because it remains in stack

function fun(val) {
  console.log(val);
}
function add(a, b, callback) {
  let sum = a + b;
  callback(sum);
}
add(5, 10, fun);

// function loadingData(callback) {
//   setTimeout(() => {
//     console.log("1) Loading Data...");
//     callback();
//   }, 4000);
// }

// function collectingData() {
//   console.log("Collecting Data...");
// }

// function approvingData() {
//   console.log("3) Approving Data");
// }

// function approved() {
//   console.log("4) Approved");
// }
// loadingData(function () {
//   collectingData();
//   approvingData();
//   approved();
// });

//If loading data gets printed after 4 seconds it will be at last so we need a method so that it gets printed first then others in order

console.log("  ++++++++++++++++++++++++++++++");

function loadingData(callback) {
  setTimeout(() => {
    console.log("1) loading data");
    callback();
  }, 4000);
}
function collectingData(callback) {
  setTimeout(() => {
    console.log("2) collecting data");
    callback();
  }, 3000);
}

function approvingData(callback) {
  setTimeout(() => {
    console.log("3) approving data");
    callback();
  }, 2000);
}
function approved() {
  setTimeout(() => {
    console.log("4) approved");
    
  }, 1000);
}

loadingData(function () {
  collectingData(function () {
    approvingData(function () {
      approved();
    });
  });
});
//Callback