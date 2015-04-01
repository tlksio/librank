var should = require("should");

var rank = require("../index.js").rank;

describe("Rank calculation", function() {

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
            should.equal(0.10177658506910982, score);
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
            var older_hours = hours + 1;
            var older_score = rank.rank(points, older_hours, gravity);
            (score > older_score).should.be.true;
            done();
        });

        it('increases rank if it is fresh', function(done) {
            var earlier_hours = hours - 1;
            var earlier_score = rank.rank(points, earlier_hours, gravity);
            (score < earlier_score).should.be.true;
            done();
        });

    });

});
