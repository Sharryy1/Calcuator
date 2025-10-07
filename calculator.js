const display = document.getElementById("display");
const btnoperator = document.querySelectorAll(".btn-operator");
const btnnumber = document.querySelectorAll(".btn-number");
const btnclear = document.querySelector(".btn-clear");
const btnenter = document.querySelector(".btn-equal");
const btnsquare = document.querySelector(".btn-square");
const btnpercent = document.querySelector(".btn-percent");


let expression = "";

btnnumber.forEach((num) => {
    num.addEventListener("click", () => {
        expression = expression+ num.textContent;
        display.textContent = expression;
    })
    
})

btnoperator.forEach((opt) => {
    opt.addEventListener("click",() =>{
        expression = expression+ opt.textContent;
        display.textContent = expression;
    })
})

btnenter.addEventListener("click",() => {
    try{
        expression = eval(expression);
        display.textContent =expression;
    }
    catch{
        display.textContent ="Error";
        expression = "";
    }
})

btnclear.addEventListener("click",() => {
    expression = "";
    display.textContent = "0";
})

btnsquare.addEventListener("click",() => {
    if(expression !==""){
    expression = Math.pow(eval(expression), 2);
    display.textContent = expression;
    }
})

btnpercent.addEventListener("click",() => {
    if(expression !==""){
        expression = (eval(expression) /100);
        display.textContent = expression;
    }
})