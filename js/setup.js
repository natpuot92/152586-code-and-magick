'use strict';

(function () {

  var showSimilarWizzard = document.querySelector('.setup-similar');
  var similarWizzardTemplate = document.getElementById('similar-wizard-template');
  var similarWizzardShow = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  var wizzards = function (data) {
    for (var wizzardIndex = 0; wizzardIndex < 4; wizzardIndex++) {
      var wizzardElement = similarWizzardTemplate.content.cloneNode(true);
      wizzardElement.querySelector('.setup-similar-label').textContent = data[wizzardIndex].name;
      wizzardElement.querySelector('.wizard-coat').style.fill = data[wizzardIndex].colorCoat;
      wizzardElement.querySelector('.wizard-eyes').style.fill = data[wizzardIndex].colorEyes;
      fragment.appendChild(wizzardElement);
    };
    similarWizzardShow.appendChild(fragment);
    showSimilarWizzard.classList.remove('hidden');
  };


  window.load('https://intensive-javascript-server-kjgvxfepjl.now.sh/code-and-magick/data', wizzards);

})();
