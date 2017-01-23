

(function(){
  "use strict";

//variable assignments

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
  var isHovering = false;
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


function currentTime(){
//getting the time set to variables
  getTime = new Date();
  hoursVar = getTime.getHours();
  minutesVar = getTime.getMinutes();
  secondsVar = getTime.getSeconds();

//setting the time.. padding with 0
  hours.textContent = ("0" + hoursVar).slice(-2);
  minutes.textContent = ("0" + minutesVar).slice(-2);
  seconds.textContent = ("0" + secondsVar).slice(-2);


//setting Timer Bar to incrementally increase as a percentage based on seconds
  timeBar.style.width = secondsVar.toString() + "%";


  //Setting times to colors
  hexSeconds = secondsVar.toString(16);
  hexMinutes = minutesVar.toString(16);
  hexHours = hoursVar.toString(16);

//adding a character if hex value only holds one spot
  if(hexSeconds.length == 1) {
    hexSeconds+= hexSeconds;
  }
  if(hexMinutes.length == 1) {
    hexMinutes+= hexMinutes;
  }
  if(hexHours.length == 1){
    hexHours += 0;
  }



  hexColor = ('#' + hexSeconds  + hexMinutes + hexHours);
  //setting up chain of hex colors to create bigger gradient
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

//applying gradient in a radial style with hex colors
  docBody.style.backgroundImage = 'repeating-radial-gradient('+hexColor+' 1%,' +hexOne+' 3%,'+hexTwo+' 5%,'+hexThree+' 8%,'+hexFour+' 12%,'+hexSix +' 13%,'+hexSeven+' 14%,'+hexEight+' 15%,' + hexNine+' 16%)';

//mouse out and mouse over testing
  if (isHovering) {
    hours.textContent = hexSeconds;
    minutes.textContent = hexMinutes;
    seconds.textContent = hexHours;

  } else {

    hours.textContent = ("0" + hoursVar).slice(-2);
    minutes.textContent = ("0" + minutesVar).slice(-2);
    seconds.textContent = ("0" + secondsVar).slice(-2);

  }


}
//setting up event listeners for mouse out and mouse over
theTime.addEventListener('mouseover', handleMouseOver);
theTime.addEventListener('mouseout', handleMouseOut);

function handleMouseOver() {
  isHovering = true;
};

function handleMouseOut() {
  isHovering = false;
};




window.setInterval(currentTime, 500);
// currentTime();
}());
