/**
 * 我们使用StyleSheet.create 集中定义组件的样式
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';



type Props = {};
export default class BlinkApp extends Component<Props> {
 render(){
   return(
     <View>
       <Text style={styles.bigBlue}>bigBlue</Text>
       <Text  style={styles.red}>red</Text>
       <Text  style={[styles.bigBlue,styles.red]}>bigRed</Text>
       <Text  style={[styles.red,styles.bigBlue]} >BigBlue</Text>

     </View>
   );
 }
}

const  styles =  StyleSheet.create({
  bigBlue:{
    color:'blue',
    fontWeight:'bold',
    fontSize:30,
  },
  red:{
    color:'red'
  }
});
