//Task 1

document.write("<br>Task 1<br><br>")
var a = 10

document.write("The value of a is: " + a + "<br>............................................................<br><br>")
document.write("The value of ++a is: " + ++a + "<br>")
document.write("Now the value of a is: " + a + "<br><br><br>")

document.write("The value of a++ is: " + a++ + "<br>")
document.write("Now the value of a is: " + a + "<br><br><br>")

document.write("The value of --a is: " + --a + "<br>")
document.write("Now the value of a is: " + a + "<br><br><br>")

document.write("The value of a-- is: " + a-- + "<br>")
document.write("Now the value of a is: " + a + "<br><br><br>")


//Task 2

document.write("<br><br>Task 2<br><br>")
var a = 2,
    b = 1;
document.write("a is " + a + "<br>b is " + b + "<br>")
var result = --a - --b + ++b + b--

    document.write("Result is " + result + "<br>")

//Task 3

document.write("<br><br>Task 3<br><br>")
var a = prompt("Enter your name", "Enter your name")
document.write("Hello " + a + "<br>")



//Task 5

document.write("<br><br>Task 5<br><br>")
var a = +(prompt("Enter number for multiplication table", "Enter number"))
if (a == 0) {
    for (var i = 1; i <= 10; i++) {
        document.write("5 * " + i + " = " + 5 * i + "<br>")
    }
} else {
    for (var i = 1; i <= 10; i++) {
        document.write(a + " * " + i + " = " + a * i + "<br>")
    }
}

//Task 6

document.write("<br><br>Task 6<br><br>")
var sub1Name = prompt("Enter name of 1st Subject", "Enter name here")
var sub1Marks = +(prompt("Enter marks in 1st Subject", "Enter marks here"))
var sub2Name = prompt("Enter name of 2nd Subject", "Enter name here")
var sub2Marks = +(prompt("Enter marks in 2nd Subject", "Enter marks here"))
var sub3Name = prompt("Enter name of 3rd Subject", "Enter name here")
var sub3Marks = +(prompt("Enter marks in 3rd Subject", "Enter marks here"))
var totalMarks = 100
var sub1per = (sub1Marks / totalMarks) * 100
var sub2per = (sub2Marks / totalMarks) * 100
var sub3per = (sub3Marks / totalMarks) * 100
document.write("Subject_Name Total_Marks Obtained_Marks Percentage<br>" +
    sub1Name + " " + totalMarks + " " + sub1Marks + " " + sub1per + "%<br>" +
    sub2Name + " " + totalMarks + " " + sub2Marks + " " + sub2per + "%<br>" +
    sub3Name + " " + totalMarks + " " + sub3Marks + " " + sub3per + "%<br>")