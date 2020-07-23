//Task 1

// document.write("<br> Task 1 <br><br>")
// var inputt = prompt("Enter the desired character")
// if (inputt >= 'A' && inputt <= 'Z') {
//     alert("Entered character is an Upper case letter")
// } else if (inputt >= 'a' && inputt <= 'z') {
//     alert("Entered character is an lower case letter")
// } else if (inputt >= '0' && inputt <= '9') {
//     alert("Entered character is a digit")
// }


//Task 2

// document.write("<br> Task 2 <br><br>")
// var integer1 = +(prompt("Enter 1st integer"))
// var integer2 = +(prompt("Enter 2nd integer"))

// if (integer1 == integer2) {
//     alert("Both integer are equal")
// } else if (integer1 > integer2) {
//     alert(integer1 + " is greater than " + integer2)
// } else {
//     alert(integer1 + " is less than " + integer2)
// }

//Task 3

// document.write("<br> Task 3 <br><br>")
// var numberr = +(prompt("Enter number"))
// if (numberr > 0) {
//     alert("You have entered a positive number")
// } else if (numberr == 0) {
//     alert("You have entered 0")
// } else {
//     alert("You have entered a negative number")
// }


//Task 4

// document.write("<br> Task 4 <br><br>")
// var alphabet = prompt("Enter alphabet")
// alphabetSmall = alphabet.toLowerCase()
// if (alphabetSmall == 'a' || alphabetSmall == 'e' || alphabetSmall == 'i' || alphabetSmall == 'o' || alphabetSmall == 'u') {
//     alert(true)
// } else {
//     alert(false)
// }


//Task 5

// document.write("<br> Task 5 <br><br>")
// var passpass = prompt("Enter password")
// if (passpass == "") {
//     alert("Please enter your password..")
//         // continue
// } else if (passpass == "Gingalala") {
//     alert("The password you have entered matches the original password")
// } else {
//     alert("Incorrect password")

// }


//Task 6

document.write("<br> Task 6 <br><br>")

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}


//Task 7

document.write("<br> Task 7 <br><br>")
var timee = prompt("Enter time in 24 hrs format")

if (timee >= 0000 && timee < 1200) {
    alert("Good Morning!")
} else if (timee >= 1200 && timee < 1700) {
    alert("Good afternoon!")
} else if (timee >= 1700 && timee < 2100) {
    alert("Good evening!")
} else if (timee >= 2100 && timee < 2359) {
    alert("Good night!")
}