/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';



type Props = {};
export default class BlinkApp extends Component<Props> {
  render(){
    return(
      <View>
        <Blink text='lph'/>
        <Blink text='廖鹏辉'/>
        <Blink text='pony'/>
      </View>
    );
  }
}
class Blink extends Component{
  constructor(props){
    super(props);
    this.state = {showText:true};

    setInterval(() => {
      this.setState(previousState=>{
        return {showText:!previousState.showText};
      });
    }, 1000);
  }
  render(){
    let display = this.state.showText?this.props.text:'';
    return(
      <Text>{display}</Text>
    );
  }
}

