let a=null

console.log(typeof a)

let b

console.log(typeof b)

result='3'+2;
console.log(result);
result=console.log(typeof result);


result='3'-2;
console.log(result);
result=console.log(typeof result);

result='3'-'hello';
console.log(result);
result=console.log(typeof result);


result='3'-true;
console.log(result);
result=console.log(typeof result);


result='3'-null;
console.log(result);
result=console.log(typeof result);

result='3'-1;
console.log(result);
result=console.log(typeof result);

console.log("break");
result=null;
result=String(result);
console.log(result)
console.log(typeof(result))

result=20;
result=(result);
console.log(result)
console.log(typeof(result))

result=20.202;
result=(result);
console.log(result)
console.log(typeof(result))


result=20.202;
result=parseInt(result);
console.log(result)
console.log(typeof(result))

result=-20.202;
result=parseInt(result);
console.log(result)
console.log(typeof(result))

result=-20.001;
result=parseFloat(result);
console.log(result)
console.log(typeof(result))

console.log(10+5);
console.log(10-5);
console.log(10*5);
console.log(10/5);
console.log(10%5);
console.log(10**5);

let v=1;
console.log(v++);

a=5
b=6
console.log(a==b);
console.log(a!=b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a>=b);

a="6"
b=6
console.log(a==b) // only for data comparison
console.log(a!=b)
console.log(a===b);
console.log(a!==b);

console.log(2>3 || 3>4)

let age1=18
if(age1>=18)
    {
        console.log("Yes")
    }

    age2=19
    name="John"
    if(age2>=18)
        {
            if(name=="John")
                {
                    console.log("Yes eligible");
                }
                else
                {
                    console.log("Name not in match");
                }
        }
        else{
            console.log("You arent aligible");
        }

let p=10;
let q=15;
if(p>q){
    console.log("A is greater than B")
}
else if(p<q)
{
    console.log("B is greater than A")
}
else{
    console.log("A is equal to B");
}

let ch=1

switch(ch)
{
    case 1:
        console.log("I am 1");
        break;
    case 2:
        console.log("I am 2");
        break;
    case 3:
        console.log("I am 3");
        break;
    default:
        console.log("You pressed wrong choice");
        break;
    }


    let ch1='d'
    switch(ch1)
    {
        case 'a':
            console.log("I am a");
            break;
        case 'b':
            console.log("I am b");
             break;
        case 'c':
            console.log("I am c");
            break;
        default:
            console.log("I am wrong choice");
            break;
    }

let age=18

for(var i=0;i<10;i++)
    {
   console.log("Hello");
    }

    for(i=0;i<=10;i++)
        {
            console.log(i);
        }
    for(var i=0;i<=10;i++)
        {
            console.log(i);
        }

        // for(var i=1;i<=20;i++)
        //     {
        //         console.log("2 x" + i+ "=" + 2*i);
        //     }

// for(var i=1;i<10;i++)
//     {
//         console.log(`2 x ${i}= ${2*i}`)
//     }

//     var i=1;
//     while(i<=10)
//         {
//             console.log(`2 x ${i}= ${2*i}`)
//             i++;
//         }

var i=1
   do {
    console.log(`2 x ${i}= ${2*i}`);
    i++;
   }
   while(i<=10)

    function namey(a){
        console.log("Hello" + a);
    }
    namey("Learners");
    
    function add(a,b,c)
    {
        console.log(a+b+c);
    }
    let l=10;
    let r=3;
    add(l,r,20);

    function add(a,b,c){
        return a+b+c;
    }
    let x=10;
    let y=3;
    console.log(add(x,y,80))

    let g=5

    function local(){
        let b=3;
        console.log(b)
    }

    local();
    console.log(a);
 let j=(a,b)=>{
    return a+b;
 }

 console.log(j(2,4));

 let namet=["John","Jane","Cena"]
 console.log(namet.length);

 let namek=["John",1,true,null]
 namek.unshift("Cena")
 console.log(namek)

 let namel=["John",1,true,null]
 namel.splice(1,0)
 console.log(namel)


 let namea=["John",1,true,null]
 namea.splice(1,0,"Cena")
 console.log(namea)

 let namei=[10,20,35,19,25,60]
 console.log(namei);

 for(let i=0;i<namei.length;i++)
    {
        console.log(namei[i]);
    }

