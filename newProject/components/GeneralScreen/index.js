import React, {useState, useRef} from 'react';
import {View, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Animated} from "react-native";
import NoteBox from '../NoteBox/index';
import theme from "../../values/theme";
import RoundButton from '../RoundButton/index';
import ScreenNames from "../../navigation/ScreenNames";
import {connect} from "react-redux";
import actions from "../../store/actions/actions";
import {translate} from "./anim";

const GeneralScreen = (props) => {
    const [editIndex, setEditIndex] = useState(false);

    const topEditButton = useRef(new Animated.Value(-theme.roundButton.buttonSize)).current;
    const topDeleteButton = useRef(new Animated.Value(-theme.roundButton.buttonSize)).current;

    const setEdit = (index) => {
        setEditIndex(index);
        translate(topEditButton,  30 + theme.roundButton.buttonSize, 300);
        translate(topDeleteButton,  45 + theme.roundButton.buttonSize*2, 300)
    };

    const unsetEdit = () => {
        setEditIndex(false);
        translate(topEditButton,  -theme.roundButton.buttonSize, 300);
        translate(topDeleteButton,  -theme.roundButton.buttonSize, 300)
    };

    const goToEditor = () => {
        props.navigation.push(ScreenNames.editor);
        unsetEdit()
    };

    const sendNoteToEditor = () => {
        props.navigation.push(ScreenNames.editor, {
            index: editIndex,
            ...props.data.notes[editIndex],
        });
        unsetEdit();
    };

    const deleteNote = (editIndex) => {
        props.deleteNoteAction(editIndex);
        unsetEdit();
    };

    const renderNotes = () => {
        return props.data.notes.map((elem, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    onLongPress={() => setEdit(index)}
                    onPress={() => unsetEdit()}
                    activeOpacity={1}
                >
                    <NoteBox header={elem.header}
                             content={elem.content}
                             editMode={index === editIndex}/>
                </TouchableOpacity>
            );
        });
    };

    return <ImageBackground blurRadius={3} style={styles.wrapper} source={theme.generalScreen.background}
                            resizeMode={"contain"}>
        <ScrollView>
            {renderNotes()}
        </ScrollView>
        <Animated.View  style={styles.activeButton}>
            <TouchableOpacity
                activeOpacity={0.3}
                onPress={goToEditor}
            >
                <RoundButton image={theme.actionButton.img}/>
            </TouchableOpacity>
        </Animated.View>
        {
            // editIndex !== false && (
                <Animated.View style={[styles.editButton,  {bottom: topEditButton}]}>
                    <TouchableOpacity
                        activeOpacity={0.3}
                        onPress={sendNoteToEditor}
                    >
                        <RoundButton image={theme.editButton.img}/>
                    </TouchableOpacity>
                </Animated.View>
            // )
        }
        {
            // editIndex !== false && (
                <Animated.View style={[styles.deleteButton, {bottom: topDeleteButton}]}>
                    <TouchableOpacity
                        activeOpacity={0.3}
                        onPress={deleteNote}
                    >
                        <RoundButton image={theme.deleteButton.img}/>
                    </TouchableOpacity>
                </Animated.View>
            // )
        }
    </ImageBackground>
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingTop: theme.generalScreen.paddingTop
    },
    activeButton: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        elevation: 3
    },
    deleteButton: {
        position: 'absolute',
        right: 15,
        elevation: 2
    },
   editButton: {
        position: 'absolute',
        right: 15,
       elevation: 2
    }
});

const mapStateToProps = state => {
    return {
        data: state.data
    }
};

export default connect(mapStateToProps, actions)(GeneralScreen);
