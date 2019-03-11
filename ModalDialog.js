import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import ReturnGoodsItem from "./ReturnGoodsItem";
import {Button} from "@ant-design/react-native";

//通过api得到dimensions这个对象
const Dimensions = require('Dimensions');
//得到屏幕的宽高
const ScreenWidth = Dimensions.get('window').width;


let  data1 = [
    {key:'配件破损',select:true},
    {key:'卖家发错货',select:false},
    {key:'假冒品牌',select:false},
    {key:'商品少见/破损/污渍等',select:false},
    {key:'其他',select:false},
];
export default class ModalDialog extends Component {



    changeReturnGooodsState(item){
        console.log(item);

        data1.map(function (item11) {
            if(item11.key==item.key){
                item11.select = true;
            }else{
                item11.select = false;
            }
        });

        console.log(data1);
        //刷新完了以后  直接去 更新关闭的状态
        this.props.isShowDialog(false);
    }

    render() {



        return (
            <View style={[styles.container,{width:ScreenWidth}]}>
                <View style={styles.centerTitle}>
                    <Text style={{color: '#999999', fontsize: 16}}>退款原因</Text>
                </View>

                <FlatList
                    data={data1}
                renderItem = {(item)=><ReturnGoodsItem  data={item}   onItemClick={(item)=>this.changeReturnGooodsState(item)}/>}
                />
                <Button style={{marginTop:35,marginBottom:30,color:"#2979FF",marginLeft:8,marginRight:8,borderRadius:40,fontSize:17,fontWeight:'800'}}type="primary" shape="round"   onPress={()=>{this.props.isShowDialog(false)}}>关闭</Button>


            </View>


        );


    }
}

const styles = StyleSheet.create(

    {
        container: {
            position: 'absolute',
            bottom: 0,
            backgroundColor: "white"
        },
        centerTitle: {
            paddingTop: 16,
            paddingBottom:13,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
        },
    }
);
