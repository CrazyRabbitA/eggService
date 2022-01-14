const Controller = require('egg').Controller;

class UserController extends Controller {
    async create() {
        const {ctx} = this;
        const body = ctx.request.body;
        const userService = this.service.user;

        if (await userService.findByUserName(body.userName)) {
            this.ctx.throw(422, '用户已存在');
        }
        const user = await userService.createUser(body);
        console.log('user', user);

        const token = await userService.createToken({
            userId: user._id
        })
        console.log('???', user);
        console.log('token', token);
        this.ctx.body = {
            user: {
                username: user.userName,
                token
            }
        }
    }

    async login() {
        const {ctx} = this;
        const body = ctx.request.body;
        const userService = this.service.user;
        const user = await userService.findByUserName(body.userName);
        // 校验用户是否存在
        if (!user) {
            this.ctx.throw(422, '用户不存在');
        }
        // 校验密码是否正确
        if (this.ctx.helper.md5(body.password) !== user.password) {
            this.ctx.throw(422, '密码不正确');
        }
        // 生成token
        const token = await userService.createToken({
            userId: user._id
        })
        // 返回响应结果
        this.ctx.body = {
            user: {
                username: user.userName,
                token
            }
        }
    }

    async getCurrentUser() {
        // 验证token
        // 获取用户信息
        // 发送响应
        const user = this.ctx.user;
        this.ctx.body = this.ctx.user;
        this.ctx.body = {
            user: {
                userName: user.userName
            }
        }
    }
}

module.exports = UserController;
