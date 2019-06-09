import {createAppContainer,createStackNavigator,createSwitchNavigator} from 'react-navigation';
import LoginScreen from './LoginScreen';
import MainNavigator from './MainNavigator';
import DetailScreen from './DetailScreen';
import MeScreen from "./MeScreen";
import ES6Base from "./ES6Base";
import ES6Field from "./ES6Field";
import ES6Destructing from "./ES6Destructing";
import ES6StringExt from "./ES6StringExt";
import ES6NumberMath from "./ES6NumberMath";



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
    },
    es6Test:{
        screen:ES6Base
    },
    es6Field:{
        screen:ES6Field
    },
    es6Desctructing:{
        screen:ES6Destructing
    },
    es6String:{
        screen:ES6StringExt
    },
    es6NumberMath:{
        screen:ES6NumberMath
    },
});

export  default createAppContainer(navigator);
