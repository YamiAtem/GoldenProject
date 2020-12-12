// scene images
var scene1, scene2, scene3;

// scene checker
var scene = '1';

// scene props
var invisGround, edges;

// character
var apollo, left, right, lookingLeft, lookingRight, leftSteps, rightSteps, moving, idleLeft, idleRight, idle;

// fire 
var fire1, fire2, fire, fireAnim;

leftSteps = 0;
rightSteps = 0;

left = [];
right = [];
fire = [];

moving = false;
lookingLeft = false;
lookingRight = false;

function preload() {
    scene1 = loadImage('Images/Cave.jpg');
    scene2 = loadImage('Images/Village.jpg');
    scene3 = loadImage('Images/Cave2.jpg')

    for (var i = 0; i < 10; i++) {
        left[i] = loadImage("Apollo/Left/tile05" + i + ".png");
    }

    for (var i = 0; i < 10; i++) {
        right[i] = loadImage("Apollo/Right/tile07" + i + ".png");
    }

    for (var i = 0; i < 6; i++) {
        fire[i] = loadImage("NPC/Fire/tile00" + i + ".png")
    }

    fireAnim = loadAnimation(fire[0], fire[1], fire[2], fire[3], fire[4], fire[5])

    idleLeft = loadImage('Apollo/Idle/tile010.png');
    idleRight = loadImage('Apollo/Idle/tile030.png');
    idle = loadImage('Apollo/Idle/tile000.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    apollo = createSprite(windowWidth/2, windowHeight-120, 40, 40)

    invisGround= createSprite(windowWidth/2, windowHeight-100, windowWidth, 20);
    invisGround.visible = false;

    fire1 = createSprite(windowWidth/1.75, windowHeight/1.75, 20, 20)
    fire1.addAnimation('Fire', fireAnim)
    fire1.visible = false;

    fire2 = createSprite(windowWidth/3.9, windowHeight/1.75, 20, 20)
    fire2.addAnimation('Fire', fireAnim)
    fire2.visible = false;


    edges = createEdgeSprites();
}


function draw() {
    SceneChange();

    apollo.collide(invisGround)

    moveLeft();
    moveRight();

    drawSprites();
}