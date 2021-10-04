let firstPassword = prompt("Enter in password: ")
let secondPassword = prompt("Re-enter the password: ")

function Compare(firstPassword, secondPassword){
    return firstPassword.localeCompare(secondPassword)
}

let truePassword = Compare(firstPassword, secondPassword)

if (truePassword == true) {
        console.log("The passwords are the same.")} 
else {
        console.log("The passwords are not the same.")}