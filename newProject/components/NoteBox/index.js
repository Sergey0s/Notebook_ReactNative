import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {parentSize, WIDTH} from '../../values/dimen';
import theme from "../../values/theme";

export default (props) => {
    return <View style={[styles.wrapper, props.editMode && {backgroundColor: 'green'}]}>
        <View style={styles.header}>
            <Text style={styles.textHeader}>
                {props.header}
            </Text>
        </View>
        <View style={styles.content}>
            <Text style={styles.textContent}>
                {props.content}
            </Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        height: 'auto',
        // width: parentSize,
        backgroundColor: theme.node.backgroundColor,
        borderRadius: theme.node.borderRadius,
        elevation: theme.node.elevation,
        marginVertical: 10,
        marginHorizontal: WIDTH / 30,
        paddingHorizontal: '5%',
    },
    header: {
        paddingVertical: 10,
    },
    content: {
        paddingBottom: 10
    },
    textHeader: {
        fontSize: 24,
        color: 'white'
    },
    textContent: {
        fontSize: 18,
        color: 'white'
    }
});