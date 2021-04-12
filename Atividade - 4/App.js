import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/routes/Routes';

export default class App extends Component {
  render(){
    return (
      <SafeAreaProvider>
        <Routes/>
      </SafeAreaProvider>
    );
  }
}
