import React,{Component} from 'react';
import {View,Text} from "react-native";

export  default class LoginScreen  extends Component{

    render() {

        return(
            <View>
                <Text   onPress={()=>this.turnHome()}>我是登陆</Text>
            </View>

        );
    }

    turnHome() {
        this.props.navigation.navigate('home');

    }
}
