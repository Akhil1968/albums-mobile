import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

//reducers
import reducers from './src/reducers';

//components
import Albums from './Albums';
import Counter from "./src/components/Counter";

const App = () => {
  /* !!!!IMPORTANT!!!! store creation should be outside the render() method */
  let store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <Router>
        <Scene key="root">
          <Scene key="albums"
            component={Albums}
            title="Albums"
            initial
          />
          <Scene
            key="Counter"
            component={Counter}
            title="Counter"
          />
        </Scene>
      </Router>
    </Provider>
  );
}

export default App;

