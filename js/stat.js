'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var GIST_START_X = 160;
var GIST_GAP = 90;
var GIST_WIDTH = 40;
var GIST_MAX_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, 40);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], GIST_START_X + (GIST_GAP * i), CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), GIST_START_X + (GIST_GAP * i), (CLOUD_HEIGHT - 40) - (Math.round(times[i]) * GIST_MAX_HEIGHT / maxTime));
    ctx.fillStyle = 'hsl(260, ' + (Math.random() * 100) + '%' + ' , 50%)';
    if (players[i] === 'Вы') {
      ctx.fillStyle = ' rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(GIST_START_X + (GIST_GAP * i), CLOUD_HEIGHT - (GAP * 3), GIST_WIDTH, -(Math.round(times[i]) * GIST_MAX_HEIGHT) / maxTime);
  }
};
