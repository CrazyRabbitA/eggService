const Service = require('egg').Service;
const jwt = require('jsonwebtoken');

class UserService extends Service {
    get User() {
        return this.app.model.User
    }

    findByUserName(userName) {
        // console.log(this.User);
        // console.log('看先userName', userName);
        // console.log('数据库是否已存在', this.User.findOne({userName}))
        return this.User.findOne({userName});
    }

    async createUser(data) {
        data.password = this.ctx.helper.md5(data.password)
        const user = new this.User(data)
        await user.save();
        return user;
    }

    async createToken(data) {
        return jwt.sign(data, this.app.config.jwt.secret, {
            expiresIn: this.app.config.jwt.expiresIn
        });
    }

    verifyToken(token) {
        // console.log('验证token');
        return jwt.verify(token, this.app.config.jwt.secret);
    }

}

module.exports = UserService
