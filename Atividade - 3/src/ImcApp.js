import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet, Text } from 'react-native';
import ImcCalc from './ImcCalc'

export default class ImcApp extends Component {
  constructor(props) {
    super(props);

    this.state = { height: 0, weight: 0, heightForCalc: 0, weightForCalc: 0 };
  }

  renderImcCalc() {
    return
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite a sua altura"
          onChangeText={
            (height) => this.setState({ height })
          }
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Digite o seu peso"
          onChangeText={
            (weight) => this.setState({ weight })
          }
        ></TextInput>
        <Button
          title="Calcular IMC"
          onPress={() => {
            this.setState({ heightForCalc: this.state.height, weightForCalc: this.state.weight });
          }}
        >
        </Button>
        <ImcCalc altura={this.state.heightForCalc} peso={this.state.weightForCalc}></ImcCalc>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    maxWidth: '80%',
    display: 'flex',
    flexGrow: 1,
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000000'
  }
})
