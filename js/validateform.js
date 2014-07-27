function checkform() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var comments = document.getElementById("comments").value;
	hideErrors();
	var validate = true;

	if(name === "" || name === null) {
		
		document.getElementById("nameError").style.display="inline-block";
		validate = false;
	}
	if(email === "" || email === null) {
		document.getElementById("emailError").style.display="inline";
		validate = false;
	}
	if(comments === "" || comments === null) {
		document.getElementById("commentsError").style.display="inline";
		validate = false;
	}
	return validate;
	}

function hideErrors() {
	document.getElementById("nameError").style.display="none";
	document.getElementById("emailError").style.display="none";
	document.getElementById("commentsError").style.display="none";
}
