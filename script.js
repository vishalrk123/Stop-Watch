const addSeconds = document.querySelector(".seconds");
const addMilliSeconds = document.querySelector(".milli");

const startButton = document.querySelector("#startButton");
const stopButton = document.querySelector("#stopButton");
const resetButton = document.querySelector("#resetButton");

let seconds = 0;
let milli = 0;

let interval;

function start() {
    milli++;
    addMilliSeconds.innerHTML = milli < 10 ? "0" + milli : milli;
    if(milli > 99){
        seconds++;
        addSeconds.innerHTML = seconds < 10  ? "0" + seconds : seconds;
        milli =0;
        addMilliSeconds.innerHTML = "00"

    }
}

startButton.onclick  = function() {
    clearInterval(interval);
    interval = setInterval(start,10);
}

stopButton.onclick = () => {
    clearInterval(interval);
}


resetButton.onclick = () => {
    clearInterval(interval);
    seconds =0;
    milli=0;
    addMilliSeconds.innerHTML = "00"
    addSeconds.innerHTML = "00"
}