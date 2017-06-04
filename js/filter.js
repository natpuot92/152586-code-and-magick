'use strict';

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
