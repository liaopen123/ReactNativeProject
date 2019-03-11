import React, {Component} from 'react';
import {
    Modal,
    Text, TouchableOpacity,
    StyleSheet,
    Linking,
    View,
} from 'react-native';
import CustomButton from "./CustomButton";

export  default  class LinkingPage extends Component{

    componentDidMount() {
        Linking.getInitialURL().then((url)=> {
            if(url){

            }else{

            }
        });
    }

    render() {

        return(
            <View>
                <CustomButton  url={"https:www.baidu.com"}  text={'打开百度'}/>
                <CustomButton  url={"smsto:18510333376"}  text={'发短信'}/>
                <CustomButton  url={"tel:18510333376"}  text={'打电话'}/>
                <CustomButton  url={"mailto:4679691@qq.com"}  text={'发邮件'}/>
                <CustomButton  url={"geo:37.212121,-122.121212"}  text={'打开地理位置'}/>
                <CustomButton  url={"dfy://almostlover.com.cn"}  text={'自己打开自己'}/>
                <Text>恭喜发财，大吉大利</Text>
            </View>

        );
    }
}
