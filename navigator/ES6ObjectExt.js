import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default class ES6Field extends Component {


    componentDidMount(): void {

        this.NumberApi();
        this.MathApi();


    }


    render() {


        return (<View style={styles.container}>

            <Text>对象的扩展</Text>

        </View>);
    }


    NumberApi() {

        console.log(0o1 === 1);
        console.log(Number.isFinite(1 / 3));
        console.log(Number.isNaN(NaN));
        console.log(Number.parseInt('1234'));
        console.log(Number.parseFloat('1234'));
        console.log(Number.parseFloat('1234.1234'));
        console.log(Number.isInteger('1234.1234'));

    }

    MathApi() {
        console.log(Math.trunc(12331231.12121));
        console.log(Math.sign(12331231.12121));
        console.log(Math.sign(-12331231.12121));
        console.log(Math.sign(0));
        console.log(Math.sign(-0));
        console.log(Math.sign(NaN));
        console.log(Math.cbrt(27));
        // console.log(Math.clz32(0));
        console.log(2 ** 3);
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },


});
