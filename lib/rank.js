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
