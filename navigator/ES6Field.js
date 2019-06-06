import React, {Component} from 'react';
import {View, Text,   StyleSheet, TouchableOpacity} from "react-native";

let animal = 'dog';
export  default  class ES6Field extends Component{




    componentWillMount(): void {
        console.log(animal);

    }


    componentDidMount(): void {



    }

    render(){


        return(<View style={styles.container}>

            <Text>声明属性变量</Text>

        </View>);
    }



}


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'black',
    },





});
