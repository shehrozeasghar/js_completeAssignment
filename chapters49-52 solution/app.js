// function displaydata() {
//     DispWin = window.open('', 'NewWin', 'toolbar=no,status=no,width=300,height=200');
//     message = "<ul><li><b>NAME: </b>" + document.form1.namee.value;
//     message += "<li><b>ADDRESS: </b>" + document.form1.address.value;
//     message += "<li><b>PHONE: </b>" + document.form1.cell.value + "</ul>";
//     DispWin.document.write(message);
// }

function displaydata()
{
    message = "<ul><li><b>NAME: </b>" + document.form1.namee.value;
    message += "<li><b>ADDRESS: </b>" + document.form1.address.value;
    message += "<li><b>PHONE: </b>" + document.form1.cell.value + "</ul>";
    document.getElementById("getName").innerHTML = message
    // document.getElementById("getAdd").innerHTML = document.form1.address.value
    // document.getElementById("getCell").innerHTML = document.form1.cell.value
}


function readMore()
{
    var remain = "Realme C3 (3GB RAM, 32GB) <br> Motorola Moto G8 Power Lite <br> OnePlus 5 (6GB RAM, 64GB) <br> Oppo A5 2020 (3GB RAM, 64GB) <br> Apple iPhone 6s (16GB) <br> Tecno Spark Power <br> Asus ZenFone Max Pro M1 (3GB RAM, 32GB) <br> Vivo Y90 <br> Samsung Galaxy M11 "
    var listy = document.getElementById("listt")
    listy.innerHTML = remain
}

function deleteRow(no) { 
    document.getElementById("row"+no).remove(); 
} 

function editRow(no)
{
 document.getElementById("editRow"+no).style.display="none";
 document.getElementById("saveRow"+no).style.display="block";

 var name=document.getElementById("nameRow"+no);
 var classs=document.getElementById("classRow"+no);
	
 var name_data=name.innerHTML;
 var class_data=classs.innerHTML;

	
 name.innerHTML="<input type='text' id='nameInput"+no+"' value='"+name_data+"'>";
 classs.innerHTML="<input type='text' id='classInput"+no+"' value='"+class_data+"'>";
}


function saveRow(no)
{
    document.getElementById("editRow"+no).style.display="block";
    document.getElementById("saveRow"+no).style.display="none";

    var name_val=document.getElementById("nameInput"+no).value;
    var class_val=document.getElementById("classInput"+no).value;

    document.getElementById("nameRow"+no).innerHTML=name_val;
    document.getElementById("classRow"+no).innerHTML=class_val;


}