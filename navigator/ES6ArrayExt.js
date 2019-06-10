import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default class ES6Field extends Component {


    componentDidMount(): void {

        this.array1();

    }


    render() {


        return (<View style={styles.container}>

            <Text>数组的扩展</Text>

        </View>);
    }


    array1() {
        console.log(...[1, 2, 3, 4, 5, 6, 7, 8, 9]);

        let arrays1 = new Array();
        arrays1[0] = 'saab';
        arrays1[1] = 'Volvo';
        arrays1[2] = 'BMW';
        arrays1[3] = 'BENZ';
        console.log(arrays1.toString());
        //你可以在一个数组中包含对象元素、函数、数组：
        let arrays2 = new Array("廖", '鹏', '辉');
        let arrays3 = ["廖", '鹏', '辉', '啊'];
        arrays3.push("啊");

        console.log(arrays2.toString());
        console.log(arrays3.toString());


        let arrys4 = arrays1.concat(arrays2);
        console.log(arrys4.toString());
        console.log(typeof (arrys4.join()));
        console.log(arrays2.pop());
        console.log(arrays3.toString());
        console.log(arrays3.slice(0, 2));
        arrays3.splice(1,2, "小",'小');//第一个参数 必填 插入到第几个位置， 第二个参数 删除几个元素，第三个参数，要添加的元素，选填，没有就不填
        console.log(arrays3.toString());
        arrays3.unshift('小廖');
        console.log(arrays3.toString());
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },


});
