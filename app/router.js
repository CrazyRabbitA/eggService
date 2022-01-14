'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    const auth = app.middleware.auth();
    router.prefix('/api/v1'); //设置基础路径
    router.post('/users', controller.user.create); //用户注册
    router.post('/users/login', controller.user.login); //用户登录
    router.get('/user', auth, controller.user.getCurrentUser); // 获取用户信息

    router.post('/addNote', auth, controller.note.addNote); //新增note
    router.get('/queryNotes', auth, controller.note.queryNotes) // 查询note 列表
    router.post('/updateNote', auth, controller.note.updateNote) // 更新note
    router.post('/deleteNote', auth, controller.note.deleteNote) // 删除note
};
