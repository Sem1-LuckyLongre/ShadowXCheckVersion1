// DOM Elements
const NameInput = document.getElementById("name");
const EmailInput = document.getElementById("email");
const RollInput = document.getElementById("roll");
const PassInput = document.getElementById("password");
const DepartInput = document.getElementById("depart");
const CourseInput = document.getElementById("course");
const IdInput = document.getElementById("ID");
const ErrorText = document.getElementById("passwordHelpInline");

// Email validation regex
const validateEmail = (email) => {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailPattern.test(email);
};

// Redirect if already registered
if (localStorage.getItem("Registration")) {
    window.location.assign("index.html");
}

// Form validation
const check = () => {
    let isValid = true;

    if (NameInput.value.length < 5) {
        NameInput.classList.add('error');
        isValid = false;
    } else {
        NameInput.classList.remove('error');
    }

    if (!validateEmail(EmailInput.value)) {
        EmailInput.classList.add('error');
        isValid = false;
    } else {
        EmailInput.classList.remove('error');
    }

    if (RollInput.value.length !== 8) {
        RollInput.classList.add('error');
        isValid = false;
    } else {
        RollInput.classList.remove('error');
    }

    if (DepartInput.value.length < 6) {
        DepartInput.classList.add('error');
        isValid = false;
    } else {
        DepartInput.classList.remove('error');
    }

    if (CourseInput.value.length < 8) {
        CourseInput.classList.add('error');
        isValid = false;
    } else {
        CourseInput.classList.remove('error');
    }
    if (IdInput.value.length < 8 ) {
        IdInput.classList.add('error');
        isValid = false;
    } else {
        IdInput.classList.remove('error');
    }

    if (PassInput.value.length < 8 || PassInput.value.length > 20) {
        PassInput.classList.add('error');
        ErrorText.classList.add("text-warning");
        isValid = false;
    } else {
        PassInput.classList.remove('error');
        ErrorText.classList.remove("text-warning");
    }

    return isValid;
};

// Submit function
const Submit = () => {
    if (check()) {
        // Store data in local storage
        localStorage.setItem("Name", NameInput.value);
        localStorage.setItem("RollNumber", RollInput.value);
        localStorage.setItem("Department", DepartInput.value);
        localStorage.setItem("Course", CourseInput.value);
        localStorage.setItem("ID", IdInput.value);
        localStorage.setItem("Email", EmailInput.value);
        localStorage.setItem("Password", PassInput.value);
        localStorage.setItem("Registration", true);

        // Show loader and alert
        document.getElementById("loader").style.display = "block";

        setTimeout(() => {
            alert("Your Account Has been Created Successfully");
            window.location.assign("login.html");
        }, 2000);
    }
};
