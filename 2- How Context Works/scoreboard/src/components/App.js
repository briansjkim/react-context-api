import React, { Component } from 'react';
import Header from './Header';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
// we remove the Provider component from App because
  //  1. we want to move to the Provider component to the top-most level of the app
  // 2. This way, App has a lot less responsibilities to manage and handle which, in turn,
  // makes App easier to read and manage
  render() {
    return (
      <div className="scoreboard">
        <Header />
        <PlayerList />
        <AddPlayerForm />
      </div>
    );
  }
}

export default App;
