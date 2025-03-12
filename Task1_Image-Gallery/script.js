let im = document.querySelector(".ele");
var pop=document.querySelector(".popup");
var clo=document.querySelector(".close");
let bac=document.querySelector(".overlay");
let img=document.getElementById("ima");
function show(event) {
    let clickedElement = event.currentTarget; 
    let clickedImg = clickedElement.querySelector("img").src;

    img.src = clickedImg;
    pop.style.display = "block"; 
    bac.style.display = "block"; 
}

function cl(){
    pop.style.display="none";
    bac.style.display="none";
}