let textvalue =document.getElementById("numb");
function toggleSign(){
    if(textvalue.textContent===""||isNaN(textvalue.textContent)) return;
    textvalue.textContent = (textvalue.textContent * -1);
}

function aclick(event){
    textvalue.textContent += event.target.textContent;
   
}

function clearDisplay(){
    textvalue.textContent ="";
}
function calculateResult(){
    try{
    textvalue.textContent=eval(textvalue.textContent);}
    catch(error){
        textvalue.textContent="Error"}
}