var milliseconds = 00;
var seconds = 00;
var minutes = 00;

var appendMS = document.getElementById("milliseconds");
var appendS = document.getElementById("seconds");
var appendM = document.getElementById("minutes");

var bt_start = document.getElementById("starts");
var bt_stop = document.getElementById("stop");
var bt_reset = document.getElementById("reset");


var interval;

function startTime(){
    milliseconds++;

    if (milliseconds <= 9) {
        appendMS.innerHTML = "0" + milliseconds;
    }
    if (milliseconds > 9) {
        appendMS.innerHTML = milliseconds;
    }
    if (milliseconds > 99) {
        
        milliseconds = 0;
        appendMS.innerHTML = "0" + 0;
        seconds++;
        if (seconds<=9) {
            
            appendS.innerHTML = "0" + seconds;
        }
        if (seconds>9) {
            appendS.innerHTML = seconds;
        }
        if(seconds == 60){
            seconds = 0;
            appendS.innerHTML = "0" + 0;
            minutes++;
            if (minutes<9) {
                appendM.innerHTML = "0" + minutes;
            }
            if (minutes>9) {
                appendM.innerHTML = minutes;
            }
        }
    }
}

let isRunning = false; 
//  thiết lập cho cho nút start.bởi vì nếu không khóa nút 
//  Start lại. Ấn vào lần 2 sẽ làm tăng nhanh tốc độ chạy

bt_start.onclick = function(){
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(startTime,10); // chạy đúng với giây
    }
};

bt_stop.onclick = function(){
    clearInterval(interval);
    isRunning = true;
};

bt_reset.onclick = function(){
    clearInterval(interval);
    isRunning = false;
    milliseconds = "00";
    seconds = "00";
    minutes = "00";
    appendMS.innerHTML = milliseconds;
    appendM.innerHTML = minutes;
    appendS.innerHTML = seconds;

};

/*-------------------------------------------------------------------------------------------------------

Cách khác


//tạo đối tượng
let seconds = 0;
let intervalId;

//lấy các nút
const timer = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

//gắn sự kiện cho btn
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

//bắt đầu
function startTimer() {
  intervalId = setInterval(() => {
    seconds++;
    updateTimer();
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
}
//dừng lại
function stopTimer() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = false;
}
//đặt lại
function resetTimer() {
  clearInterval(intervalId);
  seconds = 0;
  updateTimer();
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
}


//cập nhật giá trị
function updateTimer() {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  timer.textContent = formattedTime;
}
*/