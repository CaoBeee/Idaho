function validateEmail() {
	const email = document.getElementById('email').value
	const emailConfirm = document.getElementById('emailConfirm').value

	if (email !== emailConfirm) {
		alert('Email addresses do not match. Please re-enter your email.')
		return false // Prevent form submission if emails don't match
	}
	return true
}
