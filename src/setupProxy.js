const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/api', {
        target: 'http://api.zhuishushenqi.com/',
        pathRewrite: {
            "^/api": "/"
        }
    }));
    app.use(proxy('/dbapi', {
        target: 'http://api.douban.com/',
        changeOrigin: true,
        pathRewrite: {
            "^/dbapi": "/"
        }
    }));
};