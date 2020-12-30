// scene images
var scene1, scene2, scene3, scene4, scene5;

// scene checker
var scene = '2';

// scene props
var invisGround, edges, invisWall;

// character
var apollo, left, right, lookingLeft, lookingRight, leftSteps, rightSteps, moving, idleLeft, idleRight, idle, apolloHits;
apolloHits = 20;

// fire 
var fire1, fire2, fire, fireAnim;

// health bar
var healthInt, healthBar;
healthInt = 100;

// sword 
var swordImage, swordSprite, hasSword1, hasSword2;
var leftSwordImg, rightSwordImg;
var sword2, usedSword;

// scene 2 villians
var villian, villian2, villian3, villian4, villian3, villian4, villianAnim, villianArray;

// main villian

var princess, mainVillian, princessImg, princessAnim, mainVillianImg;

villianArray = [];

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

    loadVillianAnim();
    

    v = loadImage('NPC/flying obstacle/fly-hardrock/tile001.png');
    v1 = loadImage('NPC/flying obstacle/fly-hardrock/tile002.png');
    v2 = loadImage('NPC/flying obstacle/fly-hardrock/tile003.png');
    v3 = loadImage('NPC/flying obstacle/fly-hardrock/tile004.png');
    v4 = loadImage('NPC/flying obstacle/fly-hardrock/tile005.png');

    princessImg = loadImage('NPC/Princess/left/tile009.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    apollo = createSprite(windowWidth/2, windowHeight-120, 40, 40)

    invisGround = createSprite(windowWidth/2, windowHeight-100, windowWidth, 20);
    invisGround.visible = false;

    invisWall = createSprite(windowWidth/0.5, windowHeight/2, 20, windowHeight);
    invisWall.visible = false;

    loadFireSprite();

    loadSwordSprites();

    scene2Villian();

    princess = createSprite(900, windowHeight-540, 80, 80)
    princess.addImage(princessImg)
    princess.scale = 2.25

    edges = createEdgeSprites();
}

function draw() {
    SceneChange();

    apollo.collide(invisGround)
    apollo.collide(invisWall)
    princess.collide(invisGround)

    scene2BouceOff();

    moveLeft();
    moveRight();

    getSword();
    useSword();

    drawSprites();
}