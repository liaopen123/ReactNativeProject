/**
 * 我们使用StyleSheet.create 集中定义组件的样式
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text,FlatList, ScrollView,View} from 'react-native';



type Props = {};
export default class BlinkApp extends Component<Props> {
  constructor(props){
    super(props);
    this.state={text:''};
  }
 render(){
   return(
     <View  style={[style.container,backgroundcolor='white']}>
     <FlatList data={[
       {key:'lph'},
       {key:'lph1'},
       {key:'lph2'},
       {key:'lph3'},
       {key:'lph4'},
       {key:'lph5'},
       {key:'lph6'},
       {key:'lph7'},
       {key:'lph8'},
       {key:'lph9'},
       {key:'lph10'},
       {key:'lph11'},
       {key:'lph12'},
       {key:'lph13'},
       {key:'lph14'},
       {key:'lph14'},
       {key:'lph14'},
       {key:'lph14'},
       {key:'lph14'},
       {key:'lph14'},
       {key:'lph14'},
       {key:'lph14'},
       {key:'lph14'},
       {key:'lph14'},
       {key:'lph14'},
       {key:'lph14'},
       {key:'lph14'},
       {key:'lph14'},
       {key:'lph14'},
       {key:'lph14'},
        {key:'lph14'},
       {key:'lph14'},
       {key:'lph14'},
       {key:'lph14'}, 
        {key:'lph14'},
       {key:'lph14'},
       {key:'lph14'},
       {key:'lph14'},
       {key:'lph14'},
       {key:'lph14'},  
       {key:'lph14'},
     ]}
     renderItem={({item}) => <Text style={style.item}>{item.key}</Text>}/>
     </View>

   );
 }
}

const style =  StyleSheet.create({
  container:{
      flex:1,
      paddingTop:22,
      backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item:{
    padding:10,
    fontSize:18,
    height:44,
  }
});
