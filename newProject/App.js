import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from "react-navigation";
import StackNavigator from "./navigation/StackNavigator";
import './settings.js';
import {createStore} from "redux";
import {rootReducer} from './store/reducers/rootReducer';
import {Provider} from "react-redux";

const AppContainer = createAppContainer(StackNavigator);
const store = createStore(rootReducer);

export default function App() {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
