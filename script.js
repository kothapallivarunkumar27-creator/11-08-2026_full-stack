const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

// Show/Hide Password
toggle.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        toggle.textContent = "🙈";
    } else {
        password.type = "password";
        toggle.textContent = "👁";
    }

});

// Login Validation
document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault();

    let username = document.getElementById("username").value;
    let pass = password.value;

    if(username === "2500040042" && pass === "123"){
        alert("✅ Login Successful");
    }
    else{
        alert("❌ Invalid Username or Password");
    }

});