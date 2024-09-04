//getElementByTagName()
// var a=document.getElementsByTagName('li');
// console.log(a);

//getElementsByClassName
// var a=document.getElementsByClassName('hero');
// console.log(a);

//getElementById()
// var a=document.getElementById('hero');
// console.log(a);

//
// var a=document.querySelector('.qs')//2 classes 
// console.log(a);

//
// var a=document.querySelectorAll('.qs')// as there are 2 classes with class qs both will appear
// console.log(a);

//
// console.log(document.querySelector('.qs').previousElementSibling);
// console.log(document.querySelector('.qs').previousElementSibling.previousElementSibling);

//
var a=document.querySelector('#hero');

if(a.previousElementSibling==null){
    console.log('Sibling is not present');
}
else{
    console.log(a.previousElementSibling);
}



//appendChild
// const ul=document.querySelector('ul')
// const newE= document.createElement('li')
// newE.textContent="Giga Chad"
// ul.appendChild(newE)

//remove
// const ul1=document.querySelector('ul')
// ul1.remove();//all ul removed

//replaceChild
// const list=document.querySelector('ul')
// const childToChange=list.children[1];//list mein se children jika index 1 ho
// const newLi=document.createElement('li')
// newLi.textContent='Giga Chad'
// list.replaceChild(newLi,childToChange)


//parentNode
// var parent=document.querySelector('div')// if I use document.querySelector('html') it will show null coz it has no parent
// var p=parent.parentElement;
// console.log(p);

// var parent=document.querySelector('div')
// var q=parent.parentNode;
// console.log(q);

//previousSibling
// var a=document.querySelector('.hero')
// console.log(a.previousElementSibling);


// var b=document.querySelector('.hero')
// console.log(b.previousSibling);
//OUTPUT IS #TEXT coz between each li there is space for writing text
//if u make spacing between 2 li equal to zero then text gets removed
// var b=document.querySelector('#hero')
// console.log(b.nextElementSibling);

var fChild=document.querySelector('ul')
console.log(fChild.firstChild);

var fChild=document.querySelector('ul')
console.log(fChild.firstElementChild);


var lChild=document.querySelector('ul')
console.log(lChild.lastChild);

var fChild=document.querySelector('ul')
console.log(fChild.lastElementChild);