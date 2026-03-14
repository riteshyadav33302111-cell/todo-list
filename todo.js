let lengthSlider = document.getElementById("length");
let lengthValue = document.getElementById("lengthValue");

lengthSlider.oninput = function(){
lengthValue.innerText = this.value;
}

function generatePassword(){

let length = lengthSlider.value;

let uppercase = document.getElementById("uppercase").checked;
let lowercase = document.getElementById("lowercase").checked;
let numbers = document.getElementById("numbers").checked;
let symbols = document.getElementById("symbols").checked;

let characters = "";

if(uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if(lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
if(numbers) characters += "0123456789";
if(symbols) characters += "!@#$%^&*()";

let password = "";

for(let i=0;i<length;i++){

let randomIndex = Math.floor(Math.random()*characters.length);

password += characters[randomIndex];

}

document.getElementById("password").value = password;

}

function copyPassword(){

let passwordField = document.getElementById("password");

passwordField.select();
document.execCommand("copy");

alert("Password Copied!");

}