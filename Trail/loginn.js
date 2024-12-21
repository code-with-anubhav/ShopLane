document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  if (email && password) {
    alert("Login Succesful!");
    //Here you can add code to handel the login process
  } else {
    alert("Please fill in all field");
  }
});
