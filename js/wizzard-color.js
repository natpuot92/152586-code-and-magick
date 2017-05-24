'use strict';

(function () {
  var wizzardCoat = document.querySelector('.wizard-coat');
  var wizzardEyes = document.querySelector('.wizard-eyes');
  var wizzardFirball = document.querySelector('.setup-fireball-wrap');

  window.numberColor = 1;
  var changeColor = function (element, array) {
    if (window.numberColor < array.length) {
        element.style.fill = array[window.numberColor];
        window.numberColor = window.numberColor + 1;
    } else {
        window.numberColor = 0;
        element.style.fill = array[window.numberColor];
        window.numberColor = window.numberColor + 1;
    };
  }

  wizzardCoat.addEventListener('click', function() {
    changeColor(wizzardCoat, window.coatColorArray);
  });

  wizzardEyes.addEventListener('click', function() {
    changeColor(wizzardEyes, window.eyesColorArray);
  });

  wizzardFirball.addEventListener('click', function() {
    wizzardFirball.style.background = fireballColorArray[getRadomDigit(0, fireballColorArray.length)];
  });
})()
