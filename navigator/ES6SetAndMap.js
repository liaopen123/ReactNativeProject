import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";


export default class ES6SetAndMap extends Component {


    componentDidMount(): void {

        // this.easySet();
        this.easyMap();


    }


    render() {
        return (<View style={styles.container}>
            <Text>对象的扩展</Text>
        </View>);
    }


    easySet() {
        let set = new Set();
        set.add(1);
        set.add(2);
        set.add(3);
        set.add(1);
        set.add(4);
        set.add(4);

        console.log(set);

        let s1= new Set([1,2,3,4,4,4,5,6,7,8,9]);  //里面传入的是array
        console.log(s1);

        //数组去重的写法
        let arrays = [1,2,3,4,12,33,2,3,4];
        [...new Set(arrays)];
        //常用api
        console.log(s1.size);
        s1.add(233);
        console.log(s1);
        s1.has(233);
        console.log(s1);
        s1.clear();
        console.log(s1);

        //把set转化成为array
        const items = new Set([1, 2, 3, 4, 5]);
        const array = Array.from(items);

        //遍历
        for (let key of items.keys()) {

        }

        for (let values of items.values()) {

        }
        for (let [key, values] of items.entries()) {
            console.log(key, values);
        }
        for (let item of items.entries()) {
            console.log(item);// [1,1]
        }

        //直接获取对象
        for (let item of items) {
            console.log(item);// [1,1]
        }
//
//         //foreach
//         let set = new Set([1,4,9]);
//         set.forEach((key,value)=>console.log(key+"::"+value));
//         let arr = [3, 5, 2, 2, 5, 5];
//         let unique = [...new Set(arr)];
// // [3, 5, 2]
//         let set2 = new Set([1, 2, 3]);
//         set = new Set([...set].map(x => x * 2));
// // 返回Set结构：{2, 4, 6}
//
//         let set3 = new Set([1, 2, 3, 4, 5]);
//         set = new Set([...set].filter(x => (x % 2) == 0));
// // 返回Set结构：{2, 4}
    }



    easyMap() {
        const map = new Map([
            ['name', '张三'],
            ['title', 'Author']
        ]);

        map.size // 2
        map.has('name') // true
        map.get('name') // "张三"
        map.has('title') // true
        map.get('title') // "Author"

let maps = new Map([
    ["name",'lph'],
    ["name1",'lp1h'],
    ["name2",'lph2'],
    ["name3",'lph1'],
    ["name4",'lph3'],

]);
        maps.set('name233',"lph233");
       let name =  maps.get('name233');
        console.log(maps)

        //api
        maps.size;
        map.set("jjj",'kkk');
        map.get('jjj');
        map.has('jjj');
        map.delete('jjj');
        map.clear('jjj');

        //遍历
        for (let key of map.keys()) {
            console.log(key);
        }
// "F"
// "T"

        for (let value of map.values()) {
            console.log(value);
        }
// "no"
// "yes"

        for (let item of map.entries()) {
            console.log(item[0], item[1]);
        }
// "F" "no"
// "T" "yes"

// 或者
        for (let [key, value] of map.entries()) {
            console.log(key, value);
        }
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
        for (let [key, value] of map) {
            console.log(key, value);
        }
// "F" "no"
// "T" "yes"


        //map转换成为array
        [...maps.key()];
        [...maps] // [[1,'one'], [2, 'two'], [3, 'three']]

        //map转化成对象  如果所有 Map 的键都是字符串，它可以无损地转为对象。
        function strMapToObj(strMap) {
            let obj = Object.create(null);
            for (let [k,v] of strMap) {
                obj[k] = v;
            }
            return obj;
        }

        const myMap = new Map()
            .set('yes', true)
            .set('no', false);
        strMapToObj(myMap)
// { yes: true, no: false }


        //对象转化成数组
        function objToStrMap(obj) {
            let strMap = new Map();
            for (let k of Object.keys(obj)) {
                strMap.set(k, obj[k]);
            }
            return strMap;
        }

        objToStrMap({yes: true, no: false})
// Map {"yes" => true, "no" => false}

        //Map转化成为json
        function strMapToJson(strMap) {
            return JSON.stringify(strMapToObj(strMap));
        }

        let myMap1 = new Map().set('yes', true).set('no', false);
        strMapToJson(myMap1)

        //json转化成map
        function jsonToStrMap(jsonStr) {
            return objToStrMap(JSON.parse(jsonStr));
        }

        jsonToStrMap('{"yes": true, "no": false}')
    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',

    },


});
