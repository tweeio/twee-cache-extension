/**
 * Redis store initializer
 */
module.exports.extension = function() {
    "use strict";

    var _redis = require("redis")
        , redisConfig = twee.getConfig('twee:options:cache:redis');

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
