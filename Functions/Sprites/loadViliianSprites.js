function scene2Villian() {
    villian = createSprite(50, 50, 80, 80);
    villian.addAnimation('anim', villianAnim);
    villian.scale = 2
    villian.velocityY = 6;

    villian2 = createSprite(200, 100, 80, 80);
    villian2.addAnimation('anim', villianAnim);
    villian2.scale = 2
    villian2.velocityX = 6.6;

    villian3 = createSprite(150, 50, 80, 80);
    villian3.addAnimation('anim', villianAnim);
    villian3.scale = 2
    villian3.velocityY = 8;

    villian4 = createSprite(200, 200, 80, 80);
    villian4.addAnimation('anim', villianAnim);
    villian4.scale = 2
    villian4.velocityX = 8.8;
}

function scene2BouceOff() {
    villian.bounceOff(invisGround)
    villian.bounceOff(edges[2])
    villian2.bounceOff(edges[1])
    villian2.bounceOff(edges[0])
    villian3.bounceOff(invisGround)
    villian3.bounceOff(edges[2])
    villian4.bounceOff(edges[1])
    villian4.bounceOff(edges[0])
}