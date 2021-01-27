
function add(arr){

   sum = 0;
    for(let i=0;i< arr.length;i++){
        sum += arr[i];
    }
    return "the sum of the nums =  : " + sum;
  
}

function sub(a, b){
    return "subtraction of " + a + " and " + b + " = " + (a - b);
 }

 function mult(arr){
   let product = 1

   for(let i=0;i< arr.length;i++){
       product = product * arr[i]
   }
   return "the multiplicaton of the nums = " + product;
 }

 function division(a, b){
    if (b == 0){
       return "you can't give 0 value to demominator ";
    }else{
    return "division of " + a + " and " + b + " = " + (a / b);
      }
}
function square(a){
   return "square of " + a +  " = " +  (a*a);
}

function average(arr){
   sum = 0;
   for(let i=0;i< arr.length;i++){
       sum += arr[i];

       var Average = sum / arr.length;
   }

return "Average of the numbers = " +  (Average);
}


(function(){
   let service = parseInt(prompt("choice: \n 1: Add  \n 2: Subtract  \n 3: multiply  \n 4:  Divide  \n 5: Square \n 6: Average"));

   switch(service){
      case 1:
         let length = prompt("how many number that you want to add : ");
                array = new Array();
                for(let i=0; i<length; i++){
                    array[i] = parseInt(prompt("Enter Number("+(i+1)+"): "));
                } 
                alert(add(array));
                break;
     case 2:
         var a = parseInt(prompt("enter number 1"));
         var b = parseInt(prompt("enter number 2"));
         alert(sub(a,b));
         break;

     case 3:
         var nums = prompt("how many numbers tha you want to multiply: ");
         array = new Array();
         for(let i=0; i<nums; i++){
            array[i] = parseInt(prompt("Enter Number("+(i+1)+"): "));
         }
         alert(mult(array))
         break; 
         
      case 4:
         var a = parseInt(prompt("enter number 1"));
         var b = parseInt(prompt("enter number 2"));
         alert(division(a,b));
         break;

      case 5:
         var a = parseInt(prompt("enter number"));
         alert(square(a));
         break;

      case 6:
         var nums = prompt("how many numbers that you want to calculate there avarage: ")
         array = new Array()
         for(let i=0; i<nums; i++){
         array[i] = parseInt(prompt("Enter Number("+(i+1)+"): "));
         }
         alert(average(array));
         break; 

      default:

         alert("Invalid input");
         break;
             
   }
}) ();

