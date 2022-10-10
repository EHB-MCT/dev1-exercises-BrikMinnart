"use strict"

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d"); 

drawrectangles();

function drawrectangles(){

//first big rectangle
context.strokeStyle = "red"
context.beginPath();
context.rect(50,50,150,150);
context.stroke();

//third big rectangle
context.strokeStyle = "red"
context.beginPath();
context.rect(200,200,150,150);
context.stroke();

//second big rectangle
context.strokeStyle = "red"
context.beginPath();
context.rect(125,125,150,150);
context.stroke();
context.fill();



//first mid rectangle
context.strokeStyle = "red"
context.beginPath();
context.rect(75,275,50,50);
context.stroke();

//second mid rectangle
context.strokeStyle = "red"
context.beginPath();
context.rect(275,75,50,50);
context.stroke();

//first small rectangle
context.strokeStyle = "black"
context.beginPath();
context.rect(50,325,25,25);
context.stroke();
context.fill();

//second small rectangle
context.strokeStyle = "black"
context.beginPath();
context.rect(325,50,25,25);
context.stroke();
context.fill();



}
