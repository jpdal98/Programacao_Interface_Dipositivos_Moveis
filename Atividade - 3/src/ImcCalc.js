import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImcMsg from './ImcMsg'

export default class ImcCalc extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    let { altura, peso } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Seu IMC é {altura && peso ? (peso / (altura * altura)).toFixed(2) : "..."}
        </Text>
        <ImcMsg result={(peso / (altura * altura)).toFixed(2)}></ImcMsg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  message: {
    fontSize: 25,
    fontWeight: 'bold'
  }
})
