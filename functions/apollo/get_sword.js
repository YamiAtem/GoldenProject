function getSword() {
    if (apollo.isTouching(swordSprite) && scene === '2') {
        swordSprite.destroy();
    
        hasSword1 = true;
        hasSword2 = true;
    }
    
    if (hasSword1 === true && scene === '2') {
        textSize(20)
        text("You got a sword use this to fight enemies by pressing SPACE bar", windowWidth/2-220, windowHeight-50);
    }
}