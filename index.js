var packagejson = require('./package.json');

exports.version = packagejson.version;

exports.rank = require('./lib/rank.js');
