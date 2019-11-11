var upperEl = document.getElementById("upperDiv");
var lowerEl = document.getElementById("lowerDiv");
var specialEl = document.getElementById("specialDiv");
var numbersEl = document.getElementById("numbersDiv");
var generateEl = document.getElementById("generate");
var passwordEl = document.getElementById("passwordhtml");
var lengthEl = document.getElementById("lengthhtml").value;
var copyEl = document.getElementById("copy")



var characters = '';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var special = '!@#$%^&*';
var newPassword = '';

var length = 50;


 function password(length) {

     for (var i = 0; i < length; i++) {
         
         newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
     }
    
     return newPassword;
 }



 upperEl.addEventListener("click",function(){

    characters += upper;
    console.log(characters);
    
});

lowerEl.addEventListener("click",function(){

    characters += lower;
    console.log(characters);

});

specialEl.addEventListener("click",function(){

    characters += special;
    console.log(characters);
});

numbersEl.addEventListener("change",function(){


    characters += num;
    console.log(characters);
});


generateEl.addEventListener("click", function(){
    
    passwordEl.innerText = (password(length));
    console.log(length);
    
});

copyEl.addEventListener("click", function(){

    var selectpass = document.getElementById("passwordhtml");

    selectpass.select();
    document.execCommand("copy");

});
