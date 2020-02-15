export default class Note {
    header;
    content;
    footer;
    data;
    constructor(param) {
        this.header = param.header;
        this.content = param.content;
        this.photo = param.photo;
        this.data = new Date();
    }

    edit(cat, value) {
        this[cat] = value;
    }
}