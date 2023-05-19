
const sign_in_btn = document.querySelector("#sign-in-btns");
const sign_up_btn = document.querySelector("#sign-up-btns");
const container = document.querySelector(".containers");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-modes");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-modes");
});