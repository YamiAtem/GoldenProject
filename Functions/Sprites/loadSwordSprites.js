function loadSwordSprites() {
    swordSprite = createSprite(windowWidth/5, windowHeight-120)
    swordSprite.addImage(swordImage)
    swordSprite.scale = 0.25
    swordSprite.visible = false;

    sword2 = createSprite(100, 100)
    sword2.visible = false;
}