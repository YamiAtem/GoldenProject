function scene2Villian() {
    villian = createSprite(100, 50, 80, 80);
    villian.addAnimation('anim', villianAnim);
    villian.scale = 2
    villian.velocityY = 6;

    villian2 = createSprite(300, 50, 80, 80);
    villian2.addAnimation('anim', villianAnim);
    villian2.scale = 2
    villian2.velocityY = 6.6;

    villian3 = createSprite(500, 50, 80, 80);
    villian3.addAnimation('anim', villianAnim);
    villian3.scale = 2
    villian3.velocityY = 7.2;

    villian4 = createSprite(700, 50, 80, 80);
    villian4.addAnimation('anim', villianAnim);
    villian4.scale = 2
    villian4.velocityY = 7.8;
    
    villian5 = createSprite(900, 50, 80, 80);
    villian5.addAnimation('anim', villianAnim);
    villian5.scale = 2
    villian5.velocityY = 8.4;

    villian6 = createSprite(1100, 50, 80, 80);
    villian6.addAnimation('anim', villianAnim);
    villian6.scale = 2
    villian6.velocityY = 9;
}

function scene4Villian() {
    villian7 = createSprite(100, 50, 80, 80);
    villian7.addAnimation('anim', villianAnim2);
    villian7.scale = 2
    villian7.velocityY = 9.6;

    villian8 = createSprite(300, 50, 80, 80);
    villian8.addAnimation('anim', villianAnim2);
    villian8.scale = 2
    villian8.velocityY = 10.2;

    villian9 = createSprite(500, 50, 80, 80);
    villian9.addAnimation('anim', villianAnim2);
    villian9.scale = 2
    villian9.velocityY = 10.8;

    villian10 = createSprite(700, 50, 80, 80);
    villian10.addAnimation('anim', villianAnim2);
    villian10.scale = 2
    villian10.velocityY = 11.4;
    
    villian11 = createSprite(900, 50, 80, 80);
    villian11.addAnimation('anim', villianAnim2);
    villian11.scale = 2
    villian11.velocityY = 12;

    villian12 = createSprite(1100, 50, 80, 80);
    villian12.addAnimation('anim', villianAnim2);
    villian12.scale = 2
    villian12.velocityY = 12.6;
}

function scene2BouceOff() {
    villian.bounceOff(invisGround)
    villian.bounceOff(edges[2])

    villian2.bounceOff(invisGround)
    villian2.bounceOff(edges[2])

    villian3.bounceOff(invisGround)
    villian3.bounceOff(edges[2])

    villian4.bounceOff(invisGround)
    villian4.bounceOff(edges[2])

    villian5.bounceOff(invisGround)
    villian5.bounceOff(edges[2])

    villian6.bounceOff(invisGround)
    villian6.bounceOff(edges[2])
}

function scene4BouceOff() {
    villian7.bounceOff(invisGround)
    villian7.bounceOff(edges[2])

    villian8.bounceOff(invisGround)
    villian8.bounceOff(edges[2])

    villian9.bounceOff(invisGround)
    villian9.bounceOff(edges[2])

    villian10.bounceOff(invisGround)
    villian10.bounceOff(edges[2])

    villian11.bounceOff(invisGround)
    villian11.bounceOff(edges[2])

    villian12.bounceOff(invisGround)
    villian12.bounceOff(edges[2])
}

function scene5Villian() {
    main1 = createSprite(600, 200);
    main1.addAnimation('anim', main1Anim);
    main1.scale = 8;

    main2 = createSprite(575, 200);
    main2.addAnimation('anim', v5);
    main2.scale = 0.75
    main2.visible = false;
}