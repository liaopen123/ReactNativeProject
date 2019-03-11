'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';
import SearchBarView from "./SearchBarView";

export default class SearchScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
             <SearchBarView  onClick={(text)=>this.searchText(text)}/>
            </View>
        );
    }

    searchText(text) {
        console.log(text);
    }
}


const styles = StyleSheet.create(
    {
        container: {
            flex:1,
            backgroundColor: 'white',
        },
    }
);
