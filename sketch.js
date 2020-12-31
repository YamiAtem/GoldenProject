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
var villian, villian2, villian3, villian4, villian3, villian4, villianAnim, villianArray;

// scene 5 villians
var main1, main2, main1Anim, main2Anim, m1Defeated;
m1Defeated = false

// scene 5 villian hearts1
var h1, h2, h3, h4, h5, hI;

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

    main1Anim = loadAnimation(v, v1, v2, v3, v4);

    hI = loadImage("NPC/flying obstacle/fly-hardrock/heart.png");

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

    edges = createEdgeSprites();
}

function draw() {
    SceneChange();

    apollo.collide(invisGround)
    apollo.collide(invisWall)
    princess.collide(invisGround)
    main1.collide(invisGround);

    scene2BouceOff();

    moveLeft();
    moveRight();

    getSword();
    useSword();

    drawSprites();
}