/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1641634975523_4939';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        myAppName: 'egg',
    };

    config.mongoose = {
        client: {
            url: 'mongodb://localhost:27017/noteDemo',
            options: {
                useUnifiedTopology: true
            },
            // mongoose global plugins, expected a function or an array of function and options
            plugins: []
        },
    };
    config.security = {
        csrf: {
            enable: false
        }
    }
    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
    };
    config.jwt = {
        secret: '868a7c76-934d-49b2-9e86-103f06dfb33c',
        expiresIn: '1d'
    }

    return {
        ...config,
        ...userConfig,
    };
};
