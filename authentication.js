function checkdata() {
    var username = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    // Check if blank
    if(username.value == "") {
        alert("Username cannot be blank");
        username.focus();
        return false;
    }
    if(email.value == "") {
        alert("Email cannot be blank");
        email.focus();
        return false;
    }
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value) != true) {
        alert("Email must be valid");
        email.focus();
        return false;
    }
    if(password.value == "") {
        alert("Password cannot be blank");
        password.focus();
        return false;
    }
    // If auth passes
    alert("Sign up successful.")
    return true;
}