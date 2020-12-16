function useSword() {
    if (keyIsDown(32) && hasSword2 === true) {
        hasSword1 = false;

        if (lookingLeft === true) {
            sword2.x = apollo.x - 63;
            sword2.y = apollo.y + 15;

            sword2.visible = true;
            sword2.addImage(leftSwordImg)
            sword2.scale = 0.25
        } else if (lookingRight === true) {
            sword2.x = apollo.x + 63;
            sword2.y = apollo.y + 15;

            sword2.visible = true;
            sword2.addImage(rightSwordImg)
            sword2.scale = 0.25
        }
    } else {
        setTimeout(destroy(), 2000);
    }
}

function destroy() {
    sword2.visible = false;
}

function coolDown() {
    if (usedSword === true) {
        hasSword2 = false;

        setTimeout(coolDown2, 2500)
    }
}

function coolDown2() {
    hasSword2 = true;
    usedSword = false;
}