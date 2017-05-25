'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var dialogHandle = document.querySelector('.setup-user-pic');

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var  startCoord = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault ();
      var shift = {
        x: startCoord.x - moveEvt.clientX,
        y: startCoord.y - moveEvt.clientY
      }

      startCoord = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    }

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
  });

  var inventaryElement = setup.querySelector('.setup-artifacts');
  var shopElement = setup.querySelector('.setup-artifacts-shop');
  var draggedIeItem;

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedIeItem = evt.target;
      inventaryElement.classList.add('inventary-start');

      shopElement.addEventListener('dragend', function (evt) {
        evt.preventDefault();
        inventaryElement.classList.remove('inventary-start');
      });
    }
  });

  inventaryElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  inventaryElement.addEventListener('dragenter', function (evt) {
     evt.preventDefault();
     evt.target.style.backgroundColor = 'yellow';
  })


  inventaryElement.addEventListener('dragleave', function (evt) {
    evt.preventDefault();
    evt.target.style.backgroundColor = '';
  })

  inventaryElement.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.target.appendChild(draggedIeItem);
    inventaryElement.classList.remove('inventary-start');
  });

})()
