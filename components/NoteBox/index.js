import React from 'react';
import {StyleSheet, View} from 'react-native';
import {parentSize} from '../../values/dimen';
import theme from "../../values/theme";

export default () => {
    return <View style={styles.wrapper}/>
}

const styles = StyleSheet.create({
    wrapper: {
        height: theme.node.height,
        width: parentSize,
        backgroundColor: theme.node.backgroundColor,
        borderRadius: theme.node.borderRadius,
        elevation: theme.node.elevation
    }
});