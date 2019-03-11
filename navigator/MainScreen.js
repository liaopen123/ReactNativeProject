import React, {Component} from 'react';
import {View, Text, Alert, Platform, BackAndroid,  BackHandler} from 'react-native';


export default class MainScreen extends Component {
    _didFocusSubscription;
    _willBlurSubscription;
    constructor(props) {
        super(props);
        this._didFocusSubscription=  this.props.navigation.addListener('didFocus', payload =>{
            console.log("didFocus");
            BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
            }
        );

    }
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

    /**
     * 一个包含 页面 A 和 B 的 StackNavigator ，当跳转到 A 时，componentDidMount 方法会被调用； 当跳转到 B 时，componentDidMount 方法也会被调用，但是 A 依然在堆栈中保持 被加载状态，他的 componentWillUnMount 也不会被调用。
     当从 B 跳转到 A，B的 componentWillUnmount 方法会被调用，但是 A 的 componentDidMount方法不会被调用，应为此时 A 依然是被加载状态。
     */
    componentDidMount() {
    this._willBlurSubscription=  this.props.navigation.addListener('willBlur', payload =>{
        console.log("willBlur");
            BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
        }
        );
    }

    onBackButtonPressAndroid = () => {
            // console.log('返回键 被我拦截');
            // return true;//表示被拦截

        return false;
    };

    componentWillUnmount() {
        this._didFocusSubscription && this._didFocusSubscription.remove();
        this._willBlurSubscription && this._willBlurSubscription.remove();
    }

}
