import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class ImcMsg extends Component {
  constructor(props) {
    super(props);
    this.state = { situation: "" }
  }

  situationText(result) {
    if (result < 17)
      return "Muito abaixo do peso";
    else if (result >= 17 && result < 18.5)
      return "Abaixo do peso";
    else if (result >= 18.5 && result < 25)
      return "Peso normal";
    else if (result >= 25 && result < 30)
      return "Acima do peso";
    else if (result >= 30 && result < 35)
      return "Obesidade I";
    else if (result >= 35 && result < 40)
      return "Obesidade II";
    else if (result >= 40 && result != Infinity)
      return "Obesidade III";
    return "Aguardando dados..."
  }

  situationTextColor(result) {
    if (typeof result != Number && result != 0)
      return { color: 'black' }
    else if (result >= 18.5 && result < 25)
      return {
        color: 'blue'
      }
    return {
      color: 'red'
    }
  }

  render() {
    let { result } = this.props
    return (
      <Text style={styles.situation}>Situação: <Text style={this.situationTextColor(result)}>{this.situationText(result)}</Text></Text>
    );
  }
}

const styles = StyleSheet.create({
  situation: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});