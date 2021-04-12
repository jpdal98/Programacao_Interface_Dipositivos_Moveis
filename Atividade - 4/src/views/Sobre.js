import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { globalStyles } from './Home';

export default class Sobre extends Component {
  render() {
    return (
      <View style={{flex: 1,
        justifyContent: 'center',
        alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Sobre</Text>
        <Button 
          style={globalStyles.openButton}
          title="Home"
          onPress={
            () => this.props.navigation.goBack()}
        ></Button>
      </View>
    )
  }
}