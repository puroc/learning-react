import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import ComponentList from './components/list';
import ComponentDetails from './components/details';
import ComponentNotFound from './components/notfound.js';
import { BrowserRouter, Router, HashRouter, Match, Route, Link, hashHistory, IndexLink } from 'react-router-dom'

export default class Root extends React.Component {

  render() {
    return (
      <HashRouter history={ hashHistory }>
        <div>
          <Route
                 exact
                 path="/"
                 component={ Index } />
          <Route
                 path="/details"
                 component={ ComponentDetails } />
          <Route
                 path="/list/:id"
                 component={ ComponentList } />
        </div>
      </HashRouter>
      );
  }
  ;
}

ReactDOM.render(<Root/>, document.getElementById('example'));
