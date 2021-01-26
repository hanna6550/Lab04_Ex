var Height = prompt("Enter your Height: ");
var Weight = prompt("Enter your Weight: ");

let calcBmi = function(Height, Weight) {
     
    return (Weight / Math.pow(Height, 2)).toFixed(2); 
}


var bmi = ( calcBmi(Height, Weight));

function undentify(){
    if (bmi < 18.5){
        console.log("Your BMI is : "+ bmi + " you are under weight.");
    }else if(bmi >= 18.5 & bmi <= 24.5 ){
        console.log("Your BMI is : "+ bmi +" you are normal weight.");
    }else if(bmi >= 25.0 & bmi <=29.9){
        console.log("Your BMI is : "+ bmi +" you are over weight.");
    }else if(bmi> 29.9){
        console.log("Your BMI is : "+ bmi +" you are obese");
    }
}
undentify();

