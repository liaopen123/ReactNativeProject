import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native';

import ScrollableTabView ,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';

export  default  class ScrollTabViewPage extends Component{



    render() {

        return(
            <ScrollableTabView
            renderTabBar={()=><ScrollableTabBar/>}
            tabBarPosition='top'
            onChangeTab={(info)=>{console.log(info.i)}}
            onScroll={(offset)=>{console.log(offset)}}
            locked ={true}
            initialPage={5}
            tabBarUnderlineStyle={{backgroundColor:'yellow',}}
            >
                <Text tabLabel="生活">page1</Text>
                <View tabLabel="影视">11122 </View>
                <Text tabLabel="健康"> page3</Text>
                <Text tabLabel="娱乐">page4</Text>
                <Text tabLabel="娱乐">page4</Text>
                <Text tabLabel="娱乐">page4</Text>
                <Text tabLabel="娱乐">page4</Text>
                <Text tabLabel="娱乐">page4</Text>
            </ScrollableTabView>

        );
    }


}
