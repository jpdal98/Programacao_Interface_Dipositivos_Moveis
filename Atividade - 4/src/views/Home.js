import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class Home extends Component {
  render(){
    return (
      <View style={{flex: 1,
        justifyContent: 'center',
        alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Atv 4</Text>
        <Button 
          style={globalStyles.openButton}
          title="Cadastro"
          onPress={
            () => this.props.navigation.navigate('Cadastro')}
        ></Button>
        <Button 
          style={globalStyles.openButton}
          title="IMC"
          onPress={
            () => this.props.navigation.navigate('IMC')}
        ></Button>
        <Button
          style={globalStyles.openButton} 
          title="Sobre"
          onPress={
            () => this.props.navigation.navigate('Sobre')}
        ></Button>
      </View>
    )
  }
}

const globalStyles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  }
})

