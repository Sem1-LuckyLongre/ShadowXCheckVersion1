const IdInput = document.getElementById("name");
const PassInput = document.getElementById("password");

// Redirect to registration if no registration data is found
if (!localStorage.getItem("Registration")) {
    window.location.assign("register.html");
}

function Login() {
    // Check if ID matches
    if (IdInput.value === localStorage.getItem("ID")) {
        IdInput.classList.remove('error');

        // Check if password matches
        if (PassInput.value === localStorage.getItem("Password")) {
            localStorage.setItem("Login", true);
            PassInput.classList.remove('error');

            document.getElementById("loader").style.display = 'block';
            setTimeout(() => {
                alert("You are Logged In Successfully");
                window.location.assign("profile.html");
            }, 1400);
        } else {
            PassInput.classList.add('error'); // Mark password input as error
        }
    } else {
        IdInput.classList.add('error'); // Mark ID input as error
    }
}
