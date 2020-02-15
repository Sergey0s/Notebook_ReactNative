import React, {useState} from "react";
import {View, Image, StyleSheet, ImageBackground, TextInput, TouchableOpacity} from "react-native"
import {HEIGHT, parentSize, WIDTH} from "../../values/dimen";
import theme from "../../values/theme";
import RoundButton from '../RoundButton/index';
import Note from '../Entities/note';
import actions from "../../store/actions/actions";
import {connect} from "react-redux";

const EditorScreen = (props) => {
    const editedNote = props.navigation.state.params;

    const [header, setHeader] = useState(editedNote && editedNote.header || '');
    const [content, setContent] = useState(editedNote && editedNote.content || '');

    const goGeneralScreen = () => {
        props.navigation.pop()
    };
    const addNewNote = () => {
        props.addNoteAction(new Note({header: header, content: content, photo: null, data: new Date()}));
        goGeneralScreen();
    };

    const editCurrentNote = () => {
        props.editNoteAction(editedNote.index, new Note({header, content, photo: null, data: editedNote.data}));
        goGeneralScreen();
    };

    return (
        <ImageBackground blurRadius={3} style={styles.wrapper} source={theme.generalScreen.background}
                         resizeMode={"contain"}>
            <View style={styles.editorPanel}>
                <TextInput
                    // autoFocus
                    placeholder={'Введите название'}
                    placeholderTextColor={'white'}
                    style={[styles.input, {fontSize: 26}]}
                    onChangeText={(e) => {
                        setHeader(e)
                    }}
                    defaultValue={header}
                />
                <TextInput
                    placeholder={'Введите текст'}
                    placeholderTextColor={'white'}
                    style={[styles.input, {fontSize: 18}]}
                    multiline
                    onChangeText={(e) => {
                        setContent(e)
                    }}
                    defaultValue={content}
                />
            </View>
            <View style={styles.buttonPanel}>
                <TouchableOpacity onPress={goGeneralScreen}>
                    <RoundButton image={require('../../assets/back.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <RoundButton image={require('../../assets/camera.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={editedNote ? editCurrentNote : addNewNote}>
                    <RoundButton image={require('../../assets/add.png')}/>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingTop: theme.generalScreen.paddingTop
    },
    editorPanel: {
        flex: 1,
        backgroundColor: 'rgba(100,10,255,0.9)',
        marginHorizontal: WIDTH / 20,
        marginVertical: HEIGHT / 20,
        elevation: 10
    },
    input: {
        marginHorizontal: 25,
        marginTop: 20
    },
    buttonPanel: {
        width: parentSize,
        position: 'absolute',
        flexDirection: 'row',
        elevation: 11,
        justifyContent: 'space-around',
        bottom: 10,
    }
});

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
};

export default connect(mapStateToProps, actions)(EditorScreen)