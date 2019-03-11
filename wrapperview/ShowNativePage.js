import React, {Component} from 'react';
import {
    View,
} from 'react-native';

import KenBurnsView from './KenBurnView'

export  default  class ShowNativePage extends Component{


    render() {
        return(
            <View>
                <KenBurnsView   imgSource='meinv2.jpg'
                style={{width:200,height:300}}/>

            </View>
        );
    }

}
