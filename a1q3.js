var min = prompt("Enter the minimum number");
var max = prompt("Enter the maximum number");
var random =Math.floor(Math.random() * (+max - +min)) + +min; 
console.log("Random Number Generated : " + random );  