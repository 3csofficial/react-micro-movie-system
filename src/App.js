import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Componentes
import Movies from './components/List/Movies'
import MyList from './components/List/MyList'
// Provider
import { Provider } from 'react-redux'
// Redux
import store from './store'


function App() {
  return (
    <Router>
    <Provider store={store}>
      <div className="container">
          <Switch>
            <Route exact path="/" component={Movies}  />
            <Route exact path="/favourite" component={MyList}  />
          </Switch>
      </div>
    </Provider>
    </Router>

  );
}

export default App;
