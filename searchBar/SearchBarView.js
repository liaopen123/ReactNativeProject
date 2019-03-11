'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
var content ='';
export default class SearchBarView extends Component {



    render() {
        return (
            <View style={styles.container}>
                <TextInput ref={'textInput'} style={styles.searchFrame} placeholder={'请输入想要🔍的内容'} underlineColorAndroid="transparent"  onChangeText={(text)=>this.changeText(text)}/>
                <View style={styles.searchButton}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.onClick(content);
                        }}
                    >
                    <Text >搜索</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    changeText(text) {
        content  =text;

    }


}


const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: 'white',
            padding: 20,
        },
        searchFrame:{
            borderTopWidth:1,
            borderLeftWidth:1,
            borderBottomWidth:1,
            flex:1,
            borderTopLeftRadius:4,
            borderBottomLeftRadius:4,
            borderColor:'red',
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft:2,
            paddingRight:2,
        },
        searchButton:{
            backgroundColor:'blue',
            paddingTop: 2,
            paddingBottom: 2,
            justifyContent:'center',
            paddingLeft:4,
            paddingRight:4,
            alignSelf:'stretch'
        }
    }
);
