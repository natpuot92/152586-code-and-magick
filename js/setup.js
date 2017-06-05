'use strict';

(function () {

  var showSimilarWizzard = document.querySelector('.setup-similar');
  var similarWizzardTemplate = document.getElementById('similar-wizard-template');
  var similarWizzardShow = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  var content = document.createElement('div');
  content.classList.add('wizard-artifacts');
  content.style.display = 'none';
  var ulElement = document.createElement('ul');
  var liElement = document.createElement('li');
  document.body.appendChild(content);
  content.appendChild(ulElement);

  var renderWizardArtifacts = function (wizard) {
    if (ulElement.contains(ulElement.querySelector('li'))) {
      var liArtefacts = ulElement.querySelectorAll('li');
      for (var i = 0; liArtefacts.length > i; i++) {
        ulElement.removeChild(ulElement.querySelector('li'));
      }
    }
    wizard.artifacts.forEach(function (artifact) {
      liElement.innerHTML = artifact.name;
      ulElement.appendChild(liElement.cloneNode(true));
    });
  };

  window.handleShowHideWizardBag = function (element, wizard) {
    var onMouseMove = function (evt) {
      content.style.top = evt.pageY + 10 + 'px';
      content.style.left = evt.pageX + 10 + 'px';
    };

    var onMouseOut = function () {
      content.style.display = 'none';
      element.removeEventListener('mousemove', onMouseMove);
      element.removeEventListener('mouseleave', onMouseOut);
    };

    element.addEventListener('mouseenter', function () {
      content.style.display = 'block';
      renderWizardArtifacts(wizard);

      element.addEventListener('mousemove', onMouseMove);
      element.addEventListener('mouseleave', onMouseOut);
    });
  };

  var wizzards = function (data) {

    for (var wizzardIndex = 0; wizzardIndex < 4; wizzardIndex++) {
      var wizzardElement = similarWizzardTemplate.content.cloneNode(true);
      var wizardElementArtifacts = wizzardElement.querySelector('.wizard');

      wizzardElement.querySelector('.setup-similar-label').textContent = data[wizzardIndex].name;
      wizzardElement.querySelector('.wizard-coat').style.fill = data[wizzardIndex].colorCoat;
      wizzardElement.querySelector('.wizard-eyes').style.fill = data[wizzardIndex].colorEyes;

      window.handleShowHideWizardBag(wizardElementArtifacts, data[wizzardIndex]);

      fragment.appendChild(wizzardElement);
    }

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
  };

  window.load('https://intensive-javascript-server-kjgvxfepjl.now.sh/code-and-magick/data', wizzards, wizzardsError);

})();
