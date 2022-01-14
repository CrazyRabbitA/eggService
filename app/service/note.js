const Service = require('egg').Service;

class NoteService extends Service {
    get Note() {
        return this.app.model.Note
    }

    async createNote(data) {
        console.log('新增便签');
        data.userId = this.ctx.user._id;
        const note = new this.Note(data)
        console.log('?', note);
        await note.save();
        return note;
    }

    async queryNotes() {
        // const userId = this.ctx.user._id;
        // const note = new this.Note({userId});
        // console.log('这里看看', note);
        // await note.find();
        // return note;



        const userId = this.ctx.user._id;
        const note = new this.Note({userId});
        console.log('这里看看', note);
        await note.find();
        return note;
    }


}

module.exports = NoteService
