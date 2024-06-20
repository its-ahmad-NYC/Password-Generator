const passwordBox = document.getElementById("password");
const passwordCopy = document.querySelector(".display img");
const passwordBtn = document.querySelector(".container button");
const lenght = 12;
const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ"
const LowerCase = "abcdefghijklmnopqrstuvxyz"
const number = "0123456789"
const symbol = "!@#$%^&*()_{}[]/*-+"
const allchars = UpperCase + LowerCase + number + symbol;

function createpassword(){
 let password = ""
  password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
  password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  

  while(lenght > password.length){
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }
  passwordBox.value = password;
}

function copypassword(){
    passwordBox.select();
    document.execCommand("copy");
}
passwordCopy.addEventListener("click", ()=>{
    copypassword();
})

passwordBtn.addEventListener("click", ()=>{
    createpassword();
})