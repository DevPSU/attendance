import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppLoading, Asset} from "expo";

import Navigation from './navigation';
import { Block } from './components';
import * as constants from './constants';
import {render} from "react-native-web";

// import all used images
const images = [
    require('./assets/images/plants_1.png'),
    require('./assets/images/plants_2.png'),
    require('./assets/images/explore_1.png'),
    require('./assets/images/explore_2.png'),
    require('./assets/images/explore_3.png'),
    require('./assets/images/explore_4.png'),
    require('./assets/images/explore_5.png'),
    require('./assets/images/explore_6.png'),
    require('./assets/images/avatar.png'),
];

export default class App extends React.Component {
  state = {
    isLoadingComplete:false,
  }

  handleResourceAsync = async () => {
    // we're caching all the images
    // for better performance on the app

    const cacheImages = images.map(img => {
      return Asset.fromModule(image).downloadAsync()
    });

    return Promise.all(cacheImages);
  }

  render() {
    return (
        <View style={styles.container}>
          <Navigation/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
