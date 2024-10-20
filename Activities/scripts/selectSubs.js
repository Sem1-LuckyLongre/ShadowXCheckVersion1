if (!localStorage.getItem("Login")) {
    window.location.assign("/")
}
if (localStorage.getItem("SubjectSubmit") ){
    window.location.assign("/")
}

let VAC_Sub = document.getElementById("vac")
let SEC_Sub = document.getElementById("sec")
let GE_Sub = document.getElementById("ge")
let Loader = document.getElementById("loader")



function checkValidSub() {
    if (VAC_Sub.value == "Select") {
        alert("Please Select VAC Subject!")
        return false
    }else{
        if (SEC_Sub.value == "Select") {
            alert("Please Select SEC Subject!")
            return false
        }else{
            if (GE_Sub.value == "Select") {
                alert("Please Select GE Subject!")
                return false
            }
        }
    }
    return true
}

function SubmitSubs() {
    if (checkValidSub()) {
        Loader.style.display = "block"
        localStorage.setItem("VAC", VAC_Sub.value);
        localStorage.setItem("SEC", SEC_Sub.value);
        localStorage.setItem("GE", GE_Sub.value);
        localStorage.setItem("SubjectSubmit", true)
        setTimeout(sub,2000)
        function sub() {
            alert("Your Subjects Are Submitted Successfully!")           
           window.location.assign("assignment.html") 
        }        
    }
    
}

function logout() {
    localStorage.removeItem("Login")
    window.location.assign("/")
}

function DeleteProfile() {
   const TellConfirm = "Are Your Sure About Delete Account"
   if (confirm(TellConfirm) == true) {
       const TellPassword = prompt("Enter Your Password")
       if (TellPassword != localStorage.getItem("Password")) {
           alert("Password is Wrong!.")
       }
       else{
           localStorage.clear()
           alert("Your Account Is Deleted Successful")
           window.location.assign("index.html") 
       }
   }
   else{
       alert("Ok... ")
   }
}