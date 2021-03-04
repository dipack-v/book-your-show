import './App.css';
import React from 'react';
import axios from 'axios';
import Show from './show/Show';


class App extends React.Component {
  state = {
    shows: []
  }
  render() {
    return (
      <div className="App">

        {this.state.shows.map(show => {
          return <Show id={show.id} name={show.name} showTime={show.showTime} key={show.id} />
        })}

      </div>
    );
  }

  componentDidMount() {
    axios.get('/shows')
      .then(res => {
        const showList = res.data.shows;
        this.setState({ shows:showList });
      });
  }
}

export default App;
