let isTrimRequired = false;

function nameValidation() {
  const nameInput = document.getElementById("Name");
  const nameError = document.getElementById("nameError");
  const name = nameInput.value.trim();
  if (isTrimRequired) {
    nameInput.value = name;
  }
  if (name === "") {
    nameError.textContent = "Name cannot be empty";
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
}

const nameInputField = document.getElementById("Name");
nameInputField.addEventListener("input", nameValidation);

function messageValidation() {
  const messageInput = document.getElementById("Message");
  const messageError = document.getElementById("messageError");
  const message = messageInput.value.trim();
  if (isTrimRequired) {
    messageInput.value = message;
  }
  if (message < 10) {
    messageError.textContent = "Please give valid message";
    return false;
  } else {
    messageError.textContent = "";
    return true;
  }
}

const messageInputField = document.getElementById("Message");
messageInputField.addEventListener("input", messageValidation);

function phoneValidation() {
  const phoneInput = document.getElementById("PhoneNumber");
  phoneInput.value = phoneInput.value.trim();
  const phoneError = document.getElementById("phoneError");

  function validatePhoneNumber(phoneNumber) {
    const phoneregex = /^\d{10,}$/;
    return phoneregex.test(phoneNumber);
  }
  if (!validatePhoneNumber(phoneInput.value)) {
    phoneError.textContent = "Please give valid phone number";
    return false;
  } else {
    phoneError.textContent = "";
    return true;
  }
}
const phoneInputField = document.getElementById("PhoneNumber");
phoneInputField.addEventListener("input", phoneValidation);

function emailValidation() {
  const emailInput = document.getElementById("Email");
  const email = emailInput.value.trim();
  const emailError = document.getElementById("emailError");

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9_.-]{0,61}@[a-zA-Z0-9_.-]{0,255}\.[a-zA-Z0-9_.-]{0,24}$/;
    return emailRegex.test(email);
  }
  if (isTrimRequired) {
    emailInput.value = email;
  }
  if (!validateEmail(emailInput.value)) {
    emailError.textContent = "Please give valid email";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}
const emailInputField = document.getElementById("Email");
emailInputField.addEventListener("input", emailValidation);

let captchaResponse = false;

function checkValidations() {
  return emailValidation() & nameValidation() & messageValidation() & phoneValidation();
}

async function handleSubmit(event) {
  event.preventDefault();
  if (await checkValidations()) {
    const form = document.getElementById("sheetdb-form");
    isTrimRequired = true;
    if (await checkValidations()) {
      const formData = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open("POST", form.action);
      xhr.send(formData);
      xhr.onload = function () {
        if (xhr.status === 200) {
          togglePopOpen();
        } else {
          console.error("Form submission failed");
        }
      };
      form.reset();
    }
  } else {
    console.error("Validation Failed");
  }
}

const submitButton = document.getElementById("hadleSubmit");
submitButton.addEventListener("click", handleSubmit);
