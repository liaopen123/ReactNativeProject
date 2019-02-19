/**
 * 我们使用StyleSheet.create 集中定义组件的样式
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text,SectionList, ScrollView,View} from 'react-native';



type Props = {};
export default class BlinkApp extends Component<Props> {
  constructor(props){
    super(props);
    this.state={text:''};
  }
 render(){
   return(
     <View  style={[styles.container,backgroundcolor='white']}>
     <SectionList sections={[
       {title:'lph11',data:['Devin']},
       {title:'lph222',data:['Devin','James','Jillian','Jimmy','Joel','Julie']},
     ]}
     renderItem={({item}) => <Text style={[styles.item,backgroundcolor='white']}>{item}</Text>}
     renderSectionHeader={({section}) => <Text style={[styles.sectionHeader,backgroundcolor='white']}>{section.title}</Text>}/>
     </View>

   );
 }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: 'white',
    color:'white'
  },
})

