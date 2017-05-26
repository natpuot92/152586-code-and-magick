'use strict';

(function () {

  window.load = function (url, onLoad) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';
    xhr.addEventListener('load', function (evt) {
      var wizzardData = xhr.response;
      onLoad(wizzardData);
    })

    xhr.open('GET', url);
    xhr.send();
    }
})();
