const button = document.querySelector("#btn_generator");
const spinner = document.querySelector(".spinner");
const svg = button.querySelector("svg");
console.log("svg :", svg);
// Initial state
let isLoading = true;
spinner.classList.add("spinner_hidden");

button.addEventListener("click", async () => {
  if (isLoading) {
    spinner.classList.remove("spinner_hidden");
    svg.style.opacity = 0;
  }
  refreshAdvice();
});

async function refreshAdvice() {
  const fetchResult = await fetch("https://api.adviceslip.com/advice");
  const jsonData = await fetchResult.json();
  // isLoading = false;
  const advice_id = document.querySelector("#advice_id");
  advice_id.textContent = jsonData.slip.id;
  const advice_text = document.querySelector("#advice_text");
  advice_text.textContent = "“ " + jsonData.slip.advice + " ”";
  spinner.classList.add("spinner_hidden");
  svg.style.opacity = 1;
}
refreshAdvice();
