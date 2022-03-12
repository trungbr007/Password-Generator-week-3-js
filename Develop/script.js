
//Declare variables

var charLenght= 8;

var choiceArray=[];

var numbArray=['1','2','3','4','5','6','7','8','9','0'];

var lowerCaseArray=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var upperCaseArray=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var specialCharArray=['!','@','#','$','%','^','&','*','(',')','_','-','=','+',';','.','/',',',];

// Assignment Code
var generateBtn=document.querySelector ("#generate");

// Add event listener to generate button

 generateBtn.addEventListener("click", writePassword);

// Write password to the #password input

function writePassword() {
  var passwordText = document.querySelector("#password");
  var correctPrompts= getPrompts();
  if (correctPrompts) {
  passwordText.value= generatePassword();
  }
  else{
  passwordText.value = "";
  }
};

function getPrompts(){
  choiceArray=[];
  charLenght=parseInt(prompt("How many character would you like your password to be? (Should be from 8 to 128)"));

      if (isNaN(charLenght)||charLenght<8||charLenght>128) {
        alert("Character Length must be a number form 8 to 128.Try again");
        return false;
      }

      if(confirm("Would you like lowercase letter in your password?")) {
          choiceArray=choiceArray.concat(lowerCaseArray);

      };

      if(confirm("Would you like uppercase letter in your password?")) {
        choiceArray=choiceArray.concat(upperCaseArray);
      };


      if(confirm("Would you like special characters in your password?")) {
        choiceArray=choiceArray.concat(specialCharArray);
      };
      return true;
    }
    
    // max charLenght =128 

    function generatePassword () { 
      var password ="";
      for( var i=1;i<charLenght;i++){
        var randomTexts= Math.floor(Math.random()*choiceArray.length);
        password= password + choiceArray[randomTexts]};
    
        return password;}



