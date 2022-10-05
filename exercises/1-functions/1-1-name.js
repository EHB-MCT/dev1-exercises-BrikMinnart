"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d"); 

drawname();

function drawname(){

//Letter B
context.lineWidth = 5
context.strokeStyle = "red"
context.beginPath();
context.moveTo(300,300);
context.lineTo(300,500);
context.lineTo(400,450);
context.lineTo(300,400);
context.lineTo(400,350);
context.lineTo(300,300);
context.stroke();

//Letter R
context.lineWidth = 5
context.strokeStyle = "blue"
context.beginPath();
context.moveTo(500,500);
context.lineTo(500,300);
context.lineTo(600,350);
context.lineTo(500,400);
context.lineTo(600,500);
context.stroke();

//Letter I
context.lineWidth = 5
context.strokeStyle = "green"
context.beginPath();
context.moveTo(700,300);
context.lineTo(700,500);
context.stroke();

//Letter K
context.lineWidth = 5
context.strokeStyle = "pink"
context.beginPath();
context.moveTo(800,300);
context.lineTo(800,500);
context.lineTo(800,400);
context.lineTo(900,300);
context.lineTo(800,400);
context.lineTo(900,500);
context.stroke();
}