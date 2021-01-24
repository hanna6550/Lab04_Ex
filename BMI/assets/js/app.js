var Height = prompt("Enter your Height: ");
var Weight = prompt("Enter your Weight: ");

let calcBmi = function(Height, Weight) {
     
    return (Weight / Math.pow(Height, 2)); 
}


var bmi =  console.log("Your BMI is : " + calcBmi(Height, Weight ));

// function undentify(){
//     if (bmi < 18.5){
//         return "you are under weight."
//     }else if(bmi >= 18.5 & bmi <= 24.5 ){
//         return "you are normal weight."
//     }else if(bmi >= 25.0 & bmi <=29.9){
//         return "you are over weighy."
//     }else{
//         return "you are obese"
//     }
// }
// undentify();

