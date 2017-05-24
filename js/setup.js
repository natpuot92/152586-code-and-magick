'use strict';

(function () {
  var randomWizzards = [];

  for (var i = 0; i < 4; i++) {
    randomWizzards.splice(0, 0, window.getRandomWizzard())
  }

  var showSimilarWizzard = document.querySelector('.setup-similar');
  var similarWizzardTemplate = document.getElementById('similar-wizard-template');
  var similarWizzardShow = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  for (var wizzardIndex = 0; wizzardIndex < randomWizzards.length; wizzardIndex++) {
    var wizzardElement = similarWizzardTemplate.content.cloneNode(true);
    wizzardElement.querySelector('.setup-similar-label').textContent = randomWizzards[wizzardIndex].name ;

    wizzardElement.querySelector('.wizard-coat').style.fill = randomWizzards[wizzardIndex].coatColor;

    wizzardElement.querySelector('.wizard-eyes').style.fill = randomWizzards[wizzardIndex].eyesColor;

    fragment.appendChild(wizzardElement);
  }
  similarWizzardShow.appendChild(fragment);
  showSimilarWizzard.classList.remove('hidden');


})();
