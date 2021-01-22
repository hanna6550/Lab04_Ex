var Height = parseInt(prompt("Enter your Height: "));
var Weight = parseInt(prompt("Enter your Weight"));

let calcBmi = function(Height, Weight) {
     
    console.log("Your BMI is : " + Weight/(Height*Height) );

}
parseInt(calcBmi());