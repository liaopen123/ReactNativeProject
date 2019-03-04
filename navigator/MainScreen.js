import React, {Component} from 'react';
import {View, Text,Alert} from 'react-native';


export default class MainScreen extends Component {


    render() {

        return (
            <View>
                <Text  onPress={()=>{this.props.navigation.navigate('details',{
                    name:'marongting',
                    callBack:(backdata)=>{
                        Alert.alert(backdata);
                    }
                })}}>我是主页</Text>
            </View>

        );
    }
    turnHome() {
        console.info('turnHome');
        this.props.navigation.navigate('login');

    }

}
