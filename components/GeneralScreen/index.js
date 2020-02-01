import React from 'react';
import {View, StyleSheet,ImageBackground} from "react-native";
import NoteBox from '../NoteBox/index';
import theme from "../../values/theme";

export default () => {
    return <ImageBackground blurRadius={3} style={styles.wrapper} source={theme.generalScreen.background} resizeMode={"contain"}>
        <NoteBox/>
    </ImageBackground>
}

const styles = StyleSheet.create({
    wrapper: {flex: 1,
    paddingTop: theme.generalScreen.paddingTop}
});