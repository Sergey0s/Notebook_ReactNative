import React from "react";
import {View, Image, StyleSheet} from "react-native"
import {parentSize} from "../../values/dimen";
import theme from "../../values/theme";

export default (props) => {
    return (
        <View style={style.wrapper}>
            <Image source={props.image} style={style.img}>

            </Image>
        </View>
    )
};
const style = StyleSheet.create({
    wrapper: {
        height: theme.roundButton.buttonSize,
        width: theme.roundButton.buttonSize,
        borderRadius: theme.roundButton.buttonSize/2
    },
    img: {
        height: parentSize,
        width: parentSize
    }
});