function deleteRow0() { 
    document.getElementById("row0").remove(); 
} 
function deleteRow1() { 
    document.getElementById("row1").remove(); 
} 
function deleteRow2() { 
    document.getElementById("row2").remove(); 
} 
function deleteRow3() { 
    document.getElementById("row3").remove(); 
} 

function changeImg()
{
    document.getElementById("imagee").src = "jerry.png"
}

function reverseImg()
{
    document.getElementById("imagee").src = "tom.png"
}

var add = 0
function Addition()
{

    var counter = document.getElementById("counter")
    add++
    counter.innerHTML = add
}

function Deletion()
{

    var counter = document.getElementById("counter")
    add--
    counter.innerHTML = add
}