import React, {Component} from 'react';
import {View, Text, BackHandler, TouchableOpacity} from "react-native";

let base = "ES6Base";
export default class ES6Base extends Component {


    constructor(props) {
        super(props);

        this.dog = "huanhuan";
    }


    render() {

        {
            this.letFunction()
        }
        return (
            <View>
                <TouchableOpacity >
                    <TouchableOpacity onPress={()=>this.turnES6Field()}>
                        <Text>Es6基础之声明变量及其注意事项</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.turnES6Destructing()}>
                        <Text>Es6基础之解构</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>

        );
    }

    componentDidMount() {

        console.log("狗狗狗:" + this.dog);
        this.dog = "gaga";
        console.log("狗狗狗:" + this.dog);
        this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload => {
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

        console.log("let是作用块作用域,可以修改,当前的base${base}" + base);
        base = "能不能不要说";
        console.log("let是作用块作用域,可以修改,当前的base${base}" + base);
        for (let i = 0; i < 10; i++) {
            console.log("i:${i}" + i);
            let j = "apple" + i;
            console.log("i:${i}" + j);

        }


    }

    turnES6Field() {
        this.props.navigation.navigate('es6Field');
    }

    turnES6Destructing() {

        this.props.navigation.navigate("es6Desctructing");

    }
}
