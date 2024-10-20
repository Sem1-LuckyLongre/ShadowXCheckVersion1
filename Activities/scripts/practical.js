// Redirect to home if not logged in
if (!localStorage.getItem("Login")) {
    window.location.assign("/");
}

// Redirect if subject is not selected
if (!localStorage.getItem("SubjectSubmit")) {
    window.location.assign("selectSub.html");
}

// Setting up options based on localStorage values
let VacOption = document.getElementById("vacDis");
let SecOption = document.getElementById("secDis");
let GeOption = document.getElementById("geDis");

VacOption.innerText = `VAC: ${localStorage.getItem("VAC")}`;
SecOption.innerText = `SEC: ${localStorage.getItem("SEC")}`;
GeOption.innerText = `GE: ${localStorage.getItem("GE")}`;

// Assigning elements for practical details
let AssignSub = document.getElementById("subject");
let AssignDate = document.getElementById("date");
let AssignDeadline = document.getElementById("deadline");
let AssignTopic = document.getElementById("floatingTextarea");

// Function to validate practical inputs
function checkAssign() {
    if (AssignSub.value === "Select") {
        alert("Please select a subject.");
        return false;
    }
    if (!AssignDate.value) {
        alert("Please select a date.");
        return false;
    }
    if (!AssignDeadline.value) {
        alert("Please select a deadline.");
        return false;
    }
    if (!AssignTopic.value) {
        alert("Please enter your topic.");
        return false;
    }
    if (AssignTopic.value.length < 8) {
        alert("Please enter a valid topic (minimum 8 characters).");
        return false;
    }
    return true;
}

// Function to add practical
function AddPractical() {
    if (checkAssign()) {
        let Loader = document.getElementById('loader');
        Loader.style.display = "block";
        setTimeout(adding, 2000); // Simulate a delay for adding the practical

        function adding() {
            const assignment = {
                subject: AssignSub.value,
                topic: AssignTopic.value,
                date: AssignDate.value,
                deadline: AssignDeadline.value
            };

            // Retrieve existing assignments or initialize an empty array
            const assignments = JSON.parse(localStorage.getItem('practicals')) || [];
            assignments.push(assignment); // Add new assignment
            localStorage.setItem('practicals', JSON.stringify(assignments)); // Save to localStorage

            Loader.style.display = "none"; // Hide loader
            window.location.assign("SeePracticals.html"); // Redirect to See Practical page
        }
    }
}

// Logout function
function logout() {
    localStorage.removeItem("Login");
    window.location.assign("/");
}

// Function to delete user profile
function deleteProfile() {
    const tellConfirm = "Are you sure you want to delete your account?";
    if (confirm(tellConfirm)) {
        const tellPassword = prompt("Enter your password");
        if (tellPassword !== localStorage.getItem("Password")) {
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
