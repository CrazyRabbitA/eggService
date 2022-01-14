module.exports = () => {
    return async (ctx, next) => {
        // console.log('到中间件里面了');
        // console.log(ctx.headers);
        // 获取请求头中的token
        let token = ctx.headers['token'];
        // token = token ? token.split('Bearer ')[1] : null
        // console.log(token);
        // 验证token是否有效 无效返回401
        if (!token) {
            ctx.throw(401);
        }
        try {
            // 有效，根据userId获取用户数据，挂载到ctx中给后续中间件使用
            const data = ctx.service.user.verifyToken(token)
            ctx.user = await ctx.model.User.findById(data.userId);
        } catch (err) {
            ctx.throw(401);
        }
        // next 执行后续中间件
        await next();
    }
}
