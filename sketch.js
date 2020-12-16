// scene images
var scene1, scene2, scene3, scene4, scene5;

// scene checker
var scene = '1';

// scene props
var invisGround, edges, invisWall;

// character
var apollo, left, right, lookingLeft, lookingRight, leftSteps, rightSteps, moving, idleLeft, idleRight, idle;

// fire 
var fire1, fire2, fire, fireAnim;

// health bar
var healthInt, healthBar, healthBack;
healthInt = 100;

// sword 
var swordImage, swordSprite, hasSword1, hasSword2;
var leftSwordImg, rightSwordImg;
var sword2, usedSword;

// scene 2 villian
var villian, villianAnim, villianArray, villianHits;

villianHits = 10;
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

    villian = createSprite(windowWidth/1.15, windowHeight-120, 80, 80);
    villian.addAnimation('anim', villianAnim);
    villian.scale = 2

    edges = createEdgeSprites();
}


function draw() {
    SceneChange();

    apollo.collide(invisGround)
    villian.collide(invisGround)
    apollo.collide(invisWall)

    moveLeft();
    moveRight();

    getSword();
    useSword();

    textSize(20)
    text(villianHits, villian.x, villian.y-100)

    damageVillian1();
    destroyVillian1();
    coolDown();

    drawSprites();
}

function damageVillian1() {
    if (sword2.isTouching(villian)) {
        villianHits -= 2;

        usedSword = true;
    }
}

function destroyVillian1() {
    if (villianHits === 0) {
        villian.destroy();
    }
}