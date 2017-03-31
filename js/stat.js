'use strict';

window.renderStatistics= function(ctx, names , times) {
  ctx.fillText('HELLOW', 100, 100);

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle= 'black';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура, вы победили!', 140, 35);
    ctx.strokeText('Список результатов:', 140, 55);



  var max = -1;

  for(var i=0; i<times.length; i++) {
   var time = times[i]
    if (max < time) {
      max = time;
    }
  }

  for(var i=0; i<times.length; i++) {

       ctx.font = '16px PT Mono';
    ctx.fillStyle= 'black';
    ctx.fillText(names[i], 140+i*100, 260);
  }


  var histogramHeight = 150;
  var step = -150/max;

  for(var i=0; i<times.length; i++) {
    ctx.fillStyle= 'red';
    ctx.fillRect(140+100* i, 240, 40, times[i]*step);

    ctx.fillStyle= 'black';
    ctx.fillText(parseInt(times[i]), 140+i*100, 260+ times[i]*step);

  }
}

