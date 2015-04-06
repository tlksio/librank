var packagejson = require('./package.json');

exports.version = packagejson.version;

exports.rank = require('./lib/rank.js');

/**
 * Calculate rank
 *
 * Implements hacker news algorithm.
 *
 * ""
 * score = (points) / (hours-2) ^ gravity
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
    var score = (points) / Math.pow((hours + 2), gravity);
    return score;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwicmFuay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJsaWJyYW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHBhY2thZ2Vqc29uID0gcmVxdWlyZSgnLi9wYWNrYWdlLmpzb24nKTtcblxuZXhwb3J0cy52ZXJzaW9uID0gcGFja2FnZWpzb24udmVyc2lvbjtcblxuZXhwb3J0cy5yYW5rID0gcmVxdWlyZSgnLi9saWIvcmFuay5qcycpO1xuIiwiLyoqXG4gKiBDYWxjdWxhdGUgcmFua1xuICpcbiAqIEltcGxlbWVudHMgaGFja2VyIG5ld3MgYWxnb3JpdGhtLlxuICpcbiAqIFwiXCJcbiAqIHNjb3JlID0gKHBvaW50cykgLyAoaG91cnMtMikgXiBncmF2aXR5XG4gKlxuICogcG9pbnRzID0gbnVtYmVyIG9mIHZvdGVzXG4gKiBob3VycyA9IHB1Ymxpc2hlZCB0aW1lIGFtb3VudCBvZiBob3VycyBhZ29cbiAqIGdyYXZpdHkgPSAxLjggb24gSE5cbiAqXG4gKiBAcGFyYW0gcG9pbnRzICAgIGludCBudW1iZXIgb2YgcG9pbnRzXG4gKiBAcGFyYW0gaG91cnMgICAgIGZsb2F0IG51bWJlciBvZiBob3VycyBwdWJsaXNoZWQgYWdvXG4gKiBAcGFyYW0gZ3Jhdml0eSAgIGZsb2F0IGdyYXZpdHlcbiAqL1xuZXhwb3J0cy5yYW5rID0gZnVuY3Rpb24ocG9pbnRzLCBob3VycywgZ3Jhdml0eSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIHZhciBzY29yZSA9IChwb2ludHMpIC8gTWF0aC5wb3coKGhvdXJzICsgMiksIGdyYXZpdHkpO1xuICAgIHJldHVybiBzY29yZTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=