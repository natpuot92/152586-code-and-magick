'use strict';

(function () {

  window.setup = document.querySelector('.setup');
  var setupOppen = document.querySelector('.setup-open-icon');
  var setupClose = window.setup.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === 27) {
      closePopup();
    }
  };

  var openPopup = function () {
    window.setup.classList.remove('hidden');
    addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.setup.classList.add('hidden');
    removeEventListener('keydown', onPopupEscPress);
    window.setup.style.cssText = '';
  };

  setupOppen.addEventListener('click', function () {
    openPopup();
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      closePopup();
    }
  });

  setupOppen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      openPopup();
    }
  });
})();
