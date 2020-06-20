// Assignment Code
var generateBtn = document.querySelector("#generate");

var passLength;
var passCase = Boolean;
  var passLower = Boolean;
var passNumbers = Boolean;
var passSpecials = Boolean;
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z' ];
var numberArray = ['1','2','3','4','5','6','7','8','9','0' ];
var specialArray = ['!','@','#','$','%','^','&','*' ];
var completeArray = "";
var password = "";

// Write password to the #password input


function writePassword() {
  alert("Please select password criteria:")
  chooseLength()
  chooseCase()
  console.log(passCase)
  console.log(passLower)
  console.log(upperCaseArray)
  passNum = confirm("Include numbers?")
  passSpecial = confirm("Include special characters? (!@#$%^&*)")
  if (passCase = true){
    completeArray = completeArray = lowerCaseArray + upperCaseArray;
  } 
  if (passLower == true){
    completeArray = completeArray + lowerCaseArray;
  }
  else {
    completeArray = completeArray + upperCaseArray;
  }
  if (passNumbers = true){
    completeArray = completeArray + numberArray;
  }
  if (passSpecials = true){
    completeArray = completeArray + specialArray;
  } 
  console.log(completeArray)
  generatePassword()
  console.log(password)
  alert("Your password is:"+ password)
}

//generates password by adding a random character from the complete array
function generatePassword(){
  for(i = 0; i < passLength; i++) {

    var randomCharacter = Math.floor(Math.random() * completeArray.length);
    password = password + completeArray[randomCharacter];
  }
}  

function chooseLength() {
 passLength = parseInt(prompt("Choose number of characters in password. (8-128)")); 
 console.log(passLength)
    if (passLength < 8 || passLength > 128 || Number.isNaN(passLength) == true ){
      alert("Please imput a number between 8 and 128")
      chooseLength()
    }

    
}
function chooseCase(){
  passCase = confirm("Include both uppercase and lowercase characters?");
    if (passCase == false) {
        passLower = confirm("Include lowercase characters only?")   
          if (passLower == false){
          alert("Password will include only uppercase characters")
          }
    }  
}


  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;



// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword); 
