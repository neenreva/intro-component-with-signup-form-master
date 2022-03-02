console.log("hello!");

const firstName = document.querySelector(".input-fn");
const lastName = document.querySelector(".input-ln");
const email = document.querySelector(".input-ea");
const password = document.querySelector(".input-pw");
const freeTrialBtn = document.querySelector(".free-trial");
// console.log(firstName, lastName, email, password, freeTrialBtn);

freeTrialBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log('btn');
  emptyField(firstName)
//   emptyField(lastName);
  emailValidation(email);
//   emptyField(password);
});

function emptyField(field) {
  console.log(field.parentElement.children);
    if (field.parentElement.children.length > 1) { //remove error HTML
    }
  let error = `<span class="icon"
    ><img src="images/icon-error.svg" alt="error icon"
    /></span>
    <span class="error">${field.placeholder} cannot be empty</span>`;

  if (field.value == "") {
    field.parentElement.insertAdjacentHTML("beforeend", error);
  } 

}

function emailValidation(field) {
    let error = `<span class="icon"
    ><img src="images/icon-error.svg" alt="error icon"
    /></span>
    <span class="error">Looks like this is not a valid ${field.placeholder}</span>`;

  if (field.value == "") {
    field.parentElement.insertAdjacentHTML("beforeend", error);
  }
}
