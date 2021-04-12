import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImcApp from './src/ImcApp'

export default function App() {
  return (
    <View style={styles.container}>
      <ImcApp></ImcApp>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    backgroundColor: '#eaeaea',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
