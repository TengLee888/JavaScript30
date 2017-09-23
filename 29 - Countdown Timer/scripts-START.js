let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds){
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds); //console timeleft immediately, rather than after one second.
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if(secondsLeft < 0){
      console.log('stop');
      clearInterval(countdown);
      return;
    }
    console.log(secondsLeft);
     displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds){
  const min = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${min}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.textContent = display;
  document.title = display;
}

function displayEndTime(timestamp){
  const end = new Date(timestamp);
  const hours = end.getHours();
  const adjuestedHours = hours > 12 ? hours - 12 : hours
  const minutes = end.getMinutes();
  endTime.textContent = `Be back at ${adjuestedHours}:${minutes < 10 ? '0' : ''}${minutes}`
}


function startTimer (){
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click' , startTimer));
document.customForm.addEventListener('submit' , function(e){
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset()
})
