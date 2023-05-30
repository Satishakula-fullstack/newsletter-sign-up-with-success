const form = document.querySelector("form");
const thankyouCard = document.querySelector(".thank-you-card");
const card = document.querySelector(".card");
const dismiss = document.querySelector(".dismiss");
const error = document.querySelector(".error");
const submit = document.querySelector(".submit");
let input = document.getElementById("email");

submit.addEventListener("click", (e) => {
  error.textContent = "Valid email is required";
  e.preventDefault();
  let email = input.value;
  error.classList.remove("hide");
  let valid = isValidEmail(email);
  console.log(valid);
  if (valid) {
    card.classList.add("hide");
    thankyouCard.classList.remove("hide");
  } else {
    error.classList.remove("hide");
    input.classList.add("inputerror");
  }
});

dismiss.addEventListener("click", () => {
  thankyouCard.classList.add("hide");
  card.classList.remove("hide");
  error.classList.add("hide");
  input.classList.remove("inputerror");
  input.value = "";
});

function isValidEmail(email) {
  const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegEx.test(email);
}
