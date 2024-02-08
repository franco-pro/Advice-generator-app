const button = document.querySelector("#btn_generator");
button.addEventListener("click", async () => {
  refreshAdvice();
});

async function refreshAdvice() {
  const fetchResult = await fetch("https://api.adviceslip.com/advice");
  const jsonData = await fetchResult.json();
  const advice_id = document.querySelector("#advice_id");
  advice_id.textContent = jsonData.slip.id;
  const advice_text = document.querySelector("#advice_text");
  advice_text.textContent = "“ " + jsonData.slip.advice + " ”";
}
refreshAdvice();
