import React from 'react';
import { Consumer } from './Context';
import Player from './Player';

const PlayerList = (props) => {
  return (
    <Consumer>
      {/*  just like with props, we can use destructuring to extract the state received from Provider */}
      { ({ players }) => (
        <React.Fragment>
        {players.map( (player, index) =>
          <Player 
          // removed the spread attribute for player's name, score, and id since we can just access them through Consumer
            key={player.id.toString()} 
            index={index}      
          />
        )}
      </React.Fragment>
      )}
    </Consumer>
  );
}

export default PlayerList;