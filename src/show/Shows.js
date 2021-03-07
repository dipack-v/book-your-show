import React from 'react';
import axios from 'axios';
import Show from './Show';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


class Shows extends React.Component {
  state = {
    shows: []
  }
  render() {
    return (
      <div className="shows">
        <Router>

          {this.state.shows.map(show => {
            return <Show id={show.id} name={show.name} showTime={show.showTime} key={show.id} ><Link to={`/reservations/${show.id}`}>{show.name} </Link></Show>
          })}


          <Switch>
            <Route path="/reservations/:id" children={<ShowID />}>
                ShowID
            </Route>
          </Switch>

        </Router>

      </div>
    );
  }

  componentDidMount() {
    axios.get('/shows')
      .then(res => {
        const showList = res.data.shows;
        this.setState({ shows: showList });
      });
  }
}

function ShowID() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default Shows;
