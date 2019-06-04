import React,{Component} from 'react';
import {View, Text, BackHandler, TouchableOpacity} from "react-native";

let base= "ES6Base";
export  default class ES6Base  extends Component{

    render() {

        {this.letFunction()}
        return(
            <View>
                <TouchableOpacity onPress={()=>this.turnHome()}>
                <Text>Es6基础</Text>
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
        this.props.navigation.navigate('home', {
            callBack: () => {
                // 从单品页回来继续播放
            }
        });

    }

    letFunction() {

        console.log("let是作用块作用域,可以修改,当前的base${base}"+base);
        base = "能不能不要说";
        console.log("let是作用块作用域,可以修改,当前的base${base}"+base);
        for (let i = 0; i <10; i++) {
            console.log("i:${i}"+i);
            let j = "apple"+i;
            console.log("i:${i}"+j);

        }



    }
}
