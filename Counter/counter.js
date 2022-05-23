let counterDisplay = document.getElementById("counter");

let increment_Button = document.getElementById("increment");
let Dec_Button= document.getElementById("dec");
let reset_Button= document.getElementById("rst");
let incten=document.getElementById("ten");
let count = 0;
let count_2=10;
counterDisplay.innerHTML = "0";

function increment() {
    console.log("incrmeent");
    count++;
    // count = count+1;

    counterDisplay.innerHTML = count;
}

function decrement(){
    console.log("Decrement");
    if(count>0){
        count--;
    }
    // count--;
    counterDisplay.innerHTML=count;
}
function rst(){
    count=0;
    counterDisplay.innerHTML=count;
}
function ten(){
    if(count=5){
        count_2;
    }
    counterDisplay.innerHTML=count_2;
}
increment_Button.onclick = increment;
Dec_Button.onclick =decrement;
reset_Button.onclick=rst;
incten.onclick=ten;