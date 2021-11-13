const btn = document.querySelector(".login-box button");
const btnClose = document.querySelector(".btn-close");
const modal = document.querySelector(".login-modal");


btn.addEventListener("click", () => {
  modal.classList.add("is-active");
});

btnClose.addEventListener("click", () => {
  modal.classList.remove("is-active");
});

