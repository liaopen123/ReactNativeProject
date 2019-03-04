/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import NavigatorApp from './navigator/NavigatorApp';
import {name as appName} from './app.json';
import MainScreen from "./navigator/MainScreen";
import MainNavigator from "./navigator/MainNavigator";

AppRegistry.registerComponent(appName, () => NavigatorApp);
