import Note from "../../components/Entities/note";

const initialState = {
    notes: [
        new Note ({header: 'Note 1', content: 'text', photo: null, date: new Date()})
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {

        default: return {...state};
    }

};