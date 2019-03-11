import React, {Component} from 'react';
import {
    Modal,
    Text, TouchableOpacity,
    StyleSheet,
    Linking,
    View,
} from 'react-native';


export  default  class CustomButton extends Component{

    constructor(props){
        super(props);
        this.state={
            initialUrl:"",
        }
    }

componentDidMount() {

    Linking.getInitialURL().then((url)=>{
        console.log("得到的初始URL:"+url)
        this.setState({
            initialUrl:url,
        })
    })
}

    render() {

        return(
            <TouchableOpacity  onPress={()=>{this.pastURL(this.props.url)}}>
            <Text>{this.props.text}</Text>
                <Text>{this.state.initialUrl}</Text>
            </TouchableOpacity>

        );
    }

    pastURL(url) {
       // if(Linking.canOpenURL(url)) {
       //     Linking.openURL(url)
       // }else{
       //     alert("连接无法识别");
       // }

        //if else的另外一种写法
        Linking.canOpenURL(url).then(canOpen=>{
            if(canOpen){
                Linking.openURL(url);
            }else{
                alert('不支持的连接');
            }

        })
    }
}
