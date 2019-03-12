import React from 'react';
import { View, Button } from 'react-native';

import { Actions } from 'react-native-router-flux';

import AlbumList from './src/components/AlbumList';


const Albums = () => (
        <View style={{ flex: 1 }}>
          <AlbumList />
          <Button 
            title="Counter" 
            color="#841584"
            onPress={() => Actions.Counter()}>   
          </Button>
        </View>
    );


export default Albums;
