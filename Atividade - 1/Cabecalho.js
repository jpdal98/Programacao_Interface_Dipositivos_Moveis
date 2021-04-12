import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Cabecalho extends Component {
  render(){
    return (
      <View>
        <Text>Nome do aluno: {this.props.nome}</Text>
        <Text>Curso do aluno: {this.props.curso}</Text>
      </View>
    );
  }
}
