import React from 'react';
import {View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <Header headerText={'Albums!'} />
      <AlbumList />
    </View>
  );
};

export default App;
