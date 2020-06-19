// Assignment Code
var generateBtn = document.querySelector("#generate");

var passLength;
var passCase = Boolean;
var passLower = Boolean;
// Write password to the #password input

//  passLength =  prompt
function writePassword() {
  alert("Please select password criteria:")
  chooseLength()
  chooseCase()
  confirm("Include numbers?")
  confirm("Include special characters? (!@#$%^&*)") 
}

function chooseLength() {
  prompt("Choose number of characters in password. (8-128)");
    if (passLength != Number){
      alert("Please imput a number between 8 and 128")
      chooseLength()
    }
    passLength = Number
    if (passLength < 8 ){
      alert("Please imput a number between 8 and 128")
      chooseLength()
    }
    else{
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
