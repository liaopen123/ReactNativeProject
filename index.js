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
import SearchScreen from "./searchBar/SearchScreen";
import ViewPager from "./viewpager/ViewPager";
import SwiperPage from "./swiper/SwiperPage";
import WebViewPager from "./webview/WebViewPager";
import DataAndTimePicker from "./datapickertimepicker/DataAndTimePicker";
import NetInfoPage from "./NetInfo/NetInfoPage";
import ImageCropPickerPage from "./imagepicker/ImageCropPickerPage";
import ShowNativePage from "./wrapperview/ShowNativePage";
import ShowOriginalNativePage from "./wrapperview/ShowOriginalNativePage";
import ModalPage from "./modal/ModalPage";
import LinkingPage from "./Linking/LinkingPage";
import ReduxPage from "./fakeredux/ReduxPage";

AppRegistry.registerComponent(appName, () => NavigatorApp);
