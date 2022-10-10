"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d"); 

drawbox();
function drawbox(){

//box
context.lineWidth = 5
context.beginPath();
context.moveTo(50,50);
context.lineTo(50,200);
context.lineTo(200,200);
context.lineTo(200,50);
context.lineTo(50,50)
context.stroke();

//Cross

context.lineWidth = 5
context.strokeStyle= "red"
context.beginPath();
context.moveTo(50,50);
context.lineTo(200,200);
context.stroke();

context.lineWidth = 5
context.beginPath();
context.moveTo(200,50);
context.lineTo(50,200);
context.stroke();
}