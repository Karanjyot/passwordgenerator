var upperEl = document.getElementById("upperDiv");
var lowerEl = document.getElementById("lowerDiv");
var specialEl = document.getElementById("specialDiv");
var numbersEl = document.getElementById("numbersDiv");
var generateEl = document.getElementById("generate");
var passwordEl = document.getElementById("passwordhtml");
var lengthEl = document.getElementById("lengthhtml");
var copyEl = document.getElementById("copy")



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



 upperEl.addEventListener("click",function(){

    characters += upper;
    
    
});

lowerEl.addEventListener("click",function(){

    characters += lower;
    

});

specialEl.addEventListener("click",function(){

    characters += special;
    
});

numbersEl.addEventListener("change",function(){


    characters += num;
    
});


generateEl.addEventListener("click", function(){
    
    var length = lengthEl.value;
    passwordEl.innerHTML = (password(length));

    if(length===""){
        alert("please insert length");
    }

    
});

copyEl.addEventListener("click", function(){

    var selectpass = document.getElementById("passwordhtml");

    selectpass.select();
    document.execCommand("copy");

});


