// scene images
var scene1, scene2;

// scene checker
var scene = '1';

// scene props
var invisGround, edges;

// character
var apollo, left, right, lookingLeft, lookingRight, leftSteps, rightSteps, moving, idleLeft, idleRight, idle;
leftSteps = 0;
rightSteps = 0;
left = [];
right = [];
moving = false;
lookingLeft = false;
lookingRight = false;

function preload() {
    scene1 = loadImage('Images/Cave.jpg');
    scene2 = loadImage('Images/Village.jpg');

    for (var i = 0; i < 10; i++) {
        left[i] = loadImage("Apollo/Left/tile05" + i + ".png");
    }

    for (var i = 0; i < 10; i++) {
        right[i] = loadImage("Apollo/Right/tile07" + i + ".png");
    }

    idleLeft = loadImage('Apollo/Idle/tile010.png');
    idleRight = loadImage('Apollo/Idle/tile030.png');
    idle = loadImage('Apollo/Idle/tile000.png')
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    apollo = createSprite(windowWidth/2, windowHeight-120, 40, 40)

    invisGround= createSprite(windowWidth/2, windowHeight-100, windowWidth, 20);
    invisGround.visible = false;

    edges = createEdgeSprites();
}


function draw() {

    if (scene === '1'){
        background(scene1)
    } else if (scene === '2') {
        background(scene2)
    }

    apollo.collide(invisGround)

    moveLeft();

    // not moving
    if (moving === false) {
        if (lookingLeft === true) {
            apollo.addImage(idleLeft);
        } else if (lookingRight === true) {
            apollo.addImage(idleRight);
        } else {
            apollo.addImage(idle);
        }
    }
    
    // cave and villiage scene
    if (apollo.isTouching(edges[0]) && scene === '1') {
        console.log("Village on left")
        scene = '2'
        apollo.x = windowWidth/3;
    } else if (apollo.isTouching(edges[0]) && scene === '2') {
        scene = '1'
        apollo.x = windowWidth/3;
        console.log('cave on the right')
    } else if (apollo.isTouching(edges[1]) && scene === '1') {
        scene = '2'
        apollo.x = windowWidth/4;
        console.log('MoreCave')
    }
    drawSprites();
}