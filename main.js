document.getElementById('login-btn').addEventListener("click", function (e) {
  e.preventDefault()
  const mobileNumber = 12345678910;
  const password = 1234;

  const inputMobileNumber = document.getElementById("mobile-number").value
  const convertMobileNumber = parseInt(inputMobileNumber)
  const inputPassword = document.getElementById('pin-number').value
  const convertPassword = parseInt(inputPassword)

  if (mobileNumber === convertMobileNumber && password === convertPassword) {
    window.location.href = "./home.html";
    return;
  }else {
    alert("Invalid Number or Password");
    return;
  }
})


