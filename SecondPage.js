'use strict';
import React,{Component} from 'react';
import { TextareaItem,Button } from '@ant-design/react-native';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    PixelRatio,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

export  default class SecondPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            placeholderText: '您可以写下您的购物体验，供其他小伙伴参考哦！',
            textareaText: '',
        };
    }
    render(){
        console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];

        console.disableYellowBox = true // 关闭全部黄色警告
        return(
            <View style={styles.container}>
                <View  style={styles.headText}>
                    <TouchableOpacity onPress={() =>{
                        this.props.navigation.goBack()
                    }}>
                        <Image source={require('./images/black_back.png')} style={{ width: 24, height: 24 }}></Image>
                    </TouchableOpacity>
                    <Text style={styles.title}>申请退款</Text>
                    <Text></Text>
                </View>
                <Text style={styles.headTips}>退款完成后系统将自动扣减佣金</Text>
                <TouchableOpacity onPress={() =>{
                    // this.props.navigation.goBack()
                }}>
                    <View style={styles.contentLayout}>
                        <Text style={styles.title}><Text style={{color:'#FF6026',  textAlign: 'center'}} >*</Text> 退款原因</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
                            <Text style={styles.textChoose}>请选择</Text>
                            <Image source={require('./images/arrow.png')} style={{ width: 24, height: 24 }}></Image>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{height:8,backgroundColor:'#ebebeb',marginTop:19,}}></View>

                <TouchableOpacity onPress={() =>{
                    // this.props.navigation.goBack()
                }}>
                    <View style={styles.contentLayout}>
                        <Text style={styles.title}><Text style={{color:'#FF6026',  textAlign: 'center'}} >*</Text> 退款原因</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
                            <Text style={styles.textChoose}>请选择</Text>
                            <Image source={require('./images/arrow.png')} style={{ width: 24, height: 24 }}></Image>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>{
                    // this.props.navigation.goBack()
                }}>
                    <View style={styles.contentLayout}>
                        <Text style={styles.title}><Text style={{color:'#FF6026',  textAlign: 'center'}} >*</Text> 退款金额:<Text style={{color:'#FF6026',  textAlign: 'center'}} >￥5.50</Text></Text>
                    </View>
                </TouchableOpacity>
                <View style={{height:8,backgroundColor:'#ebebeb',marginTop:19,}}></View>

                <View style={styles.contentLayout}>
                    <Text style={styles.title}> 退款说明: <Text style={styles.textChoose}>选填</Text></Text>
                </View>
                <View style={{backgroundColor: '#f4f4f4', marginRight: 16,marginLeft:16, marginTop: 10 }}>

                    <TextareaItem style={{borderWidth:1,borderColor:"#E4E4E4",borderRadius:4}}
                                  placeholder={this.state.placeholderText}
                                  rows={5}
                                  count={500}
                                  onChange={(val) => {
                                      this.setState({textareaText: val});
                                  }}
                    />
                </View>
                <Text style={styles.textUpload}>
                    上传凭证
                </Text>

                <View style={styles.imageFrame}>
                    <Image source={require('./images/fd_camera.png')} style={{ width: 40, height: 40 }}/>
                    <Text style={{marginTop:3.5,color:"#999999"}}>最多六张</Text>
                </View>
                <Button style={{marginTop:67,color:"#2979FF",marginLeft:8,marginRight:8,borderRadius:40,fontSize:17,fontWeight:'800'}}type="primary" shape="round">提交</Button>

            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container:{
            paddingTop:60,
            backgroundColor:"white",
            flex:1,
            margin:1,
        },
        headText:{
            paddingLeft:16,
            height: 44,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },

        headTips:{
            paddingLeft:16,
            paddingTop:12,
            paddingBottom:12,
            backgroundColor:'#ebebeb',
            fontSize:14,
            color:'#999999',
        },
        title:{
            fontSize:16,
            color:"#333333",
        },
        contentLayout:{
            paddingTop:19,
            paddingLeft:19,
            paddingRight:19,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        contentText:{
            paddingLeft:16,
            color:'#FF6026',
            fontSize:16,
        },
        textChoose:{
            fontSize:14,
            textAlign: 'center',
            color:'#999999',
        },
        TextInput:{
            height: 80,
            borderColor: '#e4e4e4',
            flex:1,
            borderWidth: 1,
            marginTop:10,
            marginLeft:16,
            marginRight:16,
            borderRadius:4,
        },
        textAreaItem: {
            fontSize: 13,
            marginLeft: 0,
            width: '100%',
            backgroundColor: '#f4f4f4',
            paddingBottom: 20,
        },
        textUpload:{
            marginLeft:16,
            marginTop:10,
            fontSize:14,
            color:'#999999'
        },
        imageFrame:{
            marginTop:10,
            borderWidth:1,
            borderColor:'#cecece',
            borderStyle:'dotted',
            borderRadius:4,
            width:90,
            paddingLeft:12,
            paddingRight:12,
            paddingTop:12,
            paddingBottom:12,
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            marginLeft:16
        }
    }

);
