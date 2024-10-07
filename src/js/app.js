const { Game, 
    GameSavingData, 
    readGameSaving: loadGame, 
    writeGameSaving: saveGame
} = require('./game');

const game = new Game();
game.start();