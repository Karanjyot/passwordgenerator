var characters = '';

 var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 var lower = 'abcdefghijklmnopqrstuvwxyz';
 var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
 var num = '0123456789';
 var special = '!@#$%^&*';
 var newPassword = '';

 function password(length) {

     
     for (var i = 0; i < length; i++) {
         
         newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
     }

     return newPassword;

 }


 var length = prompt("how many characters");
 var question1 = prompt("would you like to make all letters uppercase?")
 var question2 = prompt("would you like to make all letters lowercase?")
 var question3 = prompt("would you like to include special characters?")
 var question4 = prompt("would you like to include numeric characters?")


 
 if (question1 === "yes") {

     characters += upper;
 }


 if (question2 === "yes") {

     characters += lower;
 }

 if (question1 === "no" && question2 === "no") {

     characters = letters;
 }

 if (question1 === "yes" && question2 === "yes") {

     alert("You selected yes for 'all letters uppercase' and 'all letters lowercase', password will be a combination of both.")
 }

 if (question3 === "yes") {

     characters += special;

 }

 if (question4 === "yes") {

     characters += num;
 }

 alert(password(length)) 



