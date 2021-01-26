var firstName;
var lastName;
var age;
var job;

let tempAge;
let isEligibleToVote;

let familyMember = new Array();
let numberOfFamily;


tempAge = parseInt(age);


firstName = prompt("Enter Your First Name");
lastName = prompt("Enter Your Last Name");
job = prompt("What is Your Profession ?")
age = prompt("Enter Your Age");


numberOfFamily = prompt("Number of Family ? ");



for (let i = 0; i < parseInt(numberOfFamily); i++) {
    familyMember[i] = prompt("Your Family Members " + (i + 1));
   }



if (tempAge >= 18) {
    isEligibleToVote = true;
   }
   else {
    isEligibleToVote = false;
   }

console.log("Here is your Profile ")
console.log("Full Name: " + firstName + " " +lastName);
console.log("Profession : " + job);
console.log("Age : " + age + " " + "years old");

console.log("Is Eligible to Vote : " + isEligibleToVote);

console.log("Family Members ");

familyMember.forEach(function(member , i) {
    console.log("Family Member " + (i + 1) + " : " + member);
   });

