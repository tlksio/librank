var should = require("should");

var librank = require('../index.js');

describe('Common', function() {
    "use strict";

    it('has a version', function() {
        var version = require('../package.json').version;
        should.equal(version, librank.version);
    });
});
