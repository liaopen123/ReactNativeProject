/**
 * 我们使用StyleSheet.create 集中定义组件的样式
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';



type Props = {};
export default class BlinkApp extends Component<Props> {
 render(){
   return(
     <View style={{flex:1,flexDirection:"row-reverse"}}>
     <View style={{flex:1,backgroundColor:'powderblue'}}></View>
     <View style={{flex:2,backgroundColor:'skyblue'}}></View>
     <View style={{flex:3,backgroundColor:'steelblue'}}></View>
     </View>
   );
 }
}

