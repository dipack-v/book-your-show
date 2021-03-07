import './App.css';
import React from 'react';
import Shows from './show/Shows';


class App extends React.Component {
  state = {
    shows: []
  }
  render() {
    return (
      <div className="App">
        <Shows />
      </div>
    );
  }
}

export default App;
