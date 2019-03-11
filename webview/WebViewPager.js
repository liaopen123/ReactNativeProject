'use strict';
import React, {Component} from 'react';
import {TextareaItem, Button} from '@ant-design/react-native';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    PixelRatio,
    WebView
} from 'react-native';
const html = `<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport" />
    <style>
</style>
  </head>
  <body>'顺逛白条使用须知详情加载错误'</body>
</html>
`;
export default class WebViewPager extends Component {


    render() {

        return (
            <View style={{flex:1}}>
            <WebView bounces={false}
                     style={{flex: 1}}
                     source={{html: html, baseUrl: ''}}
            />
            </View>

        );
    }
}
