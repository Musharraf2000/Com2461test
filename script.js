console.log("Hello");

let inputfield1 = document.getElementById("hoursinput");
let inputfield2 = document.getElementById("hourlywage");
let button1 = document.getElementById("calc");
let para1 = document.getElementById("para1");
let div1 = document.getElementById("div1");
let pic1 = document.getElementById("pic1");

function toCelcius(){
    para1.innerText = (5 / 9) * (inputfield1.value - 32);

}
// button1.addEventListener("click", function(){
//     // let hours =  parseInt(inputfield1.value);
//     // let hourlywage = parseInt(inputfield2.value);
//     // let fullwage = hours*hourlywage;
//     // para1.innerText = fullwage;
//     //div1.innerText = "Musharraf";
//     div1.innerHTML = "<img src=./images/pika.jpg>";
// });

button1.addEventListener("click", toCelcius);



