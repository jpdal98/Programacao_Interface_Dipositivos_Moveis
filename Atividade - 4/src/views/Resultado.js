import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Resultado extends Component {

  situationText(result) {
    if(typeof result != Number)
      return "Aguardando dados..."
    else if (result < 17)
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
  }

  situationTextColor(result) {
    if (result != 0)
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
    const height = parseFloat(this.props.navigation.getParam('height', 'nulo'));
    const weight = parseFloat(this.props.navigation.getParam('weight', 'nulo'));
    const result = parseFloat((weight / (height * height)).toFixed(2));

    return (
      <View style={{flex: 1,
        justifyContent: 'center',
        alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Resultado</Text>
          <View>
          <Text>
            Seu IMC é {height && weight ? result : "..."}
          </Text>
          <Text style={styles.situation}><Text style={this.situationTextColor(result)}>{this.situationText(result)}</Text></Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  situation: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});