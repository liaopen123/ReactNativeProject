import React,{Component} from 'react';
import {StyleSheet,View} from 'react-native';
import Navigation from '../navigator/RootNavigator';

export default class NavigatorApp extends Component{


    render() {
        return(
            <View style={styles.container}>
                <Navigation></Navigation>
            </View>
        );
    }

}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
        }


    }

);
