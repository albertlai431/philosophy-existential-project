function checkAnswer() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "349865215" && password == "tf697asm")
    location = "accounts/sally.html";
  else if (username == "072659842" && password == "pk420qqq")
    location = "accounts/felicity.html";
  else alert("Incorrect username or password! Please try again.");
  return false;
}
