import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

let animal = 'dog';
export default class ES6Field extends Component {


    componentDidMount(): void {

        this.destructingString();


    }


    render() {


        return (<View style={styles.container}>

            <Text>声明属性变量</Text>

        </View>);
    }


    destructingArray() {
        let [a, b, c] = ["gaga", "haha", "papa"];
        console.log(a, b, c);
        console.log("得到的C是:" + c);

        let [o, p, q] = new Set([1, 2, 3]);

        console.log(o, p, q);
        console.log("得到的q是:" + q);

        let [cat, dog = 'huanhuan'] = [1];
        let [cat11, dog2 = 'huanhuan'] = [1, null];
        console.log(cat, dog);//输出为1，huanhuan
        console.log(cat11, dog2); //输出为1，null
    }


    destructingObject() {

        let {name: mingzi, age: nianji} = {age: 22, name: 'pony'};

        // console.log(name,age);
        console.log(mingzi, nianji);


        let {log} = console;
        log('能不能不要说');


        const node = {
            loc: {
                start: {
                    line: 1,
                    column: 5
                }
            }
        };

        let{loc:{start:{line,column}}} = node;
        console.log("line:"+line,column);

    }

    destructingString() {

        // let [a,b,c] = 'lph';
        // console.log(a,b,c);
        let{length:len} = 'hello,my love'; //这个理解：字符串是对象，拥有length属性，通过解构，拿到length属性。
        console.log("length:"+len);


    }




    realFunction(){
        let x = 1;
        let y = 2;
        [x,y] = [y,x]; //数组的结构  只和顺序先关 与女(名称)无瓜
        console.log(x,y);

        let jsonData = {
            id: 42,
            status: "OK",
            data: [867, 5309]
        };

        let { id, status, data: number } = jsonData;  //利用对象的解构

        console.log(id, status, number);

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },


});
