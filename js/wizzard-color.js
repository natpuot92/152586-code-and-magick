'use strict';

(function () {
  var wizzardCoat = document.querySelector('.wizard-coat');
  var wizzardEyes = document.querySelector('.wizard-eyes');
  var wizzardFirball = document.querySelector('.setup-fireball-wrap');

  var howFill = function (element, arrayColor) {
    element.style.fill = arrayColor[window.numberColor];
    switch(element) {
      case wizzardCoat:
        window.colorCoat = arrayColor[window.numberColor];
        window.filtredColor(wizzardData, 'colorCoat');



        break
      case wizzardEyes:
        window.colorEyes = arrayColor[window.numberColor]
        window.filtredColor(wizzardData, 'colorEyes');
        break
    };
  }

  var howBackground = function (element, arrayColor) {
   element.style.background = arrayColor[window.numberColor];
  }

  window.colorizeElement(wizzardCoat, window.coatColorArray, howFill);

  window.colorizeElement(wizzardEyes, window.eyesColorArray, howFill);

  window.colorizeElement(wizzardFirball, window.fireballColorArray, howBackground);

})()

