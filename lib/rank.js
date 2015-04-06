/**
 * Calculate rank
 *
 * Implements hacker news algorithm.
 *
 * """
 * score = (points) / (hours - timebase) ^ gravity
 * """
 *
 * points = number of votes
 * hours = published time amount of hours ago
 * timebase = number of hours without penalization
 * gravity = 1.8 by default
 *
 * @param points    int number of points
 * @param hours     float number of hours published ago
 * @param gravity   float gravity
 */
exports.rank = function(points, hours, gravity) {
    "use strict";
    var timebase = 0;
    var score = (points) / Math.pow((hours + timebase), gravity);
    return score;
};
