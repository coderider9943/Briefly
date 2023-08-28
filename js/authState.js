let current_user = ""
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    console.log("User is logged in");
    // You can access the user's information using the `user` object
    console.log("User ID: " + user.uid);
    console.log("User email: " + user.email);
    current_user = user.email;
    document.getElementById("user_name").textContent = current_user;
    document.getElementById("user_mail_div").style.display = "block";
    document.getElementById("log_in_div").style.display = "none";
  } else {
    // No user is signed in.
    document.getElementById("user_mail_div").style.display = "none";
    document.getElementById("log_in_div").style.display = "block";
  }
});