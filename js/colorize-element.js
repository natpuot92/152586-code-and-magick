'use strict';

(function () {

  window.numberColor = 1;

  window.colorizeElement = function(element, array, callback) {
      element.addEventListener('click', function () {
        if (window.numberColor < array.length) {
          callback(element, array);
          window.numberColor = window.numberColor + 1;
        } else {
          window.numberColor = 0;
          callback(element, array);
          window.numberColor = window.numberColor + 1;
      };
        //updateWizzards()
    });
  }
})();
