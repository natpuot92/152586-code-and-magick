'use strict';

(function () {

  var lastTimeout;

  window.filtredColor = function (data, element) {
    var getRank = function (wizard) {
      var rank = 0;

      if (wizard.colorCoat === window.colorCoat) {
        rank += 2;
      }
      if (wizard.colorEyes === window.colorEyes) {
        rank += 1;
      }
      return rank;
    };

    var finalArray = data.sort(function (left, right) {
      return getRank(right) - getRank(left);
    });

    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }

    lastTimeout = window.setTimeout(function () {
      updateWizzards(finalArray);
    }, 300);
  };

  var showSimilarWizzard = document.querySelector('.setup-similar');
  var similarWizzardTemplate = document.getElementById('similar-wizard-template');
  var similarWizzardShow = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  var updateWizzards = function (data) {
    var wizzardItems = document.querySelectorAll('.setup-similar-item');
    wizzardItems.forEach(function (item) {
      item.remove();
    });

    for (var wizzardIndex = 0; wizzardIndex < data.length; wizzardIndex++) {
      if (wizzardIndex < 4) {
        var wizzardElement = similarWizzardTemplate.content.cloneNode(true);
        var wizardElementArtifacts = wizzardElement.querySelector('.wizard');
        wizzardElement.querySelector('.setup-similar-label').textContent = data[wizzardIndex].name;
        wizzardElement.querySelector('.wizard-coat').style.fill = data[wizzardIndex].colorCoat;
        wizzardElement.querySelector('.wizard-eyes').style.fill = data[wizzardIndex].colorEyes;

        window.handleShowHideWizardBag(wizardElementArtifacts, data[wizzardIndex]);
        fragment.appendChild(wizzardElement);
      }
    }

    similarWizzardShow.appendChild(fragment);
    showSimilarWizzard.classList.remove('hidden');
  };

})();
