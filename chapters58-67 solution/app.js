// Task-1a

var a = document.getElementById("main-content")
// console.log(a)

// Task-2a

var b = a.childNodes
// console.log(b)


// Task-3a

// Task-4a

document.getElementById("first-name").value = "Shehroze";


// Task-5a
document.getElementById("last-name").value = "Asghar";


document.getElementById("email").value = "shehroze74@hotmail.com";


//Task-1b

var c = document.getElementById("form-content")
var d = c.nodeType
var nodetypee = document.getElementById("nodeType1")
nodetypee.innerHTML = "Node type of form-content element is "+d

//Task-2b
var e = document.getElementById("last-name")
var f = e.nodeType
var nodetypee = document.getElementById("nodeType2")
nodetypee.innerHTML = "Node type of last-name element is "+ f

//Task-3b

//Task-4b


var g = a.firstElementChild
// console.log(g)
var h = a.lastElementChild
// console.log(h)


//Task-5b

var i = document.getElementById("lastName")
var j = i.nextElementSibling
// console.log(j)
var k = i.previousElementSibling
// console.log(k)

//Task-5b


var l = document.getElementById("email")
var m = l.parentNode
console.log(m)
var n = l.nodeType
console.log(n)
