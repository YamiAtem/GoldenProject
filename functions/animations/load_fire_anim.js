function loadFireAnim() {
    for (var i = 0; i < 6; i++) {
        fire[i] = loadImage("npc_images/fire/tile00" + i + ".png")
    }

    fireAnim = loadAnimation(fire[0], fire[1], fire[2], fire[3], fire[4], fire[5])
}