'use strict';

window.renderStatistics = function (ctx, names , times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура, вы победили!', 140, 35);
  ctx.strokeText('Список результатов:', 140, 55);

  function getMaxNumber() {
    var max = times[0];
    for (var i = 0; i < times.length; i++) {
      var time = times[i]
      if (max < time) {
        max = time;
      }
    }
    return max;
  }

  var histogramHeight = 150;
  var step = -150 / getMaxNumber();

  for(var i = 0; i < times.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(parseInt(times[i]), 140 + i * 100, 230 + times[i] * step);
    ctx.font = '16px PT Mono';
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], 140 + i * 100, 260);
  }

  function getRandomOpacity() {
    var randomOpacity = Math.random();
    var RGBArandomOpacity = randomOpacity.toFixed(1);
    if (RGBArandomOpacity < 0.1) {
      var RGBArandomOpacity = 0.1;
      return RGBArandomOpacity;
    } else {
      return RGBArandomOpacity;
    }
  }

  for(var i = 0; i < names.length; i++) {
    var name = names[i];
    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(140 + 100 * i, 240, 40, times[i] * step);
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + getRandomOpacity() + ')';
      ctx.fillRect(140 + 100 * i, 240, 40, times[i] * step);
    }
  }
}

