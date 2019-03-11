import React, {Component} from 'react';
import {
    Text, TouchableOpacity,
    StyleSheet,
    View,
} from 'react-native';
import {getValue, setValue} from "./repo";
import {connector} from "./connector";

export default class ReduxPage extends Component {


    render() {

        return (
            <View style={styles.container}>

                <Counter1/>
                <Counter1/>
                <Counter2/>
            </View>


        );
    }


}


class _Counter1 extends Component {


    addCount() {
        setValue(getValue() + 1);
    }

    render() {
        return (
            <View style={styles.container1}>
                <Text>计数器</Text>
                <Text>{this.props.data}</Text>
                <TouchableOpacity onPress={() => this.addCount()}>
                    <Text>增加</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class _Counter2 extends Component {


    addCount() {
        setValue(getValue() + 1);
    }

    render() {
        return (
            <View style={styles.container1}>
                <Text>计数器</Text>
                <Text>{this.props.data}</Text>
                <TouchableOpacity onPress={() => this.addCount()}>
                    <Text>增加</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

let Counter1 = connector('counter-changed', _Counter1);
let Counter2 = connector('counter-changed', _Counter2);

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,

        },

        container1: {
            flexDirection: 'row'

        },

    }
);
