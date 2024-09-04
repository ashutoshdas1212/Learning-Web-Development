let hero=document.querySelector('#hero');
console.log(hero.getAttribute('id'));

hero.setAttribute("example",123)
console.log(hero.outerHTML);

    for(let att of hero.attributes){
       // console.log(att);
       // console.log(att.name);
       // console.log(att.value);
    console.log(`${ att.name} = ${att.value }`);
    }