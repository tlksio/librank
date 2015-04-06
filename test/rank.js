var should = require("should");

var rank = require("../index.js").rank;

describe("Rank calculation", function() {
    "use strict";

    var points = 72;

    var hours = 36;

    var gravity = 1.8;

    describe("Calulate the rank for an element", function() {

        var score;

        before(function(done) {
            score = rank.rank(points, hours, gravity);
            done();
        });

        it('is bigger than 0', function(done) {
            (score > 0).should.be.true;
            done();
        });

        it('is correct', function(done) {
            should.equal(0.1137595839488455, score);
            done();
        });

    });

    describe("Rank variation factor based on published time", function() {

        var score;

        before(function(done) {
            score = rank.rank(points, hours, gravity);
            done();
        });

        it('decreases rank if it is older', function(done) {
            var olderHours = hours + 1;
            var olderScore = rank.rank(points, olderHours, gravity);
            (score > olderScore).should.be.true;
            done();
        });

        it('increases rank if it is fresh', function(done) {
            var earlierHours = hours - 1;
            var earlierScore = rank.rank(points, earlierHours, gravity);
            (score < earlierScore).should.be.true;
            done();
        });

    });

});
