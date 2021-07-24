/// <reference path="lib/p5.play.d.ts" />

// scene images
var scene1, scene2, scene3, scene4, scene5;

// scene checker
var scene = '5';

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
var villian, villian2, villian3, villian4, villian3, villian4, villian5, villian6, villianAnim, villianArray;

var villian7, villian8, villian9, villian10, villian11, villian12, villianAnim2;

// scene 5 villians
var main1, main2, main1Anim, main2Anim, m1Defeated, main1hits, m2Defeated, main2hits;
m1Defeated = false
m2Defeated = false
main1hits = 5;
main2hits = 10;

var fireworks, fireworksAnim;

// scene 5 villian hearts1
var h1, h2, h3, h4, h5, hI;

var princess, mainVillian, princessImg, princessAnim, mainVillianImg;

var v, v1, v2, v3, v4, v5;

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
    

    v = loadImage('npc_images/flying_obstacle/fly_hardrock/tile001.png');
    v1 = loadImage('npc_images/flying_obstacle/fly_hardrock/tile002.png');
    v2 = loadImage('npc_images/flying_obstacle/fly_hardrock/tile003.png');
    v3 = loadImage('npc_images/flying_obstacle/fly_hardrock/tile004.png');
    v4 = loadImage('npc_images/flying_obstacle/fly_hardrock/tile005.png');

    v5 = loadImage('npc_images/flying_obstacle/enemy.png')

    main1Anim = loadAnimation(v, v1, v2, v3, v4);

    villianAnim2 = loadAnimation(v, v1, v2, v3, v4);

    hI = loadImage("npc_images/flying_obstacle/fly_hardrock/heart.png");

    fireworksAnim = loadAnimation("npc_images/fireworks/tile000.png", "npc_images/fireworks/tile001.png", "npc_images/fireworks/tile002.png", "npc_images/fireworks/tile003.png", "npc_images/fireworks/tile004.png", "npc_images/fireworks/tile005.png")

    princessImg = loadImage('npc_images/princess/left/tile009.png');
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
    scene4Villian();
    scene5Villian();

    h1 = createSprite(main1.x + 100, main1.y - 175)
    h1.addImage(hI);
    h1.scale = 0.5;

    h2 = createSprite(main1.x + 65, main1.y - 175)
    h2.addImage(hI);
    h2.scale = 0.5;

    h3 = createSprite(main1.x + 30, main1.y - 175)
    h3.addImage(hI);
    h3.scale = 0.5;

    h4 = createSprite(main1.x - 5, main1.y - 175)
    h4.addImage(hI);
    h4.scale = 0.5;

    h5 = createSprite(main1.x - 40, main1.y - 175)
    h5.addImage(hI);
    h5.scale = 0.5;

    princess = createSprite(900, windowHeight-540, 80, 80)
    princess.addImage(princessImg)
    princess.scale = 2.25

    fireworks = createSprite(main1.x, main1.y);
    fireworks.addAnimation('anim', fireworksAnim);
    fireworks.scale = 2;
    fireworks.visible = false;

    edges = createEdgeSprites();
}

function draw() {
    SceneChange();

    apollo.collide(invisGround)
    apollo.collide(invisWall)
    princess.collide(invisGround)
    main1.collide(invisGround);
    main2.collide(invisGround)

    scene2BouceOff();
    scene4BouceOff();

    moveLeft();
    moveRight();

    getSword();
    useSword();

    damageMain1();
    removeHearts1();

    if (m1Defeated === true) {
        fireworks.visible = true;

        setTimeout(destroyMain1, 5000);
    }

    drawSprites();
}

function damageMain1() {
    if (sword2.isTouching(main1) && m1Defeated === false && main1hits > -1) {
        main1hits -= 0.5;

        usedSword = true;

        coolDown();
    }
}

function removeHearts1() {
    if (main1hits === 4 && m1Defeated === false) {
        h1.destroy();
    } else if (main1hits === 3 && m1Defeated === false) {
        h2.destroy();
    } else if (main1hits === 2 && m1Defeated === false) {
        h3.destroy();
    } else if (main1hits === 1 && m1Defeated === false) {
        h4.destroy();
    } else if (main1hits === 0 && m1Defeated === false) {
        h5.destroy();

        m1Defeated = true;
    }
}

function destroyMain1() {
    main1.destroy();
    main2.visible = true;

    fireworks.visible = false;
}