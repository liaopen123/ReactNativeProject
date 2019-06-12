import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,FlatList} from "react-native";


let f = v => v;


export default class ES6Field extends Component {


    componentDidMount(): void {
        this.oldDefaultFunc('真的');
        this.oldDefaultFunc('真的', '是不是');
        this.newDefalutFun('真的');
        this.newDefalutFun('真的', '是不是');
        this.f(1, 2);
        this.spreadFunction(1, 2, 3, 4);

        this.arrowFunction();
        this.arrowFunctionDestructing();


        console.log("方法的名字：" + this.functionName.name);
    }


    render() {


        return (<View style={styles.container}>

            <Text>函数的扩展</Text>
        </View>);
    }

    //之前老的 默认参数的方法
    oldDefaultFunc(x, y) {
        y = y || "lph6666";  //如果y有值，取y，如果没有，则去取后面的。
        console.log(x, y);//
    }


    newDefalutFun(x, y = '廖鹏辉真帅') {
        console.log(x, y);
    }

    //这个叫函数参数的解构也可以使用默认值。
    getFunction({x = 0, y = 0} = {}) {
        console.log(x, y);
    }

    //方法设置了默认值。
    getFunction1({x, y} = {x: 0, y: 0}) {
        console.log(x + y);
    }


    f(x = 1, y, z) {
        console.log(x, y, z);
    }

    spreadFunction(...args) {
        let sum = 0;
        for (item of args) {
            sum += item;
        }
        console.log("多个参数的相加的和是:" + sum);
    }

    functionName() {


    }

    arrowFunction() {
        console.log(f('我是要输出的东西~~~~'));


        let sum = (num1, num2) => num1 + num2;
        console.log(sum(20, 30));
        //由于大括号被解释为代码块  所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。
        let people = (name, age) => ({name: name, age: age});
        console.log(people('廖鹏辉', 22).name, people('廖鹏辉', 22).age);


        let multiBlock = (num1, num2) => {
            let num3 = num1 + num2;
            num3 += num3;
            return num3;
        }

        multiBlock(10,10);


    }


    arrowFunctionDestructing() {

       let getName = ({name,age}) => name+"..."+age;

        console("解构得到的值是："+getName());

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },


});
