let dayNight=document.querySelector(".dayNight");
let banner=document.querySelector(".banner");

dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night");
    /* ek baari click kiya toh night class add hojaayegi ,dusre baar click kiya tha night class hat jaayega*/

})

let typingEffect=new Typed("#text",{
    strings:["DropXOut","Youtuber","Coder"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000
})