var timerObj = document.getElementById("timer");
var startBtnObj = document.getElementById("start-btn");
var resetBtnObj = document.getElementById("reset-btn");
var isTimerRunning = false;
var interval;
var  sec=0;
var min=0;

//Reset Button
resetBtnObj.addEventListener("click", () => {
    console.log("reset button clicked");
    timerObj.textContent = "00:00";
    startBtnObj.textContent="Start";
    isTimerRunning=false;
    clearInterval(interval);
    sec=00;
    min=00;
})

//Start Button
startBtnObj.addEventListener("click", () => {
    console.log("start button clicked");

    if (isTimerRunning) {
        startBtnObj.textContent = "Start";
        isTimerRunning = false;
        clearInterval(interval)
    } else {
        startBtnObj.textContent = "Stop";
        isTimerRunning = true;
        interval = setInterval(function(){
            console.log("hi");
            displayTimer();
            timerObj.textContent=min+":"+sec;
        }, 1000)
    }
})

function displayTimer(){
    sec++;
    if(sec==60){
        sec=00;
        min++;
        if(min<10){
            min="0"+min;
        }
    }
    if(sec<10){
        sec="0"+sec;
    }
    
}