//@ts-check
import openSocket from 'socket.io-client';
import commonEmitter from './eventEmitter';

export default class takeAPenny {
  constructor() {
    this.socket = null;
    this.games = {};
  }

  connect() {
    this.socket = openSocket('http://localhost:5000');
    this.socket.on('games',data => {
      this.games = data.games;
    });
  }

  getGames() {
    this.socket.emit('getGames',games => {
      this.games = {
        ...games
      }
      commonEmitter.emit('gamesRetrieved',this.games);
    });
  }

  newGame() {
    this.socket.emit('newGame');
  }

  joinGame(gameId) {
    this.socket.emit('joinGame',{gameId});
  }
}
