var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
// var password = document.getElementById("password").value;
if ( username == "210018001734" ){
// alert ("AAJA MERE LAND NAWAB ❤️");
window.location = "result.html"; // Redirecting to other page.
return false;
}
else{
alert("enter correct roll no");// Decrementing by one.
// alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}

// 2103330100019