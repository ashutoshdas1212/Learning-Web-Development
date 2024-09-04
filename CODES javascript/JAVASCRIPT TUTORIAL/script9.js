// let a=document.querySelector('#hero');
// console.log(a);
// a.innerHTML='<b>Giga Chad</b>';
//we can also do a.innerHTML+='<b>Giga Chad</b>';

let a=document.querySelector('#hero');

a.outerHTML='<li><b>Giga Chad</b></li>';
console.log(a.outerHTML);
//innerhtml mein lsit list tha per outerhtml mein ,it replaces the whole list item with word in bold, but the a ppoints to the previous 
//list item so printing it will show andrew tate and not giga chad












