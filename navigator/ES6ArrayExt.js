import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ImageBackground,} from "react-native";


//通过api得到dimensions这个对象
let Dimensions = require('Dimensions');
//得到屏幕的宽高
let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;
let itemwidth = (ScreenWidth - 13) / 3;
let width = ScreenWidth;
export default class ES6Field extends Component {


    componentDidMount(): void {

        this.baseArray();
        this.ArrayExt();

    }


    render() {


        return (<View style={styles.container1}>

            <Text>数组的扩展</Text>
        </View>);
    }


    baseArray() {
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
        arrays3.splice(1, 2, "小", '小');//第一个参数 必填 插入到第几个位置， 第二个参数 删除几个元素，第三个参数，要添加的元素，选填，没有就不填
        console.log(arrays3.toString());
        arrays3.unshift('小廖');
        console.log(arrays3.toString());
    }

    ArrayExt() {
        this.appendArray([1, 2, 3, 4, 5, 6], ['liao', 'peng', 'hui']);


        const a1 = [1, 2];
        const a2 = a1;

        a2[0] = 2;
        console.log(a1)
    }


    appendArray(array, ...items) {
        array.push(...items);
        console.log(array)

        //赋值
        const a1 = [1, 2, 3]
        const a2 = [...a1];

        //合并
        const a3 = [1, 2, 3]
        const a4 = [1, 2, 3]
        const a5 = [1, 2, 3]

        const a6 = [...a3, ...a4, ...a5];
        console.log(a6);

        //解构相结合 生成数组
        let a;
        let arrayrest;
        [a, ...arrayrest] = a6;
        console.log(a, arrayrest) //1, [ 2, 3, 1, 2, 3, 1, 2, 3 ]

        //map set

        let map = new Map([
            [1, 'gaga'],
            [2, 'haha'],
            [3, 'baba'],
            [4, 'biabia'],
        ]);


        console.log([...map.keys()]);
        console.log([...map.values()]);


        //Array.from():  下面的这个对象 有专门的名字:类似数组的对象（ArrayLike Object）这种数据结构使用数字作为属性名，并且具有长度属性length
        let arrayLike = {
            '0': 'a',
            '1': 'b',
            '2': 'c',
            length: 3
        };

        let realArray = Array.from(arrayLike);
        console.log("realArray:" + realArray);

        //Array.of()  把参数转化成数据  参数的个数不同 意义也不同
        // let arrayj = Array.of(4);
        // let arrayk = Array.of(1,2,3,4);
        // console.log(arrayj);
        // console.log(arrayk);

        console.log(new Array());
        console.log(new Array(5));
        console.log(new Array(1,2,3,4,5,6));

        if (!Array.of) {
            Array.of = function() {
                return Array.prototype.slice.call(arguments);
            };
        }

        let arrayj = Array.of(4);
        console.log(arrayj);

        //Array.copyWith()
        // let copyArray = [1,2,3,4,5,6,7];
        // copyArray.copyWithin(0,3,4);
        // console.log("copyArray:"+copyArray);
        // copyArray.copyWithin(0,3,5);
        // console.log("copyArray:"+copyArray);
        // copyArray.copyWithin(0,3,6);
        // console.log("copyArray:"+copyArray);
        // [1,2,3,4,5,6,7].copyWithin(0,3,4);



        //flat()  和flatMap()
        // let flatArray = [1,[2,3],[4,[5,6,7]]].flat();

        for(let index of ['a','b'].keys()){
            console.log(index)
        }
        for(let index of ['a','b'].values()){
            console.log(index)
        }
        for(let [index,element] of ['a','b'].entries()){
            console.log(index,element)
        }

    }





}


const styles = StyleSheet.create({
    container: {
        marginTop: 64,
        flex: 1
    },
    row: {
        justifyContent: 'center',
        // padding: 6,
        // margin: 3,
        width: 100,
        height: 30,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#CCC'
    },
    grid: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    itemLayout: {
        margin: 7.5,
        width: (width - 30) / 2,
        height: ((width - 30) / 2) * 9 / 16 + 36,
        //    alignItems:'center',
        //    justifyContent:'center',
        borderWidth: 0.5,
        borderColor: '#eaeaea',
    },
    conter: {
        justifyContent: 'flex-start',
        // padding: 6,
        // margin: 3,
        width: (width - 30) / 2,
        height: ((width - 30) / 2) * 9 / 16,
        backgroundColor: '#5c6bc2',
    },
    image: {
        width: (width - 30) / 2,
        height: ((width - 30) / 2) * 9 / 16,
    },
    text: {
        width: (width - 30) / 2,
        height: 20,
        padding: 3
    },
    subText: {
        width: (width - 30) / 2 - 15,
        height: 20,
        fontSize: 10,
        marginLeft: 6,
        color: '#808080',
    },
    botmView: {
        width: (width - 30) / 2 - 15,
        height: 20,
        flexDirection: 'row',
        marginTop: 5
    },
    imageText: {
        width: (width - 30) / 2 - 15,
        fontSize: 10,
        position: 'absolute',
        left: 5,
        bottom: 5,
        color: '#fff',

    },
    container1: {
        flex: 1,
        backgroundColor: 'black',
    },
});
