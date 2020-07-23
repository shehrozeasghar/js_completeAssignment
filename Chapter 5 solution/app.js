// Task 1

var a = 10,
    b = 5
var c = a + b
document.write("<br/> Task 1 <br/><br/>The sum of " + a + " and " + b + " is " + c + "<br/>")

// Task 2

var a = 10,
    b = 5
var c = a - b
document.write(" <br/> Task 2 <br/><br/>The difference of " + a + " and " + b + " is " + c + "<br/>")

var a = 10,
    b = 5
var c = a * b
document.write("The product of " + a + " and " + b + " is " + c + "<br/>")

var a = 10,
    b = 5
var c = a / b
document.write("The division of " + a + " and " + b + " gives " + c + "<br/>")

var a = 10,
    b = 5
var c = a % b
document.write("The modulus of " + a + " and " + b + " gives " + c + "<br/>")

//Task 3

var num
document.write("<br/> Task 3 <br/><br/>Value after variable declaration is: " + num + "<br/>")
num = 5
document.write("Initial Value: " + num + "<br/>")
num = num + 1
document.write("Value after increment is " + num + "<br/>")
num = num + 7
document.write("Value after addition of 7 is " + num + "<br/>")
num = num - 1
document.write("Value after decrement is " + num + "<br/>")
document.write(" The remainder after divison with 3 is " + num % 3 + "<br/>")

//Task 4

tickCost = 600
document.write("Total cost to buy 5 tickets to a movie is " + tickCost * 5 + "PKR<br/><br/><br/>")

//Task 5

var tableOf = 5
document.write("Task 5<br/><br/>Table of 5<br/>")
for (var i = 1; i <= 10; i++) {
    document.write("5 * " + i + " = " + 5 * i + "<br/>")
}

//Task 6
document.write("<br/>Task 6 <br/><br/>")
var celcius = 25
var f = (celcius * (9 / 5)) + 32
document.write(celcius + "C is " + f + "F<br/>")
var far = 70
var cel = (far - 32) * (5 / 9)
document.write(far + "F is " + cel + "C<br/>")


//Task 7
document.write("<br/>Task 7 <br/><br/>")
var item1 = 650,
    quant1 = 3,
    item2 = 100,
    quant2 = 7,
    shipCharges = 100
item1Total = item1 * quant1
item2Total = item2 * quant2
total = item1Total + item2Total + shipCharges
document.write("Price of item1 is " + item1 + "<br/> Quantity of item1 is " + quant1 + "<br/>Price of item2 is " + item2 + "<br/> Quantity of item2 is " + quant2 + "<br/>Shipping Charges " + shipCharges + "<br/><br/>Total cost of your order is " + total)

//Task 8
document.write("<br/>Task 8 <br/><br/>")
var marksTotal = 980,
    marksObt = 804
percent = (marksObt / marksTotal) * 100
document.write("<h1>Marks Sheet</h1><br/>Total Marks: " + marksTotal + "<br/>Marks Obtained: " + marksObt + "<br/>Percentage: " + percent + "%")


//Task 9
document.write("<br/><br/>Task 9 <br/><br/>")
var dollar = 10,
    riyal = 25,
    dollarPak = 104.80
riyalPak = 28
document.write("Total Currency in PKR: " + (dollar * dollarPak) + (riyal * riyalPak))

//Task 10
document.write("<br/><br/>Task 10 <br/><br/>")
var number = 45
number = ((number + 5) * 10) / 2
document.write("Result is " + number + "<br/>")


//Task 11
document.write("<br/><br/>Task 11 <br/><br/>")
var PresYear = 2020,
    birthYear = 1991
var age = PresYear - birthYear
document.write("Current Year: " + PresYear + "<br/>Birth Year: " + birthYear + "<br/> Your Age is: " + age)

//Task 12
document.write("<br/><br/>Task 12 <br/><br/> <h1>The Geometrizer</h1>")
var radius = 20,
    pi = 3.14
var circum = 2 * pi * radius
var areaa = pi * (radius ^ 2)
document.write("The circumference of circle is: " + circum)
document.write("<br/>Area of circle is: " + areaa)


//Task 13
document.write("<br/><br/>Task 13 <br/><br/>")
var snack = "Chocolate",
    ageCurrent = 29,
    ageMax = 65,
    perDay = 1,
    ageRemain = ageMax - ageCurrent,
    totalSnack = (perDay * 365) * ageRemain

document.write("Favourite Snack: " + snack + "<br/>Current Age: " + ageCurrent + "<br/>Maximum Expected Age: " + ageMax + "<br/> Amount of snacks / day: " + perDay + "<br/>You will need " + totalSnack + " of " + snack + " to last you until the ripe old age of " + ageMax)