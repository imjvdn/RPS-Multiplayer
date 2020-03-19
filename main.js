//Variables
var playerWin = 0;
var aiWin = 0;
var draws = 0;
var playerRoll;
var gameMessage = $('#game-message');
var scoreBoard = $('#scoreboard');

$('.rock').click(function() {
  playerRoll = 1;
  var computerRoll = Math.floor(Math.random() * 3 + 1);

  if (computerRoll === playerRoll) {
    gameMessage.fadeOut(300, function() {
      gameMessage
        .html('')
        .append(
          '<p class="game-draw">Draw!</p>' +
            '<p class="computer-message">The Computer chose rock too!</p>'
        )
        .fadeIn(300);

      draws++;
      $('#draws')
        .html('')
        .append(draws);
    });
  } else if (playerRoll === 1 && computerRoll === 2) {
    gameMessage.fadeOut(300, function() {
      gameMessage
        .html('')
        .append(
          '<p class="game-lose">You lost</p>' +
            '<p class="computer-message">The Computer chose paper!</p>'
        )
        .fadeIn(300);

      aiWin++;
      $('#losses')
        .html('')
        .append(aiWin);
    });
  } else {
    gameMessage.fadeOut(300, function() {
      gameMessage
        .html('')
        .append(
          '<p class="game-won">You Won!</p>' +
            '<p class="computer-message">The Computer chose scissors!</p>'
        )
        .fadeIn(300);

      playerWin++;

      $('#wins')
        .html('')
        .append(playerWin);
    });
  }
  updatefirebase();
});

$('.paper').click(function() {
  playerRoll = 2;
  var computerRoll = Math.floor(Math.random() * 3 + 1);

  if (computerRoll === playerRoll) {
    gameMessage.fadeOut(300, function() {
      gameMessage
        .html('')
        .append(
          '<p class="game-draw">Draw!</p>' +
            '<p class="computer-message">The Computer chose paper too!</p>'
        )
        .fadeIn(300);

      draws++;
      $('#draws')
        .html('')
        .append(draws);
    });
  } else if (playerRoll === 2 && computerRoll === 1) {
    gameMessage.fadeOut(300, function() {
      gameMessage
        .html('')
        .append(
          '<p class="game-won">You Won!</p>' +
            '<p class="computer-message">The Computer chose rock!</p>'
        )
        .fadeIn(300);

      playerWin++;
      $('#wins')
        .html('')
        .append(playerWin);
    });
  } else {
    gameMessage.fadeOut(300, function() {
      gameMessage
        .html('')
        .append(
          '<p class="game-lose">You lost</p>' +
            '<p class="computer-message">The Computer chose scissors</p>'
        )
        .fadeIn(300);

      aiWin++;
      $('#losses')
        .html('')
        .append(aiWin);
    });
  }
  updatefirebase();
});

$('.scissors').click(function() {
  playerRoll = 3;
  var computerRoll = Math.floor(Math.random() * 3 + 1);

  if (computerRoll === playerRoll) {
    gameMessage.fadeOut(300, function() {
      gameMessage
        .html('')
        .append(
          '<p class="game-draw">Draw!</p>' +
            '<p class="computer-message">The Computer chose scissors too!</p>'
        )
        .fadeIn(300);

      draws++;
      $('#draws')
        .html('')
        .append(draws);
    });
  } else if (playerRoll === 3 && computerRoll === 2) {
    gameMessage.fadeOut(300, function() {
      gameMessage
        .html('')
        .append(
          '<p class="game-won">You Won!</p>' +
            '<p class="computer-message">The Computer chose paper</p>'
        )
        .fadeIn(300);

      playerWin++;
      $('#wins')
        .html('')
        .append(playerWin);
    });
  } else {
    gameMessage.fadeOut(300, function() {
      gameMessage
        .html('')
        .append(
          '<p class="game-lose">You lost</p>' +
            '<p class="computer-message">The Computer chose rock</p>'
        )
        .fadeIn(300);

      aiWin++;
      $('#losses')
        .html('')
        .append(aiWin);
    });
  }
  updatefirebase();
});

$('#reset-scores').click(function() {
  playerWin = 0;
  $('#wins').html(playerWin);
  draws = 0;
  $('#draws').html(draws);
  aiWin = 0;
  $('#losses').html(aiWin);
});
