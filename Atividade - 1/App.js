import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './Cabecalho';
import Corpo from './Corpo';
import Disciplina from './Disciplina'

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho nome='Josue' curso='Engenharia de Software'></Cabecalho>
      <Corpo></Corpo>
      <Disciplina nome='Projeto de Interfaces para Dispositivos Móveis'></Disciplina>
      <Disciplina nome='Gerência de Configuração'></Disciplina>
      <Disciplina nome='Projeto de Pesquisa Científica e Tecnológica'></Disciplina>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
