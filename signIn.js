document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;
    const agree = e.target.agree.checked;

    if (!agree) {
      alert("You must agree to the processing of personal data");
      return;
    }

    if (name && phone && password && agree) {
      alert("Registration Successful!");
      // Here you can add code to handle the registration process
    } else {
      alert("Please fill in all fields");
    }
  });
