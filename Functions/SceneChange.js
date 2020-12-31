function Scene() {
    // scene 1 and 2
    if (apollo.isTouching(edges[0]) && scene === '1') {
        scene = '2'
        apollo.x = windowWidth/3;
    } else if (apollo.isTouching(edges[0]) && scene === '2') {
        scene = '1'
        apollo.x = windowWidth/3;
    } 
    
    // scene 1 and 3
    if (apollo.isTouching(edges[1]) && scene === '1') {
        scene = '3'
        apollo.x = windowWidth/4;
    } else if (apollo.isTouching(edges[0]) && scene === '3') {
        scene = '1'
        apollo.x = windowWidth/3;
    }

    // scene 2 and 4
    if (apollo.isTouching(edges[1]) && scene === '2') {
        scene = '4';
        apollo.x = windowWidth/3;
    } else if (apollo.isTouching(edges[0]) && scene === '4') {
        scene = '2';
        apollo.x = windowWidth/3;
    }

    // scene 4 and 5
    if (apollo.isTouching(edges[1]) && scene === '4') {
        scene = '5';
        apollo.x = windowWidth/3;
    } else if (apollo.isTouching(edges[0]) && scene === '5') {
        scene = '4';
        apollo.x = windowWidth/3;
    }

}

function SceneChange() {
    Scene();

    // scenes
    if (scene === '1'){
        background(scene1)

        fire1.visible = false;
        fire2.visible = false;
        swordSprite.visible = false;
        villian.visible = false;
        villian2.visible = false;
        villian3.visible = false;
        villian4.visible = false;

        main1.visible = false;

        h1.visible = false;
        h2.visible = false;
        h3.visible = false;
        h4.visible = false;
        h5.visible = false;

        princess.visible = false;

        invisWall.x = windowWidth/0.5;
    } else if (scene === '2') {
        background(scene2)
        
        fire1.visible = true;
        fire2.visible = true;
        swordSprite.visible = true;
        villian.visible = true;
        villian2.visible = true;
        villian3.visible = false;
        villian4.visible = false;

        main1.visible = false;
            
        h1.visible = false;
        h2.visible = false;
        h3.visible = false;
        h4.visible = false;
        h5.visible = false;

        princess.visible = false;

        invisWall.x = windowWidth/0.5;
    } else if (scene ==='3') {
        background(scene3)
        
        fire1.visible = false;
        fire2.visible = false;
        swordSprite.visible = false;
        villian.visible = false;
        villian2.visible = false;
        villian3.visible = false;
        villian4.visible = false;

        h1.visible = false;
        h2.visible = false;
        h3.visible = false;
        h4.visible = false;
        h5.visible = false;

        main1.visible = false;

        princess.visible = false;

        invisWall.x = windowWidth/1.0125;
    } else if (scene === '4') {
        background(scene4);

        fire1.visible = false;
        fire2.visible = false;
        swordSprite.visible = false;
        villian.visible = false;
        villian2.visible = false;
        villian3.visible = false;
        villian4.visible = false;

        main1.visible = false;

        h1.visible = false;
        h2.visible = false;
        h3.visible = false;
        h4.visible = false;
        h5.visible = false;

        princess.visible = false;

        invisWall.x = windowWidth/0.5;
    } else if (scene === '5') {
        background(scene5);

        fire1.visible = false;
        fire2.visible = false;
        swordSprite.visible = false;
        villian.visible = false;
        villian2.visible = false;
        villian3.visible = false;
        villian4.visible = false;
        princess.visible = true;

        main1.visible = true;

        h1.visible = true;
        h2.visible = true;
        h3.visible = true;
        h4.visible = true;
        h5.visible = true;

        invisWall.x = windowWidth/1.0125;
    }
}