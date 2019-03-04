import React,{Component} from 'react';
import {View,Text} from "react-native";

export  default class LoginScreen  extends Component{

    render() {

        return(
            <View>
                <Text   onPress={()=>this.turnHome()}>我是我的界面</Text>
            </View>

        );
    }

    turnHome() {
        this.props.navigation.navigate('home');

    }
}
