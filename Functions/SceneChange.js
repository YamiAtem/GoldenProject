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
}

function SceneChange() {
    Scene();

    // scenes
    if (scene === '1'){
        background(scene1)
    } else if (scene === '2') {
        background(scene2)
        
        fire1.visible = true;
        fire2.visible = true;
    } else if (scene ==='3') {
        background(scene3)
    }
}