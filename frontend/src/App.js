import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Orders from './pages/Orders';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/orders" component={Orders} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
