import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default class ES6Field extends Component {


    componentDidMount(): void {

        this.expressString();
        this.placeholderString();
        this.iteratorStr();


    }


    render() {


        return (<View style={styles.container}>

            <Text>字符串的扩展</Text>

        </View>);
    }


    expressString() {
        let myName = '\u{5ED6}\u{9E4F}\u{8F89}\u{771F}\u{5E05}';
        console.log(myName);
    }

    placeholderString() {

        let name = 'lph';
        let age = '22';
        let des = `大家好，我是${name},我今年${age}`;
        console.log(des);
    }

    iteratorStr() {
        // for (let codePoint of 'foo') {
        //     console.log(codePoint)
        // }

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },


});
