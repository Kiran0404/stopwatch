let timerDisplay = document.querySelector('.timer')
let stopBtn = document.getElementById('stopbtn');
let startBtn = document.getElementById('startbtn');
let resetBtn = document.getElementById('resetbtn');


let secs = 0;
let mins = 0;
let hr = 0;

let timerId = null;

startBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 1000);
});

stopBtn.addEventListener('click', function(){
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.textContent = `00 : 00 : 00`;
    secs = mins = hr = 0;
});

function startTimer(){
    secs++;
    if(secs == 10){
        secs = 0;
        mins++;
        if(mins == 10){
            mins = 0;
            hr++;
        }
    }

    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;     //we can also use if else instead of conditional statements
    let hrString = hr < 10 ? `0${hr}` : hr;
    

    timerDisplay.textContent = `${hrString} : ${minsString} : ${secsString}`;

}