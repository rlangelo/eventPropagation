document.getElementById("studButton").addEventListener("click", displayStudent);
document.getElementById("staffBut").addEventListener("click", displayStaff);
var studOrStaff = -1;
document.getElementById("Cancel").addEventListener("click", cancelButton);
document.getElementById("inner").addEventListener("click", Hobby, false);
document.getElementById("middle").addEventListener("click", Age, false);
document.getElementById("outer").addEventListener("click", Department, false);
document.getElementById("inner2").addEventListener("click", sHobby, true);
document.getElementById("middle2").addEventListener("click", sAge, true);
document.getElementById("outer2").addEventListener("click", sDepartment, true);
document.getElementById("staffBut").addEventListener("mouseover", colorChange1);
document.getElementById("studButton").addEventListener("mouseover", colorChange2);
document.getElementById("staffBut").addEventListener("mouseout", colorRestore1);
document.getElementById("studButton").addEventListener("mouseout", colorRestore2);


function colorRestore1() {
	document.getElementById("staffBut").style.background= '';
}

function colorRestore2() {
	document.getElementById("studButton").style.background = '';
}

function colorChange1() {
	document.getElementById("staffBut").style.background='lightgreen';
}

function colorChange2() {
	document.getElementById("studButton").style.background = 'lightgreen';
}

function displayStudent() {
	document.getElementById("outer").style.visibility = "visible";
	document.getElementById("staffBut").disabled = true;
	studOrStaff = 0;
}

function displayStaff() {
	document.getElementById("outer2").style.visibility = "visible";
	document.getElementById("studButton").disabled = true;
	studOrStaff = 1;
}

function cancelButton() {
	document.getElementById("outer").style.visibility = "hidden";
	document.getElementById("outer2").style.visibility = "hidden";
	if (studOrStaff == 0) {
		document.getElementById("staffBut").disabled = false;
	}
	else {
		document.getElementById("studButton").disabled = false;
	}
	studOrStaff = -1;
}

function Hobby() {
	alert("inner");
}

function Age() {
	alert("middle");
}

function Department() {
	alert("outer");
}

function sHobby() {
	alert("inner");
}

function sAge() {
	alert("middle");
}

function sDepartment() {
	alert("outer");
}
