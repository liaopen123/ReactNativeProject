import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";


let birthday = '2019.0.1';
export default class ES6ObjectExt extends Component {


    componentDidMount(): void {
        this.getObject();
        this.objectNewMethod();
    }


    render() {
        return (<View style={styles.container}>
            <Text>对象的扩展</Text>
        </View>);
    }


    getObject() {
        const name = "lph";
        const people = {name};
        const people1 = {name: "lph"};

        //es6简写
        let people233 = this.getES6Object('廖鹏辉', '2333'); //得到的对象:{name:'廖鹏辉',value:'233'};
        let lph233 = this.getES6Object1();
        lph233.hello('lphlph')
    }

    //属性简写
    getES6Object(name, value) {
        return {name, value};
    }

    //方法简写：
    getES6Object1() {
        return {
            name: 'lph',
            birthday,
            hello(value) {
                console.log('你好' + value);
            },
        }
    }


    getNormalWriteWay() {
        let x = 5;
        let y = 6;
        return {x, y};
    }


    objectNewMethod() {
        // Object.is('foo', 'foo'); //true
        // Object.is({}, {});//false
        // Object.is(+0, -0);//false
        // Object.is(NaN, NaN);//true

        let book = {bookname: '那些年我们一起追过的女孩'};
        let cd = {cdname: '你比从前快乐'};
        let people = {name: '廖鹏辉'};

        Object.assign(people, book, cd);
        console.log(JSON.stringify(people)); // {"name":"廖鹏辉","bookname":"那些年我们一起追过的女孩","cdname":"你比从前快乐"}


    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',

    },


});
