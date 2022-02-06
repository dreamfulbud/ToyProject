const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector(".greeting");
const HIDDEN_CALSSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CALSSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
};
function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerHTML = `Hello, ${username} ✋`;
  greeting.classList.remove(HIDDEN_CALSSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CALSSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}


