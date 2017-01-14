module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    // 配置Grunt各种模块的参数
    grunt.initConfig({
        connect: {
            options: {
                hostname: "127.0.0.1",
                keepalive: true,
                open: false
            },
            proxies: [{
                    context: '/history',
                    changeOrigin: true,
                    host: "127.0.0.1",
                    port: 8080
                }],
            mc: {
                options: {
                    port: 8081,
                    protocol: "http",
                    middleware: function(connect) {
                        return [
                            require('grunt-connect-proxy/lib/utils').proxyRequest,
                            connect.static('app/')
                        ];
                    }
                }
            }
        }
    });

    // 从node_modules目录加载模块文件
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('mc', ['configureProxies', 'connect:mc']);
    // 默认启动mc，合并
    grunt.registerTask('default', ['mc']);
};
