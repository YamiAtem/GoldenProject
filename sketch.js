// scene images
var scene1;

function preload() {
    scene1 = loadImage('Images/Cave.jpg')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    background(scene1)
}