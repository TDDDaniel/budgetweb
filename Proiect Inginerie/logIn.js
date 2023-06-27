//id-uri
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const logInButton = document.getElementById("logInButton");

logInButton.addEventListener("click", function () {
  let emailValue = emailInput.value;
  let passwordValue = passwordInput.value;
  /*if (emailInput.value == emailValue && passwordInput.value == passwordValue) {
    window.location = "statistic.html";
  }*/
  if (emailInput.value == "" && passwordInput.value == "") {
    alert("Introdu emailul si parola");
  } else if (emailInput.value != "" && passwordInput.value == "") {
    alert("Introdu parola");
  } else if (emailInput.value == "" && passwordInput.value != "") {
    alert("Introdu emailul");
  } else if (emailInput.value != "" && passwordInput.value != "") {
    window.location = "statistic.html";
  }
});
