// //Task 1

// document.write("<br> Task 1 <br><br>")

// var city = prompt("Enter name of your city..", "Enter name ")
// city = city.toLowerCase()
// if (city == "karachi") {
//     alert("Welcome to city of lights")
// }

// //Task 2

// document.write("<br> Task 2 <br><br>")

// var genderr = prompt("Enter your gender..", "Enter gender ")
// genderr = genderr.toLowerCase()
// if (genderr == "male") {
//     alert("Good Morning Sir")
// } else {
//     alert("Good Morning Ma'am")

// }

// //Task 3

// document.write("<br> Task 3 <br><br>")

// var signal = prompt("Enter color oof traffic signal", "Enter color ")
// signal = signal.toLowerCase()
// if (signal == "red") {
//     alert("Must stop")
// } else if (signal == "yellow") {
//     alert("Ready to move")
// } else if (signal == "green") {
//     alert("Move now")
// } else {
//     alert("Invalid Color name")
// }


// //Task 4

// document.write("<br> Task 4 <br><br>")

// var fuel = prompt("Enter remaining fuel in liters")
// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car..")
// } else {
//     alert("Fuel is sufficient..")
// }


//Task 5

// document.write("<br> Task 5 <br><br>")
// document.write("Case a <br><br>")

// var a = 4;
// if (++a === 5) { alert("given condition for variable a is true"); }

// document.write("Remarks: if will be executed as pre-increment operator is used <br>")

// document.write("<br>Case b <br><br>")
// var b = 82;
// if (b++ === 83) { alert("given condition for variable b is true"); }
// document.write("Remarks: if will not be executed as post-increment operator is used <br>")

// document.write("<br>Case c <br><br>")

// var c = 12;
// if (c++ === 13) { alert("condition 1 is true"); }
// if (c === 13) { alert("condition 2 is true"); }
// if (++c < 14) { alert("condition 3 is true"); }
// if (c === 14) { alert("condition 4 is true"); }

// document.write("Remarks: First conditional statement is false but it will increase value of c by 1. second case will true as now value is 13. Third condition is false because as pre increment operator is used so value will 14 and 14 is not less than 14. Fourth case is also true. <br>")

// document.write("<br>Case d <br><br>")

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) { alert("The cost equals"); }


// document.write("<br>Case e <br><br>")

// if (true) { alert("True"); }
// if (false) { alert("False"); }


// document.write("<br>Case f <br><br>")


// if ("car" < "cat") { alert("car is smaller than cat"); }


//Task 6

// document.write("<br> Task 6 <br><br>")
// var sub1Markss = +(prompt("Enter marks obtained in 1st subject", "Enter Marks"))
// var sub1Total = +(prompt("Enter total marks of 1st subject", "Enter Marks"))

// var sub2Markss = +(prompt("Enter marks obtained in 2nd subject", "Enter Marks"))
// var sub2Total = +(prompt("Enter total marks of 2nd subject", "Enter Marks"))

// var sub3Markss = +(prompt("Enter marks obtained in 3rd subject", "Enter Marks"))
// var sub3Total = +(prompt("Enter total marks of 3rd subject", "Enter Marks"))

// obtainTotal = sub1Markss + sub2Markss + sub3Markss
// marksTotal = sub1Total + sub2Total + sub3Total
// percent = (obtainTotal / marksTotal) * 100
// document.write("Total Marks: " + marksTotal + "<br> Marks Obtained: " + obtainTotal + "<br>")

// if (percent >= 80) {
//     document.write("Grade: A-1<br>Remarks: Excellent<br>")
// } else if (percent >= 70) {
//     document.write("Grade: A<br>Remarks: Good<br>")
// } else if (percent >= 60) {
//     document.write("Grade: B<br>Remarks: You need to improve<br>")
// } else if (percent < 60) {
//     document.write("Grade: Fail<br>Remarks: Sorry<br>")
// }


//Task 7

// document.write("<br> Task 7 <br><br>")

// var secret = 9
// var guess = 0
// while (true) {
//     guess = +(prompt("Guess the Secret number", "Guess"))
//     if (guess == secret) {
//         alert("Bingo! Correct Answer..")
//         break
//     } else if (guess > secret) {
//         alert("Entered value is large")
//         continue
//     } else if (guess < secret) {
//         alert("Entered value is less")
//         continue
//     }
// }


//Task 8

// document.write("<br> Task 8 <br><br>")
// var numb = +(prompt("Enter number", "Enter number"))
// if (numb % 3 == 0) {
//     alert("Number is divisble by 3")
// } else {
//     alert("Number is not divisble by 3")

// }



//Task 9

// document.write("<br> Task 9 <br><br>")
// var numb = +(prompt("Enter number for Even/Odd Check", "Enter number"))
// if (numb % 2 == 0) {
//     alert("Number is even")
// } else {
//     alert("Number is odd")

// }


//Task 10

// document.write("<br> Task 10 <br><br>")
// var temp = +(prompt("Enter Temperature", "Enter temperature"))
// if (temp > 40) {
//     alert("It is too hot outside..")
// } else if (temp > 30 && temp <= 40) {
//     alert("The weather today is normal")
// } else if (temp > 20 && temp <= 30) {
//     alert("The weather today is cool")
// } else if (temp > 10 && temp <= 20) {
//     alert("OMG! Today weather is soo Cool")
// }


//Task 11

document.write("<br> Task 11 <br><br>")
var num1 = +(prompt("Enter 1st number", "1st number"))
var num2 = +(prompt("Enter 2nd number", "2nd number"))
var oper = prompt("Enter operator", "oerator")

if (oper === '+') {
    alert(num1 + " + " + num2 + " = " + Number(num1) + Number(num2))
} else if (oper === '-') {
    alert(num1 + " - " + num2 + " = " + num1 - num2)
} else if (oper === '*') {
    alert(num1 + " * " + num2 + " = " + num1 * num2)
} else if (oper === '/') {
    alert(num1 + " / " + num2 + " = " + num1 / num2)
} else if (oper === '%') {
    alert(num1 + " % " + num2 + " = " + num1 % num2)
}