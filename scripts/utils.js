"use strict"

import context from "./context.js"

/**
 * Draws a line between 2 points
 * @param {Number} x1 x coordinate of the starting point
 * @param {Number} y2 y coordinate of the starting point
 * @param {Number} x2 x coordinate of the ending point
 * @param {Number} y2 y coordinate of the ending point
 */

export function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}