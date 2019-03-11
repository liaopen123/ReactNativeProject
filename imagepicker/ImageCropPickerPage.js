import React, {Component} from 'react';
import {
    View,
    Text,
    Alert,
    Platform,
    BackAndroid,
    BackHandler,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacityComponent, TouchableOpacity
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default class ImageCropPickerPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            image: null,
            images: null,
        }

    }
    renderVideo(video) {
        return (<View style={{height: 300, width: 300}}>
            {/*<Video source={{uri: video.uri, type: video.mime}}*/}
                   {/*style={{position: 'absolute',*/}
                       {/*top: 0,*/}
                       {/*left: 0,*/}
                       {/*bottom: 0,*/}
                       {/*right: 0*/}
                   {/*}}*/}
                   {/*rate={1}*/}
                   {/*paused={false}*/}
                   {/*volume={1}*/}
                   {/*muted={false}*/}
                   {/*resizeMode={'cover'}*/}
                   {/*onError={e => console.log(e)}*/}
                   {/*onLoad={load => console.log(load)}*/}
                   {/*repeat={true} />*/}
        </View>);
    }
    renderImage(image) {
        return <Image style={{width: 300, height: 300, resizeMode: 'contain'}} source={image} />
    }

    renderAsset(image) {
        if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
            return this.renderVideo(image);
        }

        return this.renderImage(image);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {this.state.image ? this.renderAsset(this.state.image) : null}
                    {this.state.images ? this.state.images.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}

                    <TouchableOpacity onPress={()=>this.callSinglePicWithCrop()}>
                        <Text style={styles.text}>调用单张照片并剪切</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.callMultiPicWithCrop()}>
                    <Text style={styles.text} >调用多张照片</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.callVideo()}>
                    <Text style={styles.text} >选择单个视频(不能crop，剪切的话报错)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.takPhotoWithCrop()}>
                    <Text style={styles.text} >拍照选择并剪切</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.takeVideo()}>
                    <Text style={styles.text} >拍摄视频</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.cropPic()}>
                    <Text style={styles.text} >单独剪切图片 要提供图片地址</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.cleanup()}>
                    <Text style={styles.text} >清除临时文件</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        );
    }


    /**
     * 得到的image:
     * {"cropRect":{"height":1992,"width":1494,"y":332,"x":0},"modificationDate":"1551781728000","size":93964,"mime":"image/jpeg","height":400,"width":300,"path":"file:///storage/emulated/0/Pictures/85b4adf2-643a-4384-80b4-c20a82961b91.jpg"}
     */
    callSinglePicWithCrop() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            this.setState(
                {
                    image: {uri: image.path, width: image.width, height: image.height},
                    images: null,
                });
        }).catch(e => {
            alert(e);
        });
    }

    callMultiPicWithCrop() {
        ImagePicker.openPicker({
            multiple: true
        }).then(images => {
            this.setState({
                image:null,
               images: images.map(i => {
                   console.log('received image', i);
                   return {uri: i.path, width: i.width, height: i.height, mime: i.mime};
               })
            });


        });

    }

    callVideo() {
        ImagePicker.openPicker({
            mediaType: 'video',
        }).then((video) => {
            console.log("得到的video" + JSON.stringify(video));
        });
    }

    takPhotoWithCrop() {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            this.changeImageState(image);
        });
    }

    cropPic() {
        // ImagePicker.openCropper({
        //     path: 'my-file-path.jpg',
        //     width: 300,
        //     height: 400
        // }).then(image => {
        //     console.log(image);
        // });
    }

    takeVideo() {
        ImagePicker.openCamera({
            mediaType: 'video',
        }).then(image => {
            console.log(image);
        });
    }

    cleanup() {
        ImagePicker.clean().then(() => {
            console.log('removed all tmp images from tmp directory');
        }).catch(e => {
            alert(e);
        });
    }


    changeImageState(image) {
        console.log("得到的图片" + JSON.stringify(image));
        this.setState({imageUri: image.path});
    }
}


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: 'purple',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        text: {
            color: 'white',
            padding: 20,
        },
        image: {
            width: 400,
            height: 400,
        }

    }
);
