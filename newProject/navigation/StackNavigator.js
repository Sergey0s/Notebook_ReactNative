import { createStackNavigator } from 'react-navigation';
import ScreenNames from "./ScreenNames";
import GeneralScreen from '../components/GeneralScreen/index';
import EditorScreen from '../components/EditorScreen/index';

export  default createStackNavigator ({
    [ScreenNames.general] : {
        screen: GeneralScreen,
        navigationOptions: {
            header: null
        }
    },
    [ScreenNames.editor]: {
        screen: EditorScreen,
        navigationOptions: {
            header: null
        }
    }
}, {
    // initialRouteName: ScreenNames.editor
    });