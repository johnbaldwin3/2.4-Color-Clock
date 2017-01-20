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

  console.log('mady', ("0" + secondsVar.toString("16")).slice(-2));

  hours.textContent = ("0" + hoursVar).slice(-2);
  minutes.textContent = ("0" + minutesVar).slice(-2);
  seconds.textContent = ("0" + secondsVar).slice(-2);

  // console.log(secondsVar);

  timeBar.style.width = secondsVar.toString() + "%";
  //
  // console.log(secondsVarDec);


}



currentTime();
}());
