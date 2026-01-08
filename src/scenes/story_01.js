let img_background_story_01;
let img_button_back_01;
let img_button_next_01;

let background_story_01;
let button_back_01;
let button_next_01;
    
function preload(s) {

    
    img_background_story_01 = PP.assets.image.load(s, "assets/backgrounds/story_01.png");
    img_button_back_01 = PP.assets.image.load(s, "assets/buttons/conchiglia_back.png", 108, 73);
    img_button_next_01 = PP.assets.image.load(s, "assets/buttons/conchiglia_forward.png", 108, 73);

}
    
function create(s) {

    

    background_story_01 = PP.assets.image.add(s, img_background_story_01, 0, 0, 0, 0);

    button_back_01 = PP.assets.image.add(s, img_button_back_01, 25, 360, 0, 0.5);
    button_next_01 = PP.assets.image.add(s, img_button_next_01, 1255, 360, 1, 0.5);

    PP.interactive.mouse.add (button_back_01, "pointerdown", change_scene_cover);

    PP.interactive.mouse.add (button_next_01, "pointerdown", change_scene_story_02);

}

// FUNZIONI DI CAMBIO SCENA
function change_scene_cover(s) {
    PP.scenes.start("cover");
}

function change_scene_story_02(s) {
    PP.scenes.start("story_02");
}

function update(s) {
}

function destroy(s) {
    console.log("Executing destroy() - story_01");
}    

PP.scenes.add("story_01", preload, create, update, destroy);
        