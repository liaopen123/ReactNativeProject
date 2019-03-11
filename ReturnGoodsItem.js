import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native';


export  default  class ReturnGoodsItem extends Component{

    render() {

        return (
            <View>
                {console.log(this.props.data)}
                <TouchableOpacity   onPress={()=>this.props.onItemClick(this.props.data.item)}>
                <View style={styles.itemsContainer}>

                    <Text style={styles.leftText}>{this.props.data.item.key}</Text>

                    <Image style={styles.rightImage} source={this.props.data.item.select?  require('./images/selectedblue.png'): require('./images/unselected.png')} />
                </View>
                {/*包裹线*/}
                <View  style={{height:1,backgroundColor:'#f2f2f2' }}></View>
                </TouchableOpacity>
            </View>
        )

    }
}
const styles = StyleSheet.create(

    {


        itemsContainer: {
            paddingTop:9,
            paddingBottom:9,
            paddingLeft:16,
            paddingRight:16,
            flexDirection: 'row',
            justifyContent:'space-between',
        },

        leftText:{
            color:'#333333',
            fontSize:16,
        },
        rightImage:{
            width:16,
            height:16
        }
    }
);
