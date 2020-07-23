// Task 1

document.write("<br><br> Task 1<br><br>")
var arr = []

// Task 2

document.write("<br><br> Task 2<br><br>")
var multidim = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]

// Task 3

// document.write("<br><br> Task 3<br><br>")

// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>")
// }

// Task 3

// document.write("<br><br> Task 3<br><br>")
// var num = prompt("Enter a number to show its multiplication table")
// var leng = prompt("Enter length of multiplication table")
// document.write("Multiplication table of " + num + "<br>" + "Length <br>")
// for (var i = 1; i <= leng; i++) {
//     document.write(num + " * " + i + " = " + (num * i) + "<br>")
// }

// Task 4

// document.write("<br><br> Task 4<br><br>")
// fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>")
// }
// document.write("<br><br>")
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>")
// }


// Task 5

// document.write("<br><br> Task 5<br><br>")
// document.write("Counting: <br>")
// for (var i = 1; i <= 15; i++) {
//     document.write(i)
//     if (i < 15) {
//         document.write(", ")
//     }
// }

// document.write("<br><br>Reverse Counting: <br>")
// for (var i = 10; i >= 1; i--) {
//     document.write(i)
//     if (i > 1) {
//         document.write(", ")
//     }
// }

// document.write("<br><br>Even: <br>")
// for (var i = 0; i <= 20; i = i + 2) {
//     document.write(i)
//     if (i < 20) {
//         document.write(", ")
//     }
// }

// document.write("<br><br>Odd: <br>")
// for (var i = 1; i <= 20; i = i + 2) {
//     document.write(i)
//     if (i < 19) {
//         document.write(", ")
//     }
// }

// document.write("<br><br>Series: <br>")
// for (var i = 2; i <= 20; i = i + 2) {
//     document.write(i + "k")
//     if (i < 19) {
//         document.write(", ")
//     }
// }


// Task 7

// document.write("<br><br> Task 7<br><br>")
// var items = ["cake", "apple pie", "cookie", "chips", "patties"]
//     // for (var i = 0; i < items.length; i++) {
//     //     document.write(items[i] + "<br>")
//     // }
// var order = prompt("wlecome to ABC bakery. What do you want to order sir/madam")
// for (var i = 0; i < items.length; i++) {
//     if (order === items[i]) {
//         document.write(order + " is available at index " + i + " in our bakery<br>")
//         break
//     } else {
//         document.write("We are sorry. " + order + " is not available in our bakery<br>")
//         break

//     }
// }


// Task 8

// document.write("<br><br> Task 8<br><br>")
// var digitss = [24, 53, 78, 91, 12]
// document.write("Array items: ")
// for (var i = 0; i < digitss.length; i++) {
//     document.write(digitss[i])
//     if (i < (digitss.length - 1)) {
//         document.write(", ")
//     }
// }

// var large = digitss[0]
// for (var i = 0; i < digitss.length; i++) {
//     if (large < digitss[i]) {
//         large = digitss[i]
//     }
// }

// document.write("<br>The largest  number is " + large + "<br>")


// Task 9

// document.write("<br><br> Task 9<br><br>")
// var digitss = [24, 53, 78, 91, 12]
// document.write("Array items: ")
// for (var i = 0; i < digitss.length; i++) {
//     document.write(digitss[i])
//     if (i < (digitss.length - 1)) {
//         document.write(", ")
//     }
// }

// var smalle = digitss[0]
// for (var i = 0; i < digitss.length; i++) {
//     if (smalle > digitss[i]) {
//         smalle = digitss[i]
//     }
// }

// document.write("<br>The smallest  number is " + smalle + "<br>")

// Task 10

document.write("<br><br> Task 10<br><br>")

var muliples = 5
for (var i = 1; i <= 20; i++) {
    document.write(muliples * i)
    if (i != 20) {
        document.write(", ")

    }
}