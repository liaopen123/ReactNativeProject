'use strict';
import React,{Component} from 'react';
import { TextareaItem,Button } from '@ant-design/react-native';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    PixelRatio,
    DatePickerAndroid, TimePickerAndroid
} from 'react-native';


export  default class DataAndTimePicker extends  Component{
    async openDatePicker() {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
                data: new Date()
            });

            if (action !== DatePickerAndroid.dismissedAction) {
                console.log("" + year + ",,,," + month + ",,," + day);
            }
        } catch (e) {
            console.warn('Cannot open date picker');
        }
    }
    async openTimePicker() {
        try {
            const {action, hour, minute} = await TimePickerAndroid.open({
                hour: 14,
                minute: 0,
                second:0,
                is24Hour: false,
            });
            if (action !== TimePickerAndroid.dismissedAction) {
                console.log("" + hour + ",,,," + minute + ",,,");
            }
        } catch (e) {


        }
    }
    render() {

        return(
            <View style={styles.container}>
                <TouchableOpacity  onPress={this.openTimePicker}>
                <Text >TimePicker</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={this.openDatePicker}>
                <Text >DatePicker</Text>
                </TouchableOpacity>

            </View>


        );
    }




}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'white',

        }
    }
);
