const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const form = document.querySelector("#form")




form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs()
});

function checkInputs() {
	const first = firstName.value.trim();
	const last = lastName.value.trim();
	const Email = email.value.trim();
	const Password = password.value.trim();
	
	if(first=== '') {
		const formControl = firstName.parentElement;
		firstName.className = "error";
		const small = formControl.querySelector('small');
		small.innerText= "First name cannot be empty";
		formControl.appendChild(small);
		
	} else {
		const formControl = firstName.parentElement;
		firstName.className = "";
		const small = formControl.querySelector('small');
		small.innerText= "";

	}


	if(last=== '') {
		const formControl = lastName.parentElement;
		lastName.className = "error";
		const small = formControl.querySelector('small');
		small.innerText= "last name cannot be empty";
		formControl.appendChild(small);
		
	} else {
		const formControl = lastName.parentElement;
		lastName.className = "";
		const small = formControl.querySelector('small');
		small.innerText= "";
	}

	if(Email=== '') {
		const formControl = email.parentElement;
		email.className = "error";
		const small = formControl.querySelector('small');
		small.innerText= "email cannot be empty";
		formControl.appendChild(small);
		
	} else {
		const formControl = email.parentElement;
		email.className = "";
		const small = formControl.querySelector('small');
		small.innerText= "";
	}

	if(Password=== '') {
		const formControl = password.parentElement;
		password.className = "error";
		const small = formControl.querySelector('small');
		small.innerText= "password cannot be empty";
		formControl.appendChild(small);
		
	} else {
		const formControl = password.parentElement;
		password.className = "";
		const small = formControl.querySelector('small');
		small.innerText= "";
	}
}

