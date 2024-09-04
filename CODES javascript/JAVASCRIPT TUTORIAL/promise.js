// function fun(task) {
//   return new Promise((resolve, reject) => {
//     if (task) {
//       resolve("Completed");
//     } else {
//       reject("Not completed");
//     }
//   });
// }

// let onResolve = (res) => {
//   console.log(res);
// };
// let onReject = (err) => {
//   console.log(err);
// };

// fun(true).then(onResolve).catch(onReject); //.then used to perform on relve
// and catch is used to catch error
//fun(false).then(onResolve).catch(onReject);

function loadingData() {
  return new Promise((resolve, reject) => {
    console.log("Processing...");
    setTimeout(() => {
      console.log("1) loading data")
      resolve();
    }, 2000);
  });
}
function collectingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2) collecting data")
      resolve();
    }, 2000);
  });
}

function approvingData() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log("3) approving data");
      reject('Error:Not fulfilled');
    
    }, 2000);
  })
 
}
function approved() {
   
    console.log("4) approved");
 
}

// loadingData().then(collectingData).then(approvingData).then(approved).catch((err)=>{
//   console.log(err);
// });

async function Ex(){
  await loadingData();
  await collectingData();
  await approvingData();
  await approved();
}// the whole function is itself a promise
Ex().catch((err)=>{
  console.log(err);
});//we can catch error if we want



// async function Ex(){
//   await loadingData();

//   await approvingData();
//   await approved();
// }
// Ex().then(collectingData).catch((err)=>{

//   console.log(err);
// });

