const worldCup = "21 Nov 2022 12:00"

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function countdownTimer(){
    const worldCupDate = new Date(worldCup);
    const currentDate = new Date();

    const totalSeconds = (worldCupDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = formatOutput(minutes);
    secondsEl.innerHTML = formatOutput(seconds);
}

function formatOutput(timer){
    return timer < 10 ? `0${timer}`: timer;
}

countdownTimer();

setInterval(countdownTimer, 1000);