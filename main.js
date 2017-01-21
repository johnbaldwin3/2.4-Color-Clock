console.log("hello");

(function(){
  "use strict";

console.log("say stuff");

  var getTime = new Date();
  var hoursVar;
  var minutesVar;
  var secondsVar;
  var theTime = document.querySelector('.the-time')
  var hours = document.querySelector('.the-time .hours');
  var minutes= document.querySelector('.the-time .minutes');
  var seconds = document.querySelector('.the-time .seconds');
  var timeBar = document.getElementById('timer-bar');
  var docBody = document.querySelector('body');

  var hexSeconds;
  var hexMinutes;
  var hexHours;
  var hexColor;

  var hexTen;
  var hexNine;
  var hexEight;
  var hexSeven;
  var hexSix;
  var hexFive;
  var hexFour;
  var hexThree;
  var hexTwo;
  var hexOne;
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

  // console.log('mady', ("0" + secondsVar.toString("16")).slice(-2));

  hours.textContent = ("0" + hoursVar).slice(-2);
  minutes.textContent = ("0" + minutesVar).slice(-2);
  seconds.textContent = ("0" + secondsVar).slice(-2);

  // console.log(secondsVar);

  timeBar.style.width = secondsVar.toString() + "%";
  //
  // console.log(secondsVarDec);
  hexSeconds = ("0" + secondsVar.toString("16")).slice(-2);
  hexMinutes = ("0" + minutesVar.toString("16")).slice(-2);
  hexHours = ("0" + hoursVar.toString("16")).slice(-2);

  hexColor = ('#' + hexHours + hexMinutes + hexSeconds);

//console was able to log hex value for seconds
  // console.log(hexSeconds, "john");
  // able to log hexColor
  // console.log(hexColor, "john");

  hexTen = hexNine;
  hexNine = hexEight;
  hexEight = hexSeven;
  hexSeven = hexSix;
  hexSix = hexFive;
  hexFive = hexFour;
  hexFour = hexThree;
  hexThree = hexTwo;
  hexTwo = hexOne;
  hexOne = hexColor;

  docBody.style.backgroundImage = 'repeating-radial-gradient('+hexColor+' 1%,' +hexOne+' 3%,'+hexTwo+' 5%,'+hexThree+' 8%,'+hexFour+' 12%,'+hexSix +' 13%,'+hexSeven+' 14%,'+hexEight+' 15%,' + hexNine+' 16%)';

 // docBody.style.backgroundImage = 'repeating-radial-gradient('+hexColor+' ,' +hexOne+' 15%,' + hexThree +' 20%)';

// docBody.style.backgroundImage ='repeating-radial-gradient(circle at 0% 50%,' + hexColor + '0px,' + hexColor + '20px,' + hexTen + '20px,' + hexTen + '40px)';
  // console.log(hexFour, hexThree, hexTwo, hexOne, hexColor, "john");

  // console.log('repeating-radial-gradient(circle,'+hexColor+' 10px,'+hexThree+','+hexSix+' 20px,'+hexNine+',' + hexTen+'10px)')

  // docBody.style.backgroundColor = hexColor;

  theTime.addEventListener('mouseover', function(){


    hours.textContent = hexHours;
    seconds.textContent = hexSeconds;
    minutes.textContent = hexMinutes;


  })
}



currentTime();
}());
