
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import City from './src/components/city/City'
import { quixada, juazeiro, fortaleza, limoeiro } from './src/components/city/cities'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: {
        quixada,
        juazeiro,
        fortaleza,
        limoeiro
      },
      greater: [quixada],
      worst: [juazeiro, fortaleza, limoeiro]
    }
  }

  renderCity(key, city) {
    return (
      <View key={key}>
        <City name={city.name} votesAmount={this.state.cities[key].votes} />

        <Button
          title='Votar'
          onPress={
            () => {
              let newGreaterArray = this.state.greater
              let newWorstArray = this.state.worst

              if(this.state.greater.includes(city)) {
                let indice = this.state.greater.indexOf(city)
                newGreaterArray.splice(indice, 1, {...city, votes: city.votes +1})
              }
              if(this.state.worst.includes(city) && this.state.worst.length > 1){
                let indice = this.state.worst.indexOf(city)
                newWorstArray.splice(indice, 1)
              }
              
              const newValue = {...this.state.cities}
              newValue[key].votes += 1

              this.setState({
                cities: {...newValue},
                greater: newGreaterArray,
                worst: newWorstArray
              })

              this.updateWorstAndGreaterCity()
            }
          }
          />
      </View>
    )
  }

  setGreater(){
    let greaterCity = this.state.greater[0]
    Object.values(this.state.cities).forEach( city => {
      if(!this.state.greater.includes(city)){
        if(city.votes > greaterCity.votes) {
          let newValue = [city]
          this.setState({greater: newValue})
          greaterCity = city;
        }
        else if(city.votes === greaterCity.votes && city.id != greaterCity.id) {
          let newValue = [...this.state.greater, city]
          this.setState({greater: newValue})
        }
      }
    })
  }

  setWorst() {
    const worstCity = this.state.worst[0]
    let newValue = [...this.state.worst]
    Object.values(this.state.cities).forEach( city => {
      if(!this.state.worst.includes(city) && city.votes === worstCity.votes) newValue.push(city)
    })
    this.setState({worst: newValue})
  }

  updateWorstAndGreaterCity(){
    this.setGreater()
    this.setWorst()
  }

  renderCityName(name){
    return (
      <span key={name}>{name}, </span>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Votação de Cidades</Text>

        {Object.entries(this.state.cities).map(([key, value]) => this.renderCity(key, value))}

        <Text><strong>As mais votadas:</strong> {Object.values(this.state.greater).map(city => this.renderCityName(city.name))}</Text>
        <Text><strong>As menos votadas:</strong> {Object.values(this.state.worst).map(city => this.renderCityName(city.name))}</Text>

        <Text style={styles.obs}>
          Obs: Por padrão, deixei Quixadá sendo a mais votada, e o resto sendo as menos votadas,
          só para facilitar algumas verificações de início de votação.
        </Text> 
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 20,
    fontWeight: 500
  },
  horizontalContainer: {
    display: 'flex',
  },
  obs:{
    marginTop: 50,
    paddingHorizontal: 20,
    fontSize: 12,
    color: "red"
  }
});
