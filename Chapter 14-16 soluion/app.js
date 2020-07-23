// //Task 1
// var studName = []

// //Task 2


// //Task 3
// var studName = ['Ali', 'Ahmed', 'Salman']

// //Task 4

// var num = [1, 2, 3, 4]

// //Task 5

// var status = [True, False]

// //Task 6

// var mixed = [1, "one", True]

//Task 7

// var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
// document.write("<br>Qualifications: <br>")
// for (var i = 1; i <= qualification.length; i++) {
//     document.write(qualification[i] + "<br>")
// }


//Task 8

// var studName = ["Shehroze", "Ali", "Imam"]
// var studNumb = [350, 400, 450]
// var totall = 500
// for (var i = 0; i < studName.length; i++) {
//     document.write("<br>Score of " + studName[i] +
//         " is " + studNumb[i] + " . Percentage: " + ((studNumb[i] / totall) * 100 + "%"))
// }


//Task 09

// var color = ["yellow", "red", "green", "white", "black", "purple"]
// document.write("<br>Color list: ")
// for (var i = 0; i < color.length; i++) {
//     document.write(color[i])
//     if (i < (color.length - 1)) {
//         document.write(", ")
//     }
// }
// //Task 09-a
// var newColor = prompt("What color you want to add in the beginning")
// color.unshift(newColor)
// document.write("<br>Color list with new value in the beginning: ")

// for (var i = 0; i < color.length; i++) {
//     document.write(color[i])
//     if (i < (color.length - 1)) {
//         document.write(", ")
//     }
// }
// //Task 09-b
// var newColor = prompt("What color you want to add in the end")
// color.push(newColor)
// document.write("<br><br>Color list with new value in the end: ")

// for (var i = 0; i < color.length; i++) {
//     document.write(color[i])
//     if (i < (color.length - 1)) {
//         document.write(", ")
//     }
// }

// //Task 09-c
// color.unshift("pink", "grey")
// document.write("<br><br>Color list with 2 new values in the beginning: ")

// for (var i = 0; i < color.length; i++) {
//     document.write(color[i])
//     if (i < (color.length - 1)) {
//         document.write(", ")
//     }
// }

// //Task 09-d
// color.shift()
// document.write("<br><br>Color list after 1st color delelted: ")

// for (var i = 0; i < color.length; i++) {
//     document.write(color[i])
//     if (i < (color.length - 1)) {
//         document.write(", ")
//     }
// }

// //Task 09-e
// color.pop()
// document.write("<br><br>Color list after last color delelted: ")

// for (var i = 0; i < color.length; i++) {
//     document.write(color[i])
//     if (i < (color.length - 1)) {
//         document.write(", ")
//     }
// }


// //Task 09-e
// var indexx = prompt("Provide the index where you want new color")
// var colory = prompt("Provide the color where you want to add in list")
// color.splice(indexx, 0, colory)
// document.write("<br><br>Color list after addition of a new color at index " + indexx + " : ")

// for (var i = 0; i < color.length; i++) {
//     document.write(color[i])
//     if (i < (color.length - 1)) {
//         document.write(", ")
//     }
// }

// //Task 09-f
// var indexx = prompt("Provide the index from where you want to delete color")
// var colory = prompt("Provide the number of colors you want to delete")
// color.splice(indexx, colory)
// document.write("<br><br>Color list after deletion of color at index " + indexx + " : ")

// for (var i = 0; i < color.length; i++) {
//     document.write(color[i])
//     if (i < (color.length - 1)) {
//         document.write(", ")
//     }
// }

//Task 10

// var studScore = [320, 500, 400, 200]
// document.write("<br>Scores of Students: ")
// for (var i = 0; i < studScore.length; i++) {
//     document.write(studScore[i] + ", ")
// }
// document.write("<br>")
// studScore = studScore.sort()
// document.write("<br>Scores of Students: ")
// for (var i = 0; i < studScore.length; i++) {
//     document.write(studScore[i] + ", ")
// }



//Task 11

// var cities = ["quetta", "karachi", "lahore", "islamabad", "bahawalpur", "hydrabad", "Jamshoro"]
// document.write("<br>Cities listed: ")
// for (var i = 0; i < cities.length; i++) {
//     document.write(cities[i] + ", ")
// }
// document.write("<br>")
// var citySel = []
// for (var i = 0; i < 3; i++) {
//     citySel.push(cities[i])
// }
// document.write("<br>Selected cities listed: ")
// for (var i = 0; i < citySel.length; i++) {
//     document.write(citySel[i] + ", ")
// }
// document.write("<br>")

//Task 12

// var arr = ["This", "is", "my", "cat"]
// document.write("Array: ")
// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + ",")
// }
// document.write("<br>String: ")
//     // var strng = arr.join()
// document.write(arr.join(" ") + "<br>")

//Task 13
// document.write("<br><br>Task 13<br><br>")
// var components = ["Keyboard", "Mouse", "Printer", "Monitor"]
// document.write("Devices: ")
// for (var i = 0; i < components.length; i++) {
//     document.write(components[i])
//     if (i < (components.length - 1)) {
//         document.write(",")
//     }
// }

// for (var i = 0; i < components.length; i++) {
//     document.write("<br>Out:<br>" + components[i])
// }

//Task 14
// document.write("<br><br>Task 14<br><br>")
// var components = ["Keyboard", "Mouse", "Printer", "Monitor"]
// document.write("Devices: ")
// for (var i = 0; i < components.length; i++) {
//     document.write(components[i])
//     if (i < (components.length - 1)) {
//         document.write(",")
//     }
// }
// var reversee = components.reverse()
//     // for (var i = -1; i >= -(components.length); i = i - 1) 

// for (var i = 0; i < reversee.length; i++) {
//     document.write("<br>Out:<br>" + components[i])
// }

//Task 15

var models = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
document.write("List of cell phone manufacturers: <br>")
for (var i = 0; i < models.length; i++) {
    document.write(models[i] + "<br>")
}