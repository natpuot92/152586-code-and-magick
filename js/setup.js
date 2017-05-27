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

  var wizzardsError = function (errorText) {
    var errorElement = document.createElement('div');
    errorElement.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    errorElement.style.position = 'absolute';
    errorElement.style.left = 0;
    errorElement.style.right = 0;
    errorElement.style.fontSize = '30px';

    errorElement.textContent = errorText;
    document.body.insertAdjacentElement('afterbegin', errorElement);
  }

  window.load('https://intensive-javascript-server-kjgvxfepjl.now.sh/code-and-magick/data', wizzards, wizzardsError);

})();
