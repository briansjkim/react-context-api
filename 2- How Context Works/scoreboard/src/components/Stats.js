import React from 'react';
import { Consumer } from './Context';

const Stats = () => {
  return (
    <Consumer>
      {/* this function is necessary and it returns the part of the UI you want to render */}
      { context => {
          const totalPlayers = context.players.length;
          const totalPoints = context.players.reduce( (total, player) => {
            return total + player.score;
          }, 0);

        return (
          <table className="stats">
            <tbody>
              <tr>
                <td>Players:</td>
                <td>{ totalPlayers }</td>
              </tr>
              <tr>
                <td>Total Points:</td>
                <td>{ totalPoints }</td>
              </tr>
            </tbody>
          </table>
        )
      }}
    </Consumer>
  );
}

export default Stats;