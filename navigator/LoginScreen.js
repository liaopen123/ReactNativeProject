import React,{Component} from 'react';
import {View, Text, BackHandler, TouchableOpacity} from "react-native";

export  default class LoginScreen  extends Component{

    render() {

        return(
            <View>
                <TouchableOpacity onPress={()=>this.turnHome()}>
                <Text>我是登陆</Text>
                </TouchableOpacity>
            </View>

        );
    }

    componentDidMount() {
        this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>{
                console.log('willBlur离开界面');
                BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
        }


        );
    }


    componentWillUnmount() {
        console.log('componentWillUnmountcomponentWillUnmount');
        this._willBlurSubscription && this._willBlurSubscription.remove();
    }

    turnHome() {
        this.props.navigation.navigate('home');

    }
}
