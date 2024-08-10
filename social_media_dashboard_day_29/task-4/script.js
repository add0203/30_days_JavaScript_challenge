document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Basic user authentication (for demonstration purposes only)
  if (username && password) {
    sessionStorage.setItem("loggedInUser", username);
    document.getElementById("login-section").style.display = "none";
    document.getElementById("post-form-section").style.display = "block";
    document.getElementById("feed-section").style.display = "block";
  } else {
    alert("Please enter valid credentials.");
  }
});
