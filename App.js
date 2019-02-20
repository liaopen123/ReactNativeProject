'use strict';
import React,{Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  PixelRatio,
} from 'react-native';


export  default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>大家好 我是廖鹏辉 \\n 很高兴认识大家</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container:{
      paddingTop:60,
      backgroundColor:"#eae7ff",
      flex:1,
      margin:1,
      borderWidth:1,
      borderColor:"#6435c9",
      borderRadius:16,
      shadowColor:"#6435c9",
      shadowOpacity:0.6,
      shadowRadius:2,
      shadowOffset:{
        height:1,
        width:0
      }
    },
    title:{
      fontSize:26,
      textAlign:"center",
      fontStyle:"italic",
      letterSpacing:2,
      lineHeight:33,
      fontFamily:"Courier",
      fontWeight:"400",
      color:"#6435c9",
      textDecorationLine:"underline",
      textDecorationStyle:"dotted"
    }

  }
);
