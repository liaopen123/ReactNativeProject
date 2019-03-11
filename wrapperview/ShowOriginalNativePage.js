import React, {Component} from 'react';
import {
    View,
} from 'react-native';

import OriginalView from './OriginalView'

export  default  class ShowOriginalNativePage extends Component{


    render() {
        return(
            <View>
                <OriginalView   title={"廖鹏辉调用react"} imageUri={"https://github.com/bumptech/glide/raw/master/static/glide_logo.png"}
                                checkBoxState ={true}      buttonContent={"点击抽奖勒~~"}
                style={{width:300,height:400}}/>

            </View>
        );
    }

}
