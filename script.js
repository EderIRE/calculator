var calculation = document.querySelector("input#sum");
var result = document.querySelector("p");
var tn1 = document.querySelector("input#txtn1");
var tn2 = document.querySelector("input#txtn2");

function sumClick (){
	var n1 = Number(tn1.value);
	var n2 = Number(tn2.value);
	var res = n1 + n2;
	    
	result.innerHTML = "The result is: " + res;
}


function sumPress () {
	 if (event.keyCode === 13){
	 	sumClick()
	 }
}


function sum () {
	sumClick();
}

calculation.addEventListener("click", sum);
tn2.addEventListener("keypress", sumPress);

// ==Subtraction========================================

var subtraction = document.querySelector("input#sub");
var result2 = document.querySelector("p#p2");
var tn3 = document.querySelector("input#txtn3");
var tn4 = document.querySelector("input#txtn4");


function subClick () {
	var n3 = Number(tn3.value);
	var n4 = Number(tn4.value);
	var res = n3 - n4;
	    
	result2.innerHTML = "The result is: " + res;

}

function subPress () {
	 if (event.keyCode === 13){
	 	subClick()
	 }
}

function sub () {
	subClick();
}

subtraction.addEventListener("click", sub);
tn4.addEventListener("keypress", subPress);

// ==Division================================

var division = document.querySelector("input#div");
var result3 = document.querySelector("p#p3");
var tn5 = document.querySelector("input#txtn5");
var tn6 = document.querySelector("input#txtn6");


function divClick () {
	var n5 = Number(tn5.value);
	var n6 = Number(tn6.value);
	var res = n5 / n6;
	    
	result3.innerHTML = "The result is: " + res;

}

function divPress () {
	 if (event.keyCode === 13){
	 	divClick()
	 }
}

function div () {
	subClick();
}

division.addEventListener("click", div);
tn6.addEventListener("keypress", divPress);

// ==Multiplication================================

var multiplication = document.querySelector("input#mult");
var result4 = document.querySelector("p#p4");
var tn7 = document.querySelector("input#txtn7");
var tn8 = document.querySelector("input#txtn8");


function multClick () {
	var n7 = Number(tn7.value);
	var n8 = Number(tn8.value);
	var res = n7 * n8;
	    
	result4.innerHTML = "The result is: " + res;

}

function multPress () {
	 if (event.keyCode === 13){
	 	multClick()
	 }
}

function mult () {
	multClick();
}

multiplication.addEventListener("click", mult);
tn8.addEventListener("keypress", multPress);




