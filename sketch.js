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

// health bar
var healthInt, healthBar, healthBack;
healthInt = 100;

// sword 
var swordImage, swordSprite, hasSword1, hasSword2;
var leftSwordImg, rightSwordI;
var sword2;

// scene 2 villian
var villian, villianAnim, villianArray, villianHits;
villianHits = 10;
villianArray = []

leftSteps = 0;
rightSteps = 0;

left = [];
right = [];
fire = [];

moving = false;
lookingLeft = false;
lookingRight = false;

function preload() {
    loadSceneImages();

    loadApolloAnim();
    loadApolloIdleImages();

    loadFireAnim();

    loadSwordImage();
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    apollo = createSprite(windowWidth/2, windowHeight-120, 40, 40)

    invisGround= createSprite(windowWidth/2, windowHeight-100, windowWidth, 20);
    invisGround.visible = false;

    loadFireSprite();

    //healthBack = createSprite(windowWidth/0.5, windowHeight/)

    loadSwordSprites();

    villian = createSprite(windowWidth/1.15, windowHeight-120, 80, 80)

    edges = createEdgeSprites();
}


function draw() {
    SceneChange();

    apollo.collide(invisGround)
    villian.collide(invisGround)

    moveLeft();
    moveRight();

    getSword();
    useSword();

    drawSprites();
}