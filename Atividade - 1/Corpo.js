import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Corpo extends Component {
  render(){
    let url = { uri: 'https://avatars3.githubusercontent.com/u/33665353?s=460&u=08931e6db8481ae02fba013548637940ed09e951&v=4'}
    return (
      <Image source={url} style={{width: 150, height: 150}}></Image>
    );
  }
}
