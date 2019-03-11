'use strict';
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    PixelRatio,
    ViewPagerAndroid
} from 'react-native';


export default class ViewPager extends Component {


    constructor(props){
        super(props);
        this.state={
          hasLoad:false,
        };
    }

    render() {

            if(!this.state.hasLoad){

                setTimeout((()=>this.changState()),5000);

                return (this.renderLoadView());
            }else{
                return (<View style={styles.container}>
                    <ViewPagerAndroid style={styles.container} initialPage={0} onPageSelected={(page) => {
                        console.log(page.nativeEvent.position)
                    }}>
                        <View>
                            <Text>我是第一页</Text>
                        </View>
                        <View>
                            <Text>我是第二页</Text>
                        </View>
                        <View>
                            <Text>我是第三页</Text>
                        </View>
                        <View>
                            <Text>我是第四页</Text>
                        </View>
                    </ViewPagerAndroid>


                </View>)

            };

    }




    renderLoadView(){
        return (
            <View>
                <Text>正在加载</Text>

            </View>


        );
    }


     changState() {
        this.setState({hasLoad:true}) ;
    }

}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: 'white',
        },

        bottomTex: {
            position: 'absolute',
            bottom: 100,
            paddingBottom: 200,
        }

    }
);
