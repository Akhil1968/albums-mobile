import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import CameraComponent from './src/components/CameraComponent';
import Albums from './Albums';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="albums"
          component={Albums}
          title="Albums"
          initial
        />
        <Scene
          key="camera"
          component={CameraComponent}
          title="Camera"
        />
      </Scene>
    </Router>
  );
}

export default App;