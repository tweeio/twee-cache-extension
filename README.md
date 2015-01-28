# twee-cache-extension

![Twee.io Logo](https://raw.githubusercontent.com/tweeio/twee-framework/master/assets/68747470733a2f2f73332e65752d63656e7472616c2d312e616d617a6f6e6177732e636f6d2f6d657368696e2f7075626c69632f747765652e696f2e706e67.png)

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/tweeio/twee-framework?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![npm](https://img.shields.io/npm/dm/localeval.svg)](https://github.com/tweeio/twee-framework)
[![npm](https://img.shields.io/npm/l/express.svg)](https://github.com/tweeio/twee-framework)

Cache extension for Twee.io Framework - MVC Framework for Node.js and io.js based on Express.js
Supports Redis, Memcache, Memory, Files storages

To install it use this command:

```
npm install twee-cache-extension --save
```

Editing `package.json` of your application:

```
"dependencies": {
    "twee-cache-extension": "*"
}
```

Turning extension `ON` in `application/configs/twee.js`:

```
module.exports = {
    "extensions": {
        "Redis Cache": {
            "module": "twee-cache-extension/redis"
        }
    }
};
```
