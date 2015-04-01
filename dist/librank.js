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
    var score = (points - 1) / Math.pow((hours + 2), gravity);
    return score;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwicmFuay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJsaWJyYW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHBhY2thZ2Vqc29uID0gcmVxdWlyZSgnLi9wYWNrYWdlLmpzb24nKTtcblxuZXhwb3J0cy52ZXJzaW9uID0gcGFja2FnZWpzb24udmVyc2lvbjtcblxuZXhwb3J0cy5yYW5rID0gcmVxdWlyZSgnLi9saWIvcmFuay5qcycpO1xuIiwiLyoqXG4gKiBDYWxjdWxhdGUgcmFua1xuICpcbiAqIEltcGxlbWVudHMgaGFja2VyIG5ld3MgYWxnb3JpdGhtLlxuICpcbiAqIFwiXCJcbiAqIHNjb3JlID0gKHBvaW50cyAtIDEpIC8gKGhvdXJzLTIpIF4gZ3Jhdml0eVxuICpcbiAqIHBvaW50cyA9IG51bWJlciBvZiB2b3Rlc1xuICogaG91cnMgPSBwdWJsaXNoZWQgdGltZSBhbW91bnQgb2YgaG91cnMgYWdvXG4gKiBncmF2aXR5ID0gMS44IG9uIEhOXG4gKlxuICogQHBhcmFtIHBvaW50cyAgICBpbnQgbnVtYmVyIG9mIHBvaW50c1xuICogQHBhcmFtIGhvdXJzICAgICBmbG9hdCBudW1iZXIgb2YgaG91cnMgcHVibGlzaGVkIGFnb1xuICogQHBhcmFtIGdyYXZpdHkgICBmbG9hdCBncmF2aXR5XG4gKi9cbmV4cG9ydHMucmFuayA9IGZ1bmN0aW9uKHBvaW50cywgaG91cnMsIGdyYXZpdHkpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICB2YXIgc2NvcmUgPSAocG9pbnRzIC0gMSkgLyBNYXRoLnBvdygoaG91cnMgKyAyKSwgZ3Jhdml0eSk7XG4gICAgcmV0dXJuIHNjb3JlO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==