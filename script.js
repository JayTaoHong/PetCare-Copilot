const tabs = Array.from(document.querySelectorAll(".tab"));
const screens = Array.from(document.querySelectorAll(".screen"));
const nextButtons = Array.from(document.querySelectorAll(".action-next"));

function activate(step) {
  tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.step === step));
  screens.forEach((screen) => screen.classList.toggle("active", screen.id === step));
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => activate(tab.dataset.step));
});

nextButtons.forEach((button) => {
  button.addEventListener("click", () => activate(button.dataset.step));
});
