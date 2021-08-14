import React from 'react';
import { Consumer } from './Context';
import PropTypes from 'prop-types';
import Player from './Player';

const PlayerList = (props) => {
  return (
    <Consumer>
      { context => (
        <React.Fragment>
        {context.players.map( (player, index) =>
          <Player 
            {...player}
            key={player.id.toString()} 
            index={index}
            // do not replace props w/ context bc context is ONLY this.state.players in App.js
            changeScore={props.changeScore}
            removePlayer={props.removePlayer}           
          />
        )}
      </React.Fragment>
      )}
    </Consumer>
  );
}

PlayerList.propTypes = {
  changeScore: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
};

export default PlayerList;