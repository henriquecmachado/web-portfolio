const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const messageArea = document.getElementById("message-area");

// [X] - Should be able to check if an e-mail was inserted
// [X] - Should be able to check if the password was inserted
// [X] - Should be able to check if the password is equal 'password'



function loginValidation() {
  let messages = [];

  if (emailInput.value === "" || emailInput.value == null) {
    messages.push("Please, insert an e-mail");
  }

  if (emailInput.value <= 0) {
    messageArea.innerText = messages.join(",");
    console.log(messages)
  }

  if(passwordInput.value === '' || passwordInput.null) {
      messages.push('Please, insert an password'); 
  }

  if (passwordInput.value <= 0 || passwordInput.value == 'password') {
      messageArea.innerText = messages.join(','); 
      console.log(messages)
  } 

  if (passwordInput.value >= 8) {
      messageArea.innerText = messages.join(',')
  }
}
