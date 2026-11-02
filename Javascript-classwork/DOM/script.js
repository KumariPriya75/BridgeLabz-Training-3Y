// let h1EL=document.getElementById("heading");         -->only select id
// let h1EL=document.getElementsByClassName("hading");  -->only select class
let h1EL=document.querySelector("#heading");         //-->can select both id and class

// h1EL.style.color="red";
// console.log(h1EL);
// h1EL.style.backgroundColor="purple";
h1EL.textContent="Hey Barbie"      //-->to change content
h1EL.innerHTML+="<h2>Hy Ken</h2>"  //pehle content me jodne k liye
let btnEL=document.querySelector("#btn")
let fun=()=>{
    h1EL.style.color="red";
}
let fun2=()=>{
    h1EL.style.color="purple";
}
let fun3=()=>{
    ok.style.backgroundColor="pink";
}
btnEL.addEventListener("click",fun);
btnEL.addEventListener("dblclick",fun2);
console.log(h1EL);
let ok=document.querySelector(".ok")
// ok.addEventListener("mouseenter",fun3);
ok.addEventListener("mouseenter",()=>{
        let arr=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
        let ans="#";
        for(let i=0;i<6;i++){
            let randomValue=Math.floor(Math.random()*arr.length);
            ans+=arr[randomValue];
        }
        ok.style.backgroundColor=ans;
})