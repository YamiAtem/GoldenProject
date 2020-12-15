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

    fire1 = createSprite(windowWidth/1.75, windowHeight/1.95, 20, 20)
    fire1.addAnimation('Fire', fireAnim)
    fire1.scale = 0.5;
    

    fire2 = createSprite(windowWidth/3.9, windowHeight/1.95, 20, 20)
    fire2.addAnimation('Fire', fireAnim)
    fire2.scale = 0.5;

    //healthBack = createSprite(windowWidth/0.5, windowHeight/)

    swordSprite = createSprite(windowWidth/5, windowHeight-120)
    swordSprite.addImage(swordImage)
    swordSprite.scale = 0.25
    swordSprite.visible = false;

    sword2 = createSprite(100, 100)
    sword2.visible = false;

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