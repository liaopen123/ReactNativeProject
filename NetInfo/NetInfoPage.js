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
    DatePickerAndroid, TimePickerAndroid, NetInfo
} from 'react-native';

export default class NetInfoPage extends Component {

    componentDidMount() {
        NetInfo.addEventListener('connectionChange', this._handleConnectionInfoChange);

    }

    componentWillUnmount() {
        NetInfo.removeEventListener('connectionChange', this._handleConnectionInfoChange);
    }

    _handleConnectionInfoChange(connectionInfo) {
        console.log(JSON.stringify(connectionInfo));

    }


    render() {

        NetInfo.getConnectionInfo().then((connectionInfo) => {
            console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
        });
        NetInfo.isConnected.fetch().then(isConnected => {
            console.log('First, is ' + (isConnected ? 'online' : 'offline'));
        });

        return (
            <View>

            </View>

        );
    }
}
