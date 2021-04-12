import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import Perfil from '../components/Perfil';
import { globalStyles } from "./Home";
export default class Cadastro extends Component {
  constructor (props) {
    super(props);    
    this.state = {
      modalVisible: false,
      name: "",
      email: "",
      age: ""
    };
  }

  render() {
    return (
      <View style={{flex: 1,
        justifyContent: 'center',
        alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Cadastro</Text>

        <TextInput
          placeholder="Nome"
          onChangeText={(name) => {this.setState({name})}}
        ></TextInput>
        <TextInput
          placeholder="Idade"
          onChangeText={(age) => {this.setState({age})}}
        ></TextInput>
        <TextInput
          placeholder="E-mail"
          onChangeText={(email) => {this.setState({email})}}
        ></TextInput>

        <Perfil
          modalVisible={this.state.modalVisible}
          closeModal={
            () => {
              this.setState({modalVisible: false})
              this.props.navigation.navigate("Home");
            }
          }
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
          />

        <TouchableHighlight
          style={globalStyles.openButton}
          onPress={() => {
            this.setState({ modalVisible: true });
          }}
        >
          <Text style={globalStyles.textStyle}>Show Modal</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
