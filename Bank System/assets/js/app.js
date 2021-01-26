var option = prompt("Enter the service :  Deposite, WithDraw, Balance or Transfer:");

var Amount = parseInt(prompt("Enter your Balance : "));
var withdrawAmount;
var value;


// if (option == Deposite)
// {
//     Deposite(value);

// }else {
//     Withdraw(withdrawAmount);
// }

function Deposite(value){

     return "you have " +parseInt(Amount + value) + "birr in your acconunt.";
}
function Withdraw(withdrawAmount){

    if (withdrawAmount > Amount){
        return "you dont have enough balance: ";
    }else {
        return console.log( "you withdraw " + parseInt(withdrawAmount) + " birr. " +"you left " + (Amount - withdrawAmount) + " birr" );
    }

}
function Balance(){
    return "YOur balance is: " + Amount + " birr.";

}
function Transfer(){

}

    
console.log(Deposite(100));
console.log(Withdraw(100));
console.log(Balance());

