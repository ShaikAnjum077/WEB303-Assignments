const form = document.getElementById("my-form");
const usernameEl = document.getElementById("username");
const passwordEl = document.getElementById("password");
const confirmPasswordEl = document.getElementById("confirmPassword");
const checkboxEl = document.getElementById("checkbox");
const selectEl = document.getElementById("country");
const submitBtn = document.querySelector(".submit-btn");

function handleFormSubmit(e) {
  e.preventDefault();
  form.insertAdjacentHTML(
    "beforeend",
    `<div id="form-submitted"> Welcome ${data.username}! The country code you selected is ${data.country} </div>`
  );
  form.reset();
  data.username = "";
  data.password = "";
  data.confirmPassword = "";
  data.checkbox = false;
  data.country = "";
}

const data = {
  username: "",
  password: "",
  confirmPassword: "",
  checkbox: false,
  country: "",
};

let valid = {
  username: false,
  password: false,
  confirmPassword: false,
  checkbox: false,
  country: false,
};

function onChange(e) {
  const target = e.target;

  if (target.name == "username") {
    data.username = target.value;
    valid.username = data.username.length > 0;
  }

  if (target.name == "password") {
    data.password = target.value;
    valid.password = data.password.length >= 10;
  }

  if (target.name == "confirmPassword") {
    data.confirmPassword = target.value;
    valid.confirmPassword =
      data.password.length >= 10 && data.confirmPassword === data.password;
  }

  if (target.name == "checkbox") {
    data.checkbox = target.checked;
    valid.checkbox = target.checked;
  }

  if (target.name == "country") {
    data.country = target.value;
    if (data.country != "select your country") {
      valid.country = true;
    } else {
      valid.country = false;
    }
  }

  const values = Object.values(valid);
  const all = values.every((v) => v == true);

  if (all) submitBtn.disabled = false;
  else submitBtn.disabled = true;
}

form.addEventListener("submit", handleFormSubmit);
usernameEl.addEventListener("keyup", onChange);
passwordEl.addEventListener("keyup", onChange);
confirmPasswordEl.addEventListener("keyup", onChange);
checkboxEl.addEventListener("change", onChange);
selectEl.addEventListener("change", onChange);

for (let country of countries) {
  const optionEl = document.createElement("option");
  optionEl.value = country.code;
  optionEl.textContent = country.name;
  selectEl.append(optionEl);
}
submitBtn.disabled = true;
