module.exports = app => {
    const mongoose = app.mongoose;
    // 数据库-> 集合 -> 文档
    // 每个 schema 都会映射到一个 MongoDB collection ，并定义这个collection里的文档的构成。
    const Schema = mongoose.Schema;

    const UserSchema = new Schema({ //
        userName: {
            type: String
        },
        password: {type: String},
    });

    return mongoose.model('User', UserSchema);
}
