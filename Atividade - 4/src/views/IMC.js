import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from "./Home";

export default class IMC extends Component {
  constructor(props) {
    super(props);

    this.state = { height: 0, weight: 0, heightForCalc: 0, weightForCalc: 0 }
  }
  render() {
    return (
      <View style={{flex: 1,
        justifyContent: 'center',
        alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>IMC</Text>
        
        <TextInput
          placeholder="Peso"
          onChangeText={
            (weight) => this.setState({ weight })
          }
        ></TextInput>
        <TextInput
          placeholder="Altura"
          onChangeText={
            (height) => this.setState({ height })
          }
        ></TextInput>

        <Button
          style={globalStyles.openButton} 
          title="OK"
          onPress={
            () => this.props.navigation.navigate('Resultado', {height: this.state.height, weight: this.state.weight})}
        ></Button>
      </View>
    )
  }
}