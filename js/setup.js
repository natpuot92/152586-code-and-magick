'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  setupWindow.classList.remove('hidden');

  var nameArray = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'];

  var surnameArray = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг']

  var getRadomDigit = function (min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }

  var getRandomName = function () {
    return  nameArray[getRadomDigit(0, nameArray.length - 1)];
  }

  var getRandomSurname = function () {
    return  surnameArray[getRadomDigit(0, surnameArray.length - 1)];
  }

  var getName = function () {
  return  getRandomName() + ' ' + getRandomSurname();
  }

  var coatColorArray = [
    'gb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ]

  var getCoatColor = function () {
  return  coatColorArray[getRadomDigit(0, coatColorArray.length - 1)];
  }

  var eyesColorArray = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ]

  var getEyesColor = function () {
  return  eyesColorArray[getRadomDigit(0, eyesColorArray.length - 1)];
    }

  var getRandomWizzard = function () {

    var randomWizzard = {
    name: getName(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
    }

    return randomWizzard;
  }

  var randomWizzards = [];

  for (var i = 0; i < 4; i++) {
    randomWizzards.splice(0, 0, getRandomWizzard())
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
