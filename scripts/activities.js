// Redirect to index.html if not logged in
if (!localStorage.getItem("Login")) {
    window.location.assign("index.html");
}

// Logout function
function logout() {
    localStorage.removeItem("Login");
    window.location.assign("login.html");
}

// Function to delete the user profile
function DeleteProfile() {
    const TellConfirm = "Are you sure you want to delete your account?";
    if (confirm(TellConfirm)) {
        const TellPassword = prompt("Enter your password");
        if (TellPassword !== localStorage.getItem("Password")) {
            alert("Password is incorrect!");
        } else {
            localStorage.clear();
            alert("Your account has been successfully deleted.");
            window.location.assign("index.html");
        }
    } else {
        alert("Action cancelled.");
    }
}
