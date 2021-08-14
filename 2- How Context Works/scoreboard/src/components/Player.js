import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Counter from './Counter';

class Player extends PureComponent {

  static propTypes = {
    index: PropTypes.number.isRequired
  };

  render() {
    
    const { 
      index,
    } = this.props;

    return (
      <div className="player">
        <Consumer>
          {/* same as what I did in PlayerList, we can extract actions and players from the Consumer */}
        { ({ actions, players }) => (
          <span className="player-name">
            <button className="remove-player" onClick={() => actions.removePlayer(players[index].id)}>✖</button>
            { players[index].name }
          </span>
        )}
      </Consumer>
  
        <Counter index={index} />
      </div>
    );
  }
}

export default Player;