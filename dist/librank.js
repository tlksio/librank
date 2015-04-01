var packagejson = require('./package.json');

exports.version = packagejson.version;

exports.rank = require('./lib/rank.js');

/**
 * Calculate rank
 *
 * Implements hacker news algorithm.
 *
 * ""
 * score = (points - 1) / (hours-2) ^ gravity
 *
 * points = number of votes
 * hours = published time amount of hours ago
 * gravity = 1.8 on HN
 *
 * @param points    int number of points
 * @param hours     float number of hours published ago
 * @param gravity   float gravity
 */
exports.rank = function(points, hours, gravity) {
    "use strict";
    return 3.1416;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwicmFuay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibGlicmFuay5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBwYWNrYWdlanNvbiA9IHJlcXVpcmUoJy4vcGFja2FnZS5qc29uJyk7XG5cbmV4cG9ydHMudmVyc2lvbiA9IHBhY2thZ2Vqc29uLnZlcnNpb247XG5cbmV4cG9ydHMucmFuayA9IHJlcXVpcmUoJy4vbGliL3JhbmsuanMnKTtcbiIsIi8qKlxuICogQ2FsY3VsYXRlIHJhbmtcbiAqXG4gKiBJbXBsZW1lbnRzIGhhY2tlciBuZXdzIGFsZ29yaXRobS5cbiAqXG4gKiBcIlwiXG4gKiBzY29yZSA9IChwb2ludHMgLSAxKSAvIChob3Vycy0yKSBeIGdyYXZpdHlcbiAqXG4gKiBwb2ludHMgPSBudW1iZXIgb2Ygdm90ZXNcbiAqIGhvdXJzID0gcHVibGlzaGVkIHRpbWUgYW1vdW50IG9mIGhvdXJzIGFnb1xuICogZ3Jhdml0eSA9IDEuOCBvbiBITlxuICpcbiAqIEBwYXJhbSBwb2ludHMgICAgaW50IG51bWJlciBvZiBwb2ludHNcbiAqIEBwYXJhbSBob3VycyAgICAgZmxvYXQgbnVtYmVyIG9mIGhvdXJzIHB1Ymxpc2hlZCBhZ29cbiAqIEBwYXJhbSBncmF2aXR5ICAgZmxvYXQgZ3Jhdml0eVxuICovXG5leHBvcnRzLnJhbmsgPSBmdW5jdGlvbihwb2ludHMsIGhvdXJzLCBncmF2aXR5KSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgcmV0dXJuIDMuMTQxNjtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=