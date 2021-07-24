function loadVillianAnim() {
    for (var i = 0; i < 6; i++) {
        villianArray[i] = loadImage('npc_images/flying_obstacle/fly_wings/tile00' + i + '.png');
    }

    villianAnim = loadAnimation(villianArray[0], villianArray[1], villianArray[2], villianArray[3], villianArray[4], villianArray[5])
}