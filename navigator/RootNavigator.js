import {createAppContainer,createStackNavigator,createSwitchNavigator} from 'react-navigation';
import LoginScreen from './LoginScreen';
import MainNavigator from './MainNavigator';
import DetailScreen from './DetailScreen';
import MeScreen from "./MeScreen";



const navigator = createStackNavigator({
    login:{
        screen:LoginScreen,
    },
    home:{
        screen:MainNavigator,
        navigationOptions:({navigation})=>({
            header:null //这里设置有无标题
        })
    },
    details:{
        screen:DetailScreen
    },

    meScreen:{
        screen:MeScreen
    }
});

export  default createAppContainer(navigator);
