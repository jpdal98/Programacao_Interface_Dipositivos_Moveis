import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default class FirebaseApp extends Component {

  constructor(props) {
    super(props);
    this.getAlunos();

    this.state = {nome: '', idade: '', curso: ''}
  }

  getAlunos = async () => {
    const userDoc = await firestore().collection('alunos')
    .doc('52Cyy7hhwGFwnLfK1Rn8').get()

    // console.log(userDoc._data);
    this.setState({nome: userDoc._data.nome, idade: userDoc._data.idade, curso: userDoc._data.curso})
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <Text>nome: {this.state.nome}</Text>
        <Text>idade: {this.state.idade}</Text>
        <Text>curso: {this.state.curso}</Text>
      </View>
    );
  }
}
