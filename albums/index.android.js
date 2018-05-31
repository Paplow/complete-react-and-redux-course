// For Android Only

// Import a library
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'}/>
        <AlbumList/>
      </View>
  );

// Register the component
AppRegistry.registerComponent('albums', () => App);