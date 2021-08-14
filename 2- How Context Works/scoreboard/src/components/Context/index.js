import React, { Component } from 'react';

// this returns an obj w/ Consumer and Provider properties that are also objects
const ScoreboardContext = React.createContext();

export class Provider extends Component {
    state = {
        players: [
          {
            name: "Guil",
            score: 0,
            id: 1
          },
          {
            name: "Treasure",
            score: 0,
            id: 2
          },
          {
            name: "Ashley",
            score: 0,
            id: 3
          },
          {
            name: "James",
            score: 0,
            id: 4
          }
        ]
      };

      // player id counter
    prevPlayerId = 4;

    handleScoreChange = (index, delta) => {
        this.setState( prevState => ({
        score: prevState.players[index].score += delta
        }));
    }

    handleAddPlayer = (name) => {
        this.setState( prevState => {
        return {
            players: [
            ...prevState.players,
            {
                name,
                score: 0,
                id: this.prevPlayerId += 1
            }
            ]
        };
        });
    }

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
        return {
            players: prevState.players.filter(p => p.id !== id)
        };
        });
    }
    
    render() {
        return (
            <ScoreboardContext.Provider value={{
                players: this.state.players,
                actions: {
                  changeScore: this.handleScoreChange,
                  removePlayer: this.handleRemovePlayer,
                  addPlayer: this.handleAddPlayer
                }
            }}>
                {/* this.props.children lets the App component along with
                all of the child components to be passed into Provider and rendered */}
                    { this.props.children }
            </ScoreboardContext.Provider>
        );
    };
};

export const Consumer = ScoreboardContext.Consumer;

