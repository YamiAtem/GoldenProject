function loadFireSprite() {
    fire1 = createSprite(windowWidth / 1.75, windowHeight / 1.95, 20, 20)
    fire1.addAnimation('Fire', fireAnim)
    fire1.scale = 0.5;


    fire2 = createSprite(windowWidth / 3.9, windowHeight / 1.95, 20, 20)
    fire2.addAnimation('Fire', fireAnim)
    fire2.scale = 0.5;
}