/**
 * 我们使用StyleSheet.create 集中定义组件的样式
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';



type Props = {};
export default class BlinkApp extends Component<Props> {
 render(){
   return(
     <View style={{flex:1,flexDirection:"column",justifyContent:'center',backgroundColor:'white'}}>
     <View style={{width:50,height:50,backgroundColor:'powderblue'}}></View>
     <View style={{width:50,height:50,backgroundColor:'skyblue'}}></View>
     <View style={{width:50,height:50,backgroundColor:'steelblue'}}></View>
     </View>
   );
 }
}

