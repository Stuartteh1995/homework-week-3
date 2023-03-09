



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// creating a prompt to ask the user how long does the password need to be. It also checks wether it is a number.
function generatePassword() {
var passwordLength = prompt("How long would you like this password to be? (must be 8 ~ 128 charactors");
passwordLength = parseInt(passwordLength);
if (passwordLength <8 || passwordLength > 128) {
  alart("Invalid input. Password length must be a number bewteen 8 and 128 charactors.");
  return "";
}

// create variables for the types of password
var lowercase = confirm("Do you want to include lowercase characters?");
var uppercase = confirm("Do you want to include uppercase characters?");
var numeric = confirm("Do you want to include numeric characters?");
var special = confirm("Do you want to include special characters?");

// if user doesnt click any they would be ask to pick at least one
if (!lowercase && !uppercase && !numeric && !special) {
  alert("You must select at least one character type.");
  return "";
}

// creating a global varible of the diffrent types of charators
var chars = "";
if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (numeric) chars += "0123456789";
if (special) chars += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var password = "";

// this creates a random passwords making sure that it is also within the criteria set by the user
for (var i = 0; i < passwordLength; i++) {
  password += chars.charAt(Math.floor(Math.random() * chars.length));
}
return password;


}

// this print the password on the html page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// this is what happen when the button is click
generateBtn.addEventListener("click", writePassword);


