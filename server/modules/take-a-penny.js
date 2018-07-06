let games = {fakeGame: true};
let gameCounter = 0;

takeAPenny = (io) => {

  io.on('connection',client => {
    console.log(`Connected to ${client.id}`);
  });

  io.on('getGames',client => {
    client.emit('games',games);
  });

  io.on('newGame',client => {
    let game = `game${gameCounter}`;
    gameCounter += 1;
    games[game] = true;
    client.join(game);
  })
}

module.exports = takeAPenny;