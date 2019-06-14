import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";


export default class ES6Promise extends Component {


    componentDidMount(): void {
        // this.how2Use();
        // this.how2Use1();
        // this.fuzaUse();//复杂用法
        // this.linkUse();//链式
        // this.promiseAll();//打包多个promise
        // this.promiseRace();
        // this.promiseResolve();
        this.promiseReject();
    }


    render() {
        return (<View style={styles.container}>
            <Text>Promise</Text>
        </View>);
    }


    how2Use() {
        const promise = new Promise(function (resolve, reject) {

            let currentValue = Math.random() * 10;
            let randomValue = Number.parseInt(currentValue);
            if (randomValue % 2 === 0) {
                resolve('成功了' + randomValue)
            } else {
                reject('失败了' + randomValue)
            }


        });


        promise.then(function (value) {
            alert(value);
        }, function (error) {
            alert(error);
        });

    }

    timeOut(value) {

        return new Promise((resolve, reject) => {
            setTimeout(resolve, value, 'done');
        })
    }

    how2Use1() {
        this.timeOut(1000).then((resolve) => {
            alert(resolve)
        }, (error) => {
        })
    }


    fuzaUse() {
        let p1 = new Promise(function (resolve, reject) {
            setTimeout(() => {
                reject(new Error("我有罪~"))
            }, 3000);
        });
        let p2 = new Promise(function (resolve, reject) {
            setTimeout(() => resolve(p1), 1000);
        });
        p2.then(result => {
            console.log("失败~" + result)
        }).catch(error => console.log("成功" + error)) //最终的结果是成功 成功的内容是p1的失败信息
        //p.then((val) => console.log('fulfilled:', val))
        //   .catch((err) => console.log('rejected', err));
        //
        // // 等同于
        // p.then((val) => console.log('fulfilled:', val))
        //   .then(null, (err) => console.log("rejected:", err));
    }

    linkUse() {
        new Promise(((resolve, reject) => {

            let currentValue = Math.random() * 10;
            let randomValue = Number.parseInt(currentValue);
            if (randomValue % 2 === 0) {
                resolve('成功了' + randomValue)
            } else {
                reject('失败了' + randomValue)
            }
        })).then(result => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            console.log("不管怎么样,我都会执行的")
        });
    }

    //p的状态由p1、p2、p3决定，分成两种情况。1.要么都成功  2.要么有一个失败的 就都失败了
    promiseAll() {
        //可以合在一起写 也可以分开写
        let promises = [1, 2, 3, 4, 5].map((item) => {
            return new Promise(((resolve, reject) => {
                resolve(item)
            }))
        });
        Promise.all(promises).then((result) => console.log('result:' + typeof (result)));


        //也可以分开写
        let p1 = new Promise((resolve, reject) => resolve(111111));
        let p2 = new Promise((resolve, reject) => resolve("我是大赢家"));

        Promise.all([p1, p2]).then(
            ([p1, p2]) => {
                console.log([p1, p2])
            }
        ).catch(error => {
        });
    }

    //上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。
    promiseRace() {
        //也可以分开写
        let p1 = new Promise((resolve, reject) => reject(111111));
        let p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("我是大赢家")
            }, 3000);
        });


        Promise.race([p1, p2]).then(
            (result) => {
                console.log(result)
            }
        ).catch(error => {
            console.log("error" + error)
        });
    }

    //相当于直接返回成功的结果 == new Promise((resolve,reject)=>{resolve("孙哥,我飞起来了~")})
    promiseResolve() {
        let promise = Promise.resolve("孙哥,我飞起来了~");
        promise.then(result => {
            console.log(result)
        })
    }


    promiseReject() {
        let promise = Promise.reject("溜了，溜了，有缘再会");
        promise.then(result => {
        }).catch(error => console.log(error));


    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },


});
