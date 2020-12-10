function moveLeft() {
    if (keyIsDown(65)) {
        apollo.x -= 10
        lookingLeft = true;
        moving = true
        lookingRight = false

        leftSteps += 1;
        leftAnim();

        if (leftSteps > 10) {
            leftSteps = 0;
        }

        console.log(leftSteps)
    } else {
        moving = false;
        leftSteps = 0;
        moving = false;
    }
}

function leftAnim() {
    if (leftSteps === 1) {
        apollo.addImage(left[0])
    } else if (leftSteps === 2) {
        apollo.addImage(left[1])
    } else if (leftSteps === 3) {
        apollo.addImage(left[2])
    } else if (leftSteps === 4) {
        apollo.addImage(left[3])
    } else if (leftSteps === 5) {
        apollo.addImage(left[4])
    } else if (leftSteps === 6) {
        apollo.addImage(left[5])
    } else if (leftSteps === 7) {
        apollo.addImage(left[6])
    } else if (leftSteps === 8) {
        apollo.addImage(left[7])
    } else if (leftSteps === 9) {
        apollo.addImage(left[8])
    } else if (leftSteps === 10) {
        apollo.addImage(left[9])
    }
}