/**
 * 我们使用StyleSheet.create 集中定义组件的样式
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text,TextInput, ScrollView,View} from 'react-native';



type Props = {};
export default class BlinkApp extends Component<Props> {
  constructor(props){
    super(props);
    this.state={text:''};
  }
 render(){
   return(
     
     <View style={{padding:20,backgroundColor:'white'}} >
     <ScrollView showsVerticalScrollIndicator={false}>
    <TextInput style={{height:40}} placeholder='这是占位符' 
    onChangeText={(text)=>this.setState({text})}/>
    <Text style={{padding:10,fontSize:100}}>
      {this.state.text.split('').map((word)=>word&&':pizza:').join('')}
    </Text>
    </ScrollView>
     </View>

   );
 }
}

