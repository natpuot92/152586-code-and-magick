'use strict';

(function () {
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


  var getRandomName = function () {
    return  nameArray[getRadomDigit(0, nameArray.length - 1)];
  }

  var getRandomSurname = function () {
    return  surnameArray[getRadomDigit(0, surnameArray.length - 1)];
  }

  var getName = function () {
  return  getRandomName() + ' ' + getRandomSurname();
  }

  window.coatColorArray = [
    'rgb(146, 100, 161)',
    'rgb(215, 210, 55)',
    'rgb(241, 43, 107)',
    'rgb(101, 137, 164)',
    'rgb(0, 0, 0)',
    'rgb(215, 210, 55)',
    'rgb(56, 159, 117)',
    'rgb(241, 43, 107)'
  ]

  var getCoatColor = function () {
  return  coatColorArray[getRadomDigit(0, coatColorArray.length - 1)];
  }

  window.eyesColorArray = [
    'red',
    'orange',
    'yellow',
    'green',
    'lightblue',
    'blue',
    'purple'
  ]

  var getEyesColor = function () {
  return  eyesColorArray[getRadomDigit(0, eyesColorArray.length - 1)];
    }

  window.fireballColorArray = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ]



  window.getRandomWizzard = function () {

    var randomWizzard = {
    name: getName(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor(),
    }

    return randomWizzard;
  }
})()
