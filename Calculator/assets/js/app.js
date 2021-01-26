var a = parseInt(prompt("enter number 1"));
var b = parseInt(prompt("enter number 2"));
let nums = [];
nums[i] = prompt("enter the numbers: " );


function init(){

function add(){
   var sum = 0;
   
   for (var i = 0; i<nums.length; i++){
      sum += nums[i];
      
   }
   console.log("the sum = " + sum);
}

function sub(a, b){
    console.log("subtraction of num1 and num2 = " + (a - b));
 }

 function mult(a, b){
    console.log("Multiplication of num1 and num2 = " + (a * b));
 }

 function division(a, b){
    if (b == 0){
       console.log("you can't give 0 value to demominator ");
    }else{
    console.log("division of num1 and num2 = " + (a / b));
      }
}


add(); 
sub(a, b);
mult(a, b);
division(a, b);


}init();

