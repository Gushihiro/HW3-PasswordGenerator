// Assignment Code
//DO NOT CHANGE THIS CODE
var alphaChar = "abcdefghijklmnopqrstuvwxyz".split("");
var alphaCharUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numeric = "1234567890".split("");
var symbols = " `!@#$%^&*()-_=+~,.<>/?;:']}[{".split("");
var possibleChar = [""];
var finalPass = "";
var generateBtn = document.querySelector("#generate");
 
function generatePassword(){
  //TODO: your code here
  var upperCase = window.confirm("Do you want upper case characters?")
  if (upperCase === true) {
    possibleChar = possibleChar.concat(alphaCharUpper);
  }
  console.log(possibleChar)
var lowerCase = confirm("Do you want lower case characters?")
  if (lowerCase === true) {
    possibleChar = possibleChar.concat(alphaChar);
  }
  console.log(possibleChar)
var numbers = confirm("Do you want numbers in your password?")
  if (numbers === true) {
    possibleChar = possibleChar.concat(numeric);
  }
  console.log(possibleChar)
var symbolz = confirm("Do you want symbols in your password?")
  if (symbolz === true) {
    possibleChar = possibleChar.concat(symbols);
  }
  if (!upperCase && !lowerCase && !numbers && !symbolz) {
    alert("You have to pick something.")
    return false;
  }

        console.log("random Index " + possibleChar[randomIndex]);
console.log(possibleChar);
  
var passLength =+ prompt("How long do you want your password to be?")
console.log(passLength)
  if (passLength < 8) {
    alert("Sorry the password must be longer than 8 characters.")
    return false;
  } else if (passLength > 128) {
      alert("Sorry, the password must be less than 129 characters.")
      return false;
  } else if (Number.isInteger(passLength) === false) {
      alert("Sorry, you can only input numbers for password length.");
      return false;
       
  }
  console.log(passLength)        
        
      
      for (i = 0; i < passLength; i++){
      var randomIndex = Math.floor(Math.random() * possibleChar.length);  
      finalPass = finalPass.concat(possibleChar[randomIndex]);
      console.log("final pass " + finalPass);
      }
     return finalPass; 
}     
      



    

  

  
     
    
   
0
// Write password to the #password input
/* DO NOT CHANGE THIS CODE!  This function is going to call your generatePassword() function and whatever is returned from that function will be put onto the page */
function writePassword() {
  var password = generatePassword();
  console.log(password)
  if (password) {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
}

// Add event listener to generate button
// DO NOT CHANGE THIS CODE
generateBtn.addEventListener("click", writePassword);

