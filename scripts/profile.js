// Check if the user is logged in
if (!localStorage.getItem("Login")) {
    window.location.assign("login.html");
}

// DOM Elements
let Name = document.getElementById("name");
let Email = document.getElementById("email");
let Roll = document.getElementById("roll");
let Depart = document.getElementById("depart");
let Course = document.getElementById("course");
let UpdateDiv = document.getElementById("update");
let InputFile = document.getElementById("inputGroupFile04");
let Img = document.getElementById("Img");
let Loader = document.getElementById("loader");

// Load user data from localStorage
Name.innerText = localStorage.getItem("Name");
Email.value = localStorage.getItem("Email");
Roll.value = localStorage.getItem("RollNumber");
Depart.value = localStorage.getItem("Department");
Course.value = localStorage.getItem("Course");

// Logout function
function logout() {
    Loader.style.display = 'block'; // Show loader
    setTimeout(() => {
        localStorage.removeItem("Login");
        Loader.style.display = 'none'; // Hide loader after delay
        window.location.assign("login.html");
    }, 2000); // 2000 ms delay
}

// Function to enable update mode
function update() {
    UpdateDiv.classList.add("updateEnable");
    UpdateDiv.classList.remove("updateBox");
    document.getElementById("blurBox").classList.remove("blurBox");
    document.getElementById("blurBox").classList.add("blurBoxEnable");
}

// Function to disable update mode when blurBox is clicked
document.getElementById("blurBox").onclick = () => {
    UpdateDiv.classList.remove("updateEnable");
    UpdateDiv.classList.add("updateBox");
    document.getElementById("blurBox").classList.add("blurBox");
    document.getElementById("blurBox").classList.remove("blurBoxEnable");
};

// Handle profile image upload
InputFile.addEventListener("change", (event) => {
    const reader = new FileReader();
    reader.addEventListener("load", function() {
        localStorage.setItem("Profile_Img", reader.result);
    });
    reader.readAsDataURL(event.target.files[0]); // Use event.target.files
    setTimeout(UpImg, 1000);

    Loader.style.display = 'block';

    function UpImg() {
            location.reload();
    }
});

// Load profile image from localStorage when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const ProfileImg = localStorage.getItem("Profile_Img");
    if (ProfileImg) {
        Img.setAttribute("src", ProfileImg);
    }
});

// Validation and form input elements
let NameInput = document.getElementById("Uname");
let EmailInput = document.getElementById("Uemail");
let RollInput = document.getElementById("Uroll");
let PrPassInput = document.getElementById("Ppass");
let NwPassInput = document.getElementById("Npass");
let CmPassInput = document.getElementById("Cpass");
let CourseInput = document.getElementById("Ucourse");
let DepartInput = document.getElementById("Udepart");
let IdInput = document.getElementById("Uid");

// Email validation function
const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// Password validation function
const validatePassword = (password) => {
    const minLength = 8; // Minimum length for the password
    const hasUpperCase = /[A-Z]/.test(password); // At least one uppercase letter
    const hasLowerCase = /[a-z]/.test(password); // At least one lowercase letter
    const hasNumbers = /\d/.test(password); // At least one number
    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers;
};

// Input validation check
function UpCheck() {
    if (NameInput.value.length < 5) {
        NameInput.classList.add('error');
        return false;
    } else {
        NameInput.classList.remove('error');
        if (!validateEmail(EmailInput.value)) {
            EmailInput.classList.add('error');
            return false;
        } else {
            EmailInput.classList.remove('error');
            if (RollInput.value.length !== 8) {
                RollInput.classList.add('error');
                return false;
            } else {
                RollInput.classList.remove('error');
                if (DepartInput.value.length < 6) {
                    DepartInput.classList.add('error');
                    return false;
                } else {
                    DepartInput.classList.remove('error');
                    if (CourseInput.value.length < 8) {
                        CourseInput.classList.add('error');
                        return false;
                    } else {
                        CourseInput.classList.remove('error');
                        if (PrPassInput.value !== localStorage.getItem("Password") || PrPassInput.value.length === 0) {
                            PrPassInput.classList.add('error');
                            return false;
                        } else {
                            PrPassInput.classList.remove('error');
                            if (NwPassInput.value.length === 0) {
                                NwPassInput.classList.add("error");
                                return false;
                            } else if (!validatePassword(NwPassInput.value)) {
                                NwPassInput.classList.add("error");
                                alert("New password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.");
                                return false;
                            } else {
                                NwPassInput.classList.remove("error");
                                if (NwPassInput.value !== CmPassInput.value) {
                                    NwPassInput.classList.add("error");
                                    CmPassInput.classList.add("error");
                                    return false;
                                } else {
                                    NwPassInput.classList.remove("error");
                                    CmPassInput.classList.remove("error");
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return true;
}

// Function to update user profile
function updateProfile() {
    if (UpCheck()) {
        localStorage.setItem("Name", NameInput.value);
        localStorage.setItem("RollNumber", RollInput.value);
        localStorage.setItem("Course", CourseInput.value);
        localStorage.setItem("ID", IdInput.value);
        localStorage.setItem("Email", EmailInput.value);
        localStorage.setItem("Password", NwPassInput.value);
        localStorage.setItem("Department", DepartInput.value);

        Loader.style.display = 'block';
        setTimeout(go, 2000);
        
        function go() {
            alert("Your Profile Has Been Successfully Updated");
            location.reload();
        }
    }
}

// Function to delete the user profile
function DeleteProfile() {
    const TellConfirm = "Are You Sure You Want to Delete Your Account?";
    if (confirm(TellConfirm)) {
        const TellPassword = prompt("Enter Your Password");
        if (TellPassword !== localStorage.getItem("Password")) {
            alert("Password is Incorrect!");
        } else {
            Loader.style.display = 'block'; // Show loader
            setTimeout(() => {
                localStorage.clear();
                Loader.style.display = 'none'; // Hide loader after delay
                alert("Your Account Has Been Successfully Deleted");
                window.location.assign("index.html");
            }, 2000); // 2000 ms delay
        }
    }
}
showNewPassword =  document.getElementById('showNewPassword')       
showNewPassword.addEventListener('change', function() {
            const newPasswordInput = document.getElementById('Npass');
            newPasswordInput.type = this.checked ? 'text' : 'password';
        });

        document.getElementById('showConfirmPassword').addEventListener('change', function() {
            const confirmPasswordInput = document.getElementById('Cpass');
            confirmPasswordInput.type = this.checked ? 'text' : 'password';
        });
