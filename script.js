function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirm = document.getElementById("confirm").value;

  if (name === "") {
    alert("Name required");
    return false;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Invalid email");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be 6 characters");
    return false;
  }

  if (password !== confirm) {
    alert("Passwords do not match");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
