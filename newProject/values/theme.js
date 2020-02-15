import {HEIGHT, heightStatusBar} from "./dimen";

export default {
    generalScreen: {
        paddingTop: heightStatusBar,
        background: require('../assets/ficus.jpg')
    },
    node: {
        height: HEIGHT / 4,
        backgroundColor: 'rgba(100,10,255,0.9)',
        elevation: 7,
        borderRadius: 30
    },
    roundButton: {
        buttonSize: 70,
        anim: 300
    },
    actionButton: {
        img: require('../assets/add.png')
    },
    deleteButton: {
        img: require('../assets/delete.png')
    },
    editButton: {
        img: require('../assets/edit.png')
    }

}