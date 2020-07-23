// Task 1

// document.write("<br>Task-1<br><br>")

// function power(a,b)
// {
//     return a**b
// }


// var a = prompt("Enter base value for power function")
// var b = prompt("Enter exponent value for power function")


// document.write("The result of power function is "+power(a,b))


// Task 2

// document.write("<br>Task-2<br><br>")

// function leapYear(year)
// {
//   return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
// }


// var year = prompt("Enter year to check leap year..")

// if (leapYear(year)==true)
// {
//     document.write(year+" is a leap year<br>")
// }

// else
// {
//     document.write(year+" is a not leap year<br>")
// }

// Task 3

// document.write("<br>Task-3<br><br>")

// function lamdaa(a,b,c)
// {
//     var result = (a+b+c)/2
//     return result
// }

// function areaTriangle(a,b,c)
// {
//     var result = lamdaa(a,b,c)
//     var total = result*((result-a)*(result-b)*(result-c))
//     return total
// }

// var a = Number(prompt("Enter length of 1st side of triangle"))
// var b = Number(prompt("Enter length of 2nd side of triangle"))
// var c = Number(prompt("Enter length of 3rd side of triangle"))


// document.write("The area of triangle with side lengths "+a+" , "+b+" and "+c+" is "+areaTriangle(a,b,c))

// Task 4

// document.write("<br>Task-4<br><br>")


// function average(a,b,c)
// {
//     return ((a+b+c)/3)
// }

// function percentagee(a,b,c)
// {
//     return ((a+b+c)/300)*100
// }

// function resultt(a,b,c)
// {
//     document.write("First Subject: "+a+"<br>Second Subject: "+b+"<br>Third Subject: "+c+"<br>Average: "+average(a,b,c)+"<br>Percentage: "+percentagee(a,b,c)+"%")
// }
// var a = Number(prompt("Enter marks in first subject"))
// var b = Number(prompt("Enter marks in second subject"))
// var c = Number(prompt("Enter marks in third subject"))
// resultt(a,b,c)

//Task 5

// document.write("<br>Task-5<br><br>")

// function searchOf(a,b)
// {
//     var count = 0
//     for (var i = 0 ; i<a.length ; i++)
//     {
//         if(a[i]==b)
//         {
//             count = i
//             // return count
//             break
//         }
//         // else{
//         //     count = -1
//         // }
//     }
//     return count  
// }

// var a = prompt("Enter the string").toLowerCase()
// var b = prompt("Enter the alphabet").toLowerCase()

// var final = searchOf(a,b)
// if (final == 0)
// {
//     document.write(b+" is not part of string<br>")
// }

// else{
//     document.write(b+" is at index "+final+" in string<br>")
// }


// Task 6

// document.write("<br>Task-6<br><br>")

// function vowelCheck()
// {
//     var b = []
//     var a = prompt("Enter sentence for vowel deletion").toLowerCase()
//     if (a.length>25)
//     {
//         alert("The sentence has more than 25 characters")
//     }
//     else 
//     {

//         for (var i = 0; i<a.length; i++)
//         {
//             if(a[i]!='a' && a[i]!='e' && a[i]!='i' && a[i]!='o' && a[i]!='u')
//             {
//                 b=b.concat(a[i])
//             }
//         }
//     }
//     b=b.join("")
//     document.write("The modified string is as follows<br>"+b)

// }


// vowelCheck()


// Task 7

document.write("<br>Task-7<br><br>")

function vowelLook(a)
{
    switch (a) 
    {
        case 'a':
        case 'e': 
        case 'i':
        case 'o':
        case 'u': 
            return true  
            break;
    
        default:
            return false
            break;
    }
}



function vowelPair(a)
{
    count = 0
    for (i = 0 ; i < a.length ; i++)
    {
        if(vowelLook(a[i]) && vowelLook(a[i+1]))
        {
            count++
        }
    }
    return count
}

var a = prompt("Enter the string for vowel pair checking").toLowerCase()
document.write("The number of occurances of vowel pair is "+ vowelPair(a))



// Task 8

// document.write("<br>Task-8<br><br>")

// function km2meters(a)
// {
//     var dist = a*1000 //since 1km = 1000m
//     document.write("<br>The distance in meter is "+dist+" meters <br>")
// }

// function km2feet(a)
// {
//     var dist = a*3280.84 //1km = 3280.84feet
//     document.write("<br>The distance in feet is "+dist+" feets <br>")
// }

// //since 1 km=39370.1inches

// function km2inches(a)
// {
//     var dist = a*39370.1 //since 1 km=39370.1inches
//     document.write("<br>The distance in inches is "+dist+" inches <br>")
// }

// function km2cms(a)
// {
//     var dist = a*100000 //since 1 km= 100000cm
//     document.write("<br>The distance in centimeters is "+dist+" centimeters <br>")
// }


// var dist = Number(prompt("Enter distance in km...."))
// document.write("<br>The distance in kilometer is "+dist+" km <br>")
// km2meters(dist)
// km2feet(dist)
// km2inches(dist)
// km2cms(dist)

// Task 9

// document.write("<br>Task-9<br><br>")

// var a =  Number(prompt("Enter working hours..."))
// overTime(a)

// function overTime(a)
// {
//     if(a<=40)
//     {
//         alert("No overtime available...")
//         // break
//     }
//     else
//     {
//         var b = a-40
//         var c = b*12
//         document.write("The overtime is Rs "+c+"<br>")
//     }
// }



// Task 10

// document.write("<br>Task-10<br><br>")

// function breakCurrency(a)
// {
//     var hundreds = Math.floor(a/100)
//     // document.write(hundreds+"<br>")
//     var fiftyy = Math.floor((a%100)/50)
//     // document.write(fiftyy+"<br>")
//     var tens = Math.floor(((a%100)%50)/10)
//     // document.write(tens+"<br>")

//     document.write("You will have "+hundreds+" hundred notes, "+fiftyy+" fifty notes "+tens+" ten notes <br>")
// }

// var amount = Number(prompt("Enter amount to be withdrawn..."))
// breakCurrency(amount)