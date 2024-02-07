const btnClick = document.querySelector(".btn-click");
const clickCounter = document.querySelector(".clicks-counter");
const clickCounterPerSecond = document.querySelector(".clicks-per-second");
const btnItemPerSecond = document.querySelector(".item-per-second");
const btnItemPerClick = document.querySelector(".item-per-click");
let numberOfClicks = 0.0;
let numberOfClicksPerSecond = 0.0;
let clickPower = 0.1;

addNumberOfClicksPerSecond();

btnClick.addEventListener('click', addClickCounter);
btnItemPerSecond.addEventListener('click', updateNumberOfClicksPerSecond);
btnItemPerClick.addEventListener('click', updateNumberOfClicks);

function addClickCounter() {
    numberOfClicks += clickPower;
    manageNumberOfClicks();
}

function addNumberOfClicksPerSecond() {
    setInterval(() => {
        numberOfClicks += numberOfClicksPerSecond;
        manageNumberOfClicks();
    }, 1000);
}

function updateNumberOfClicksPerSecond() {
    console.log(numberOfClicks);
    if (numberOfClicks >= 0.9) {
        numberOfClicksPerSecond += 0.1;
        numberOfClicks -= 1;
        clickCounterPerSecond.textContent = numberOfClicksPerSecond.toFixed(1) + "/s";
    }
}

function updateNumberOfClicks() {
    if (numberOfClicks >= 0.9) {
        numberOfClicks -= 1;
        clickPower += 0.1
    }
}

function manageNumberOfClicks() {
    clickCounter.textContent = numberOfClicks.toFixed(1);
}