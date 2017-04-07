/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View
} from 'react-native';
import MapView from 'react-native-maps'
import SQLite from 'react-native-sqlite-storage';
import { zip, unzip, unzipAssets, subscribe } from 'react-native-zip-archive';

const onButtonPress = () => {
    Alert.alert("Button Pressed!");
}
export default class FinalProject extends Component {

    render() {
    return (
      <View style={styles.container}>
          <TouchableHighlight onPress={this.onButtonPress}
              <Image

                  />
          </TouchableHighlight>
          <MapView style={styles.maps}
              initialRegion={{
                  latitude: 43.467517,
                  longitude: -79.6876659,
                  latitudeDelta: 0.07,
                  longitudeDelta: 0.07,
              }}
              />
      </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  maps: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
  },

});

AppRegistry.registerComponent('FinalProject', () => FinalProject);
