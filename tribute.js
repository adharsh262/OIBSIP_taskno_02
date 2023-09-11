let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");

let para1=document.getElementById("tab-1");
let para2=document.getElementById("tab-2");
let para3=document.getElementById("tab-3");

let tabconEl=document.getElementById("tabcontainer");

btn1.onclick=function() {
    para2.classList.add("d-none");
    para1.classList.remove("d-none");
    para3.classList.add("d-none");
    btn1.style.backgroundColor="#80ff80";

    btn2.style.backgroundColor="#00cc00";
    
    btn3.style.backgroundColor="#00cc00";
    tabconEl.style.backgroundColor="#80ff80";


}

btn2.onclick=function() {
    para1.classList.add("d-none");
    para3.classList.add("d-none");
    para2.classList.remove("d-none");

    btn1.style.backgroundColor="#00cc00";

    btn2.style.backgroundColor="#80ff80";
    
    btn3.style.backgroundColor="#00cc00";
}

btn3.onclick=function() {
    para2.classList.add("d-none");
    para1.classList.add("d-none");
    para3.classList.remove("d-none");

    btn1.style.backgroundColor="#00cc00";

    btn2.style.backgroundColor="#00cc00";
    
    btn3.style.backgroundColor="#80ff80";
}
