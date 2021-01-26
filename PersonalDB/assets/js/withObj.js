let personProfile = {
    firstName: "",
    lastName: "",
    birthYear: "",
    job: "",
    age: "",
    isEligibleToVote: false,
    familyMembers: [],
    weight: "",
    height: "",
    
    ageCalc: function() { return this.age = new Date().getFullYear() - this.birthYear; },
    checkVote: function() {
    let tempAge = this.ageCalc(Number(this.birthYear));

    if (tempAge >= 18) { this.isEligibleToVote = true; } else { this.isEligibleToVote = true; }
    },
    calcBmi: function() {
    }
   };

//    personProfile.firstName = prompt("what is your name: ")
//    firstName = prompt("Enter Your First Name");
//     lastName = prompt("Enter Your Last Name");
//     job = prompt("What is Your Profession ?");

//     noOfFam = prompt("how many fam do u have? ");

//     for (let i = 0; i < parseInt(numberOfFamily); i++) {
//         personProfile.familyMembers[i] = prompt("Your Family Members " + (i + 1));
//        }

//        personProfile.ageCalc();
//        personProfile.checkVote();

//        (function()){
//         //    console.log("name : " + personProfile.firstName + personProfile.lastName)
//         console.log("**************************************************************")
//         console.log("Here is your Profile ")
//         console.log("Full Name: " + personProfile.firstName + " " + personProfile.lastName);
//         console.log("Profession : " + personProfile.job);
//         console.log("Age : " + personProfile.age + " " + "years old");
//         console.log("Is Eligible to Vote : " + personProfile.isEligibleToVote);
//         console.log("Family Members ");
//         //Displaying the family member with foreach
//         personProfile.familyMembers.forEach(function(member, index) {
//         console.log("Family Member " + (index + 1) + " : " + member);
//        }

//     }

