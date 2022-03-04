console.log("hello there!");

const firstName = document.querySelector(".input-fn");
const lastName = document.querySelector(".input-ln");
const email = document.querySelector(".input-ea");
const password = document.querySelector(".input-pw");
const freeTrialBtn = document.querySelector(".free-trial");

freeTrialBtn.addEventListener("click", (e) => {
  e.preventDefault();
  emptyField(firstName);
  emptyField(lastName);
  emailValidation(email);
  emptyField(password);
});

function emptyField(field) {
  console.log((field.style.border += "1px solid red"));
  if (
    field.value == "" &&
    field.parentElement.children[1].classList.contains("hidden")
  ) {
    field.style.border = "1px solid red";
    field.parentElement.children[1].classList.remove("hidden");
  } else {
    field.parentElement.children[1].classList.add("hidden");
    field.style.border = "1px solid var(--grayishViolet)";
  }
}

function emailValidation(field) {
  console.log(field.value);

  if (!field.value.match(/^\S+@\S+\.\S+$/m)) {
    field.parentElement.children[1].classList.remove("hidden");
    field.style.border = "1px solid red";
  } else {
    field.parentElement.children[1].classList.add("hidden");
    field.style.border = "1px solid var(--grayishViolet)";
  }
}
