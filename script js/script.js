//define alias
const button = document.querySelector("#btn_generator");
const spinner = document.querySelector(".spinner");
const svg = button.querySelector("svg");

// Initial state
let isLoading = true;

spinner.classList.add("spinner_hidden"); //add class spinner_hidden to hide spinner first

//add event on the button to call api
button.addEventListener("click", async () => {
  if (isLoading) {
    spinner.classList.remove("spinner_hidden"); //remove class spinner_hidden to display spinner until we have api's response
    svg.style.opacity = 0; //before display spinner, we must hide svg contained in button
  }
  refreshAdvice(); //call function after click button
});

//define function
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

//custom cursor
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  // console.log("posX :", posX, " \n posY :", posY);

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});
