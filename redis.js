/**
 * Redis store initializer
 */
module.exports.extension = function() {
    "use strict";

    var _redis = require("redis")
        , redisConfig = twee.getConfig('twee:extension:twee-cache:redis');

    var redisClient = _redis.createClient(redisConfig);

    redisClient.on("error", function (err) {
        twee.error('Redis Error: ' + err);
    });

    twee.on('twee.Exit', function(){
        twee.log('[REDIS] Disconnecting.');
        redisClient.quit();
    });

    twee.getApplication().set('redis', redisClient);
};

module.exports.configNamespace = 'twee-cache';

module.exports.config = {
    "redis": {
        "host": "127.0.0.1",
        "port": 6379
    }
};
