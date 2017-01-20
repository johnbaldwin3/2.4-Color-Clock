console.log("hello");

(function(){
  "use strict";

console.log("say stuff");

  var getTime = new Date();
  var hoursVar;
  var minutesVar;
  var secondsVar;
  var hours = document.querySelector('.the-time .hours');
  var minutes= document.querySelector('.the-time .minutes');
  var seconds = document.querySelector('.the-time .seconds');
  var timeBar = document.getElementById('timer-bar');

window.setInterval(currentTime, 1000);

function timerBarAdder() {
  timeBar.textContent += '-';
  window.setInterval(currentTime, 1000);
}

function currentTime(){

  getTime = new Date();
  hoursVar = getTime.getHours();
  minutesVar = getTime.getMinutes();
  secondsVar = getTime.getSeconds();

  hours.textContent = ("0" + hoursVar).slice(-2);
  minutes.textContent = ("0" + minutesVar).slice(-2);
  seconds.textContent = ("0" + secondsVar).slice(-2);

  // console.log(secondsVar);

  var secondsVarDec = secondsVar / 60;

  timeBar.style.width = secondsVarDec;

  console.log(secondsVarDec);


}



currentTime();
}());
