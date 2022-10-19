"use strict"

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width;
let height = context.canvas.height;

let size = 800;
let sizeDif= 100;
let pos = 50;
let posDif = 50;


drawRectangles(pos,size);
drawRectangles(pos+posDif,size-sizeDif);
drawRectangles(pos+2*posDif,size-2*sizeDif);
drawRectangles(pos+3*posDif,size-3*sizeDif);
drawRectangles(pos+4*posDif,size-4*sizeDif);
drawRectangles(pos+5*posDif,size-5*sizeDif);
drawRectangles(pos+6*posDif,size-6*sizeDif);
drawRectangles(pos+7*posDif,size-7*sizeDif);

function drawRectangles(pos, size){
    let r = Math.floor(Math.random()* 255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    
    
    console.log(r, g, b);
    
    let color = "rgb("+r+","+g+","+b+")";
    context.fillStyle = color
    
context.fillRect(pos,pos,size,size);
}