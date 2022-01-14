module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const NoteSchema = new Schema({ // 数据库-> 集合 -> 文档  新建集合
        userId: {
            type: mongoose.ObjectId,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        }
    });

    return mongoose.model('Note', NoteSchema);
}
