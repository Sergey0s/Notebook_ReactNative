import React from "react";
import {View, Image, StyleSheet} from "react-native"
import {parentSize} from "../../values/dimen";

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
        height: 70,
        width: 70,
        borderRadius: 35
    },
    img: {
        height: parentSize,
        width: parentSize
    }
});