import { createStackNavigator } from 'react-navigation';
import ScreenNames from "./ScreenNames";
import GeneralScreen from '../components/GeneralScreen/index';

export  default createStackNavigator ({
    [ScreenNames.general] : {
        screen: GeneralScreen,
        navigationOptions: {
            header: null
        }
    }
});