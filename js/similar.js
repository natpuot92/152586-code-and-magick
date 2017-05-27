'use strict';

(function () {

  var showSimilarWizzard = document.querySelector('.setup-similar');
  var similarWizzardTemplate = document.getElementById('similar-wizard-template');
  var similarWizzardShow = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();


  window.updateWizzards = function (data) {
    var wizzardItems = document.querySelectorAll('.setup-similar-item');
    wizzardItems.forEach(function(item) {
      item.remove();
    });

    var filtredDataWizzards = data.filter(function(wizzard) {
        return wizzard.colorCoat === window.coatColor
      })
    console.log(filtredDataWizzards);
    for (var wizzardIndex = 0; wizzardIndex < filtredDataWizzards.length; wizzardIndex++) {
      if (filtredDataWizzards.length < 5) {
        var wizzardElement = similarWizzardTemplate.content.cloneNode(true);
        wizzardElement.querySelector('.setup-similar-label').textContent = filtredDataWizzards[wizzardIndex].name;
        wizzardElement.querySelector('.wizard-coat').style.fill = filtredDataWizzards[wizzardIndex].colorCoat;
        wizzardElement.querySelector('.wizard-eyes').style.fill = filtredDataWizzards[wizzardIndex].colorEyes;
        fragment.appendChild(wizzardElement);
      }
    };
    similarWizzardShow.appendChild(fragment);
    showSimilarWizzard.classList.remove('hidden');
  };


})()
