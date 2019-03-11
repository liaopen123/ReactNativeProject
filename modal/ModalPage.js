import React, {Component} from 'react';
import {
    Modal,
    Text, TouchableOpacity,
    StyleSheet,
    View,
} from 'react-native';


export default class ModalPage extends Component {

    constructor(prop) {
        super(prop);
        this.state = {
            dialogVisible: false
        }
    }

    render() {

        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => {
                    this.showModal()
                }}>
                    <Text>预定火车票</Text>
                </TouchableOpacity>


                <Modal
                animationType={"slide"}
                onShow={()=>this.callMethod()}
                transparent={false}
                onRequestClose={()=>this.hideModal()}
                visible={this.state.dialogVisible}
                >

                    <View  style={[styles.container]}>
                    <Text>廖鹏辉222222222222222222222222</Text>
                    </View>
                </Modal>

            </View>
        );
    }

    showModal() {
        this.setState({dialogVisible: true});
    }
    hideModal() {
        this.setState({dialogVisible: false});
    }
    callMethod(){
        console.log('onShowonShowonShowonShowonShow');
    }



}
const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'rgba(0,0,0,0.5)',
        }


    }


);
