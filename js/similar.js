'use strict';

(function () {

  var filterCoatArray = [];
  var filterEyesArray = [];
  window.filtredColor = function (data, element) {

  window.filtredDataWizzards = data.filter(function(wizzard) {
    return wizzard[element] === window[element];
      })

    if (element === 'colorCoat') {
      filterCoatArray = window.filtredDataWizzards
    } else {
      filterEyesArray = window.filtredDataWizzards
    }

    var filterCoatArrayAndFilterEyesArray =
      filterCoatArray.concat(filterEyesArray).concat(data)

    var sameCoatAndEyesWizards = filterCoatArrayAndFilterEyesArray.filter(function (it) {
      return it.colorCoat === window.colorCoat &&
        it.colorEyes === window.colorEyes;
    });

    var finalArray = sameCoatAndEyesWizards.concat(filterCoatArrayAndFilterEyesArray);

    finalArray = finalArray.filter(function (it, i) {
      return finalArray.indexOf(it) === i;
    });

    updateWizzards(finalArray);
  }

  var showSimilarWizzard = document.querySelector('.setup-similar');
  var similarWizzardTemplate = document.getElementById('similar-wizard-template');
  var similarWizzardShow = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  var updateWizzards = function (data) {
    var wizzardItems = document.querySelectorAll('.setup-similar-item');
    wizzardItems.forEach(function(item) {
      item.remove();
    });

    for (var wizzardIndex = 0; wizzardIndex < data.length; wizzardIndex++) {
      if (wizzardIndex < 4) {
        var wizzardElement = similarWizzardTemplate.content.cloneNode(true);
        wizzardElement.querySelector('.setup-similar-label').textContent = data[wizzardIndex].name;
        wizzardElement.querySelector('.wizard-coat').style.fill = data[wizzardIndex].colorCoat;
        wizzardElement.querySelector('.wizard-eyes').style.fill = data[wizzardIndex].colorEyes;
        fragment.appendChild(wizzardElement);
      }
    };
    similarWizzardShow.appendChild(fragment);
    showSimilarWizzard.classList.remove('hidden');
  };

})()
