document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;

  if (username && password) {
    alert("Login Successful!");
    // Here you can add code to handle the login process
  } else {
    alert("Please fill in both fields");
  }
});
