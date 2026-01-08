let img_background_story_02;
let img_button_back_02;
let img_button_next_02;

let background_story_02;
let button_back_02;
let button_next_02;
    
function preload(s) {


    img_background_story_02 = PP.assets.image.load(s, "assets/backgrounds/story_02.png");
    img_button_back_02 = PP.assets.image.load(s, "assets/buttons/conchiglia_back.png", 108, 73);
    img_button_next_02 = PP.assets.image.load(s, "assets/buttons/conchiglia_forward.png", 108, 73);

}
    
function create(s) {


    background_story_02 = PP.assets.image.add(s, img_background_story_02, 0, 0, 0, 0);

    button_back_02 = PP.assets.image.add(s, img_button_back_02, 25, 360, 0, 0.5);
    button_next_02 = PP.assets.image.add(s, img_button_next_02, 1255, 360, 1, 0.5);

    PP.interactive.mouse.add (button_back_02, "pointerdown", change_scene_story_01);

    PP.interactive.mouse.add (button_next_02, "pointerdown", change_scene_story_03);

}

// FUNZIONI DI CAMBIO SCENA
function change_scene_story_01(s) {
    PP.scenes.start("story_01");
}

function change_scene_story_03(s) {
    PP.scenes.start("story_03");
}

function update(s) {
}

function destroy(s) {
    console.log("Executing destroy() - story_02");
}    

PP.scenes.add("story_02", preload, create, update, destroy);
        