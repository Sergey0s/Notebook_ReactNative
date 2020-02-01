import React from 'react';
import {View, StyleSheet, ImageBackground, ScrollView, TouchableOpacity} from "react-native";
import NoteBox from '../NoteBox/index';
import theme from "../../values/theme";
import RoundButton from '../RoundButton/index';

export default () => {
    return <ImageBackground blurRadius={3} style={styles.wrapper} source={theme.generalScreen.background}
                            resizeMode={"contain"}>
        <ScrollView>
            <NoteBox/>
            <NoteBox/>
            <NoteBox/>
            <NoteBox/>
            <NoteBox/>
            <NoteBox/>
        </ScrollView>
        <TouchableOpacity activeOpacity={0.3} style={styles.activeButton}>
            <RoundButton image={theme.actionButton.img}/>
        </TouchableOpacity>
    </ImageBackground>
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingTop: theme.generalScreen.paddingTop
    },
    activeButton: {
        position: 'absolute',
        bottom: 15,
        right: 15
    }
});