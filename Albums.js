import React from 'react';
import { View, Button } from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { Actions } from 'react-native-router-flux';

import AlbumList from './src/components/AlbumList';
import reducers from './src/reducers';

export default class Albums extends React.Component {
  /* !!!!IMPORTANT!!!! store creation should be outside the render() method */
  store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  render() {
    return (
      <Provider store={this.store}>
        <View style={{ flex: 1 }}>
          <AlbumList />
          <Button title="Camera" onPress={() => Actions.camera()}>   </Button>
        </View>
      </Provider>
    );
  }
}
