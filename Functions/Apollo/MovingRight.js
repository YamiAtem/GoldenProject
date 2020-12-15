function moveRight() {
    if (keyDown(68)) {
        apollo.x += 10
        lookingLeft = false;
        moving = true
        lookingRight = true;
        leftSteps = 0;

        rightSteps += 0.5;
        rightAnim();

        if (rightSteps > 10) {
            rightSteps = 0;
        }
    } else {
        rightSteps = 0;
        moving = false;
    }
}

function rightAnim() {
    if (rightSteps === 1) {
        apollo.addImage(right[0])
    } else if (rightSteps === 2) {
        apollo.addImage(right[1])
    } else if (rightSteps === 3) {
        apollo.addImage(right[2])
    } else if (rightSteps === 4) {
        apollo.addImage(right[3])
    } else if (rightSteps === 5) {
        apollo.addImage(right[4])
    } else if (rightSteps === 6) {
        apollo.addImage(right[5])
    } else if (rightSteps === 7) {
        apollo.addImage(right[6])
    } else if (rightSteps === 8) {
        apollo.addImage(right[7])
    } else if (rightSteps === 9) {
        apollo.addImage(right[8])
    } else if (rightSteps === 10) {
        apollo.addImage(right[9])
    }
}