// var a=document.querySelector('h1').innerText;
// console.log(a);

// console.log("--------------------------");
// var a=document.querySelector('h1').textContent;//textContent se hidden part bhi dikhaayi deta hai
// console.log(a);

var target=document.querySelector('.hero');

var newE='<b>Drop X Out<b/>';

target.insertAdjacentElement("beforeend",newE)
