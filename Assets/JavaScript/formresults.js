"use strict";

/*
   Eclipse 2024


   Form Results Pop Up Script
   Author: Carter Staley
   Date:  12/13/20

*/

/* Store the current time and date */
function formfun(){
	var fname=document.getElementById('fname').value;
	var lname=document.getElementById('lname').value;
	var phone=document.getElementById('phone').value;
	var email=document.getElementById('email').value;
	var comments=document.getElementById('comments').value;
	alert("First Name: "+fname+"\n Last Name: "+lname+"\n Phone: "+phone+"\n Email: "+email+"\n Comments: "+comments);
	
}