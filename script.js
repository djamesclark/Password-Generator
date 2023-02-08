// Assignment code here

//click button - pop up windows
//enter password length
//length must be between 8 and 128 characters
//include lowercase?
//include upppercase?
//iclude numeric?
//include special characters?
//at least one type needs to be selected
//determine which character types have been selected for
//password is generated
//password is written to page

let finalPassword;
let passwordLength = 0;
let includeLowerCase = false;
let includeUpperCase = false;
let includeNumeric = false;
let includeSpecial = false;
let specialCharacters = ["!", "@", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "^", "_", "`", "{", "}", "|", "}", "~"];
let numericCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


let createPassword = function () {
    passwordLength = window.prompt("How many characters?");

    if (passwordLength > 128) {
        window.alert("Password length must be less than 129 characters");
        return null;
    }
    if (passwordLength < 8) {
        window.alert("Password length must be greater than 7 characters");
        return null;
    }

    includeLowerCase = window.prompt("Include Lower Case Characters?\nYes/No")
    includeLowerCase = includeLowerCase.toUpperCase();
    includeLowerCase = includeLowerCase.trim();

    if (includeLowerCase === "YES") {
        includeLowerCase = true;
    } else {
        includeLowerCase = false;
    }

    includeUpperCase = window.prompt("Include Upper Case Characters?\nYes/No")
    includeUpperCase = includeUpperCase.toUpperCase();
    includeUpperCase = includeUpperCase.trim();

    if (includeUpperCase === "YES") {
        includeUpperCase = true;
    } else {
        includeUpperCase = false;
    }

    includeNumeric = window.prompt("Include Numeric Characters?\nYes/No")
    includeNumeric = includeNumeric.toUpperCase();
    includeNumeric = includeNumeric.trim();

    if (includeNumeric === "YES") {
        includeNumeric = true;
    } else {
        includeNumeric = false;
    }

    includeSpecial = window.prompt("Include Special Characters?\nYes/No")
    includeSpecial = includeSpecial.toUpperCase();
    includeSpecial = includeSpecial.trim();

    if (includeSpecial === "YES") {
        includeSpecial = true;
    } else {
        includeSpecial = false;
    }

    if (includeLowerCase === false && includeUpperCase === false && includeNumeric === false && includeSpecial === false) {
        window.alert("Error: Must include at least one criteria")
        return null;
    }

    

    for (let i = 0; i <= passwordLength; i ++) {
        let allCharacters = specialCharacters.concat(numericCharacters, lowerCaseCharacter, upperCaseCharacters);
        let shuffledArray = allCharacters.sort(() => 0.5 - Math.random());
        finalPassword = shuffledArray.slice(0, passwordLength);
        finalPassword = finalPassword.join('');
    }



    
}
createPassword();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


console.log(finalPassword);
console.log(passwordLength);
console.log(includeLowerCase);
console.log(includeUpperCase);
console.log(includeNumeric);
console.log(includeSpecial);