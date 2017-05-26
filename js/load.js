'use strict';

(function () {

  window.load = function (url, onLoad) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';
    xhr.addEventListener('load', function (evt) {
      var wizzardData = xhr.response;
      onload(wizzardData);
    })

    xhr.open('GET', url);
    xhr.send();
    }

  var showSimilarWizzard = document.querySelector('.setup-similar');
  var similarWizzardTemplate = document.getElementById('similar-wizard-template');
  var similarWizzardShow = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  var onload = function (data) {
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

})();
