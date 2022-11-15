const adviceId = document.getElementById("advice-id");
const adviceTxt = document.getElementById("advice-text");
const generateBtn = document.getElementById("generate-btn");
const advice_url = "https://api.adviceslip.com/advice";


async function getAdvice() {
    //fetches data from API
    const response = await fetch(advice_url);
    //Creates JSON data file from URL fetch
    const {slip: {id, advice} } = await response.json();

    adviceId.innerText = id;
    adviceTxt.innerText = advice;


}

getAdvice();

generateBtn.addEventListener("click", getAdvice);