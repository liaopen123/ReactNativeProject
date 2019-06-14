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
import ES6FunctionExt from "./ES6FunctionExt";
import ES6ArrayExt from "./ES6ArrayExt";
import ES6ObjectExt from "./ES6ObjectExt";
import ES6SetAndMap from "./ES6SetAndMap";
import ES6Promise from "./ES6Promise";



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
    es6FunctionExt:{
        screen:ES6FunctionExt
    },
    es6ArrayExt:{
        screen:ES6ArrayExt
    },
    es6ObjectExt:{
        screen:ES6ObjectExt
    },
    es6SetMapExt:{
        screen:ES6SetAndMap
    },
    es6Promise:{
        screen:ES6Promise
    },
});

export  default createAppContainer(navigator);
