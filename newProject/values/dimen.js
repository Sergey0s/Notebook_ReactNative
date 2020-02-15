import { Dimensions, StatusBar } from 'react-native';

const {width, height} = Dimensions.get('window');

export const WIDTH = width;
export const HEIGHT = height;
export const parentSize = '100%';
export const heightStatusBar = StatusBar.currentHeight;