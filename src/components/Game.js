import React, {Component} from 'react';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      app = this.props.app
    }
  }

  render() {
    return (
      <div>
        <GameList />
      </div>
    )
  }
}