"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalLines();
}

function drawDiagonalLines() {
    let i =0 ;
    let spacing = 25;
    let ofset = 25 ;
    while (i <=7) {
        Utils.drawLine(50+(i*spacing),175+(i*ofset),175+(i*spacing),50+(i*ofset));
        i =i+1;
    }
}