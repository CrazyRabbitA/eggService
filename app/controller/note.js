const Controller = require('egg').Controller;

class NoteController extends Controller {
    async addNote() {
        const {ctx} = this;
        const body = ctx.request.body;
        const noteService = this.service.note;
        await noteService.createNote(body);
        this.ctx.body = {
            data: {
                message: 'success'
            }
        }
    }

    async queryNotes() {
        const {Note} = this.app.model;
        console.log('queryNotes');
        console.log(this.ctx);
        const userId = this.ctx.user._id;
        const note = await Note.find({userId});
        console.log('这里看看');
        console.log(Array.isArray(note));
        const arr = note.map(item => {
            let tempObj = {};
            tempObj.time = item.time;
            tempObj.location = item.location;
            tempObj.title = item.title;
            tempObj.noteId = item._id;
            return tempObj;
        })
        this.ctx.body = {
            noteList: arr
        }
        // const noteService = this.service.note;
        // console.log(noteService.queryNotes());
        // const resData = noteService.queryNotes();
        // this.ctx.body = {
        //     resData
        // }
        // return this.User.findOne({userName});


    }

    async updateNote() {
        const {Note} = this.app.model;
        const {noteId, title, location, time} = this.ctx.request.body
        const note = await Note.findById(noteId);
        console.log('body', this.ctx.request.body);
        await note.update({
            title, location, time
        })
        this.ctx.status = 200;
    }

    async deleteNote() {
        const {Note} = this.app.model;
        const {noteId} = this.ctx.request.body
        const note = await Note.findById(noteId);
        if (!note) {
            this.ctx.throw(404);
        }
        if (!note.userId.equals(this.ctx.user._id)) {
            this.ctx.throw(403);
        }
        await note.remove();
        this.ctx.status = 200;
    }
}

module.exports = NoteController;
