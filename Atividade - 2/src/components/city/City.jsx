import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native"

export default class City extends Component {

  render() {
    const { name } = this.props;
    return (
      <View>
        <Text style={styles.text}>{ name }: <span>{this.props.votesAmount}</span></Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  text: {
    marginBottom: 10
  }
})