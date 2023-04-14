function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "") {
      alert("Please enter a username.");
      return false;
  }
  if (password == "") {
      alert("Please enter a password.");
      return false;
  }
}/*
function validateForm() {
  var name = document.getElementById("Username").value;
  var tel = document.getElementById("tel").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("Password").value;
  if (username == "") {
      alert("Please enter a Username.");
      return false;
  }
  if (tel == "") {
    alert("Please enter a Phone no.");
    return false;
}
  if (email == "") {
      alert("Please enter a Email.");
      return false;
  }
  if (password == "") {
      alert("Please enter a password.");
      return false;
  }
}*/

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});