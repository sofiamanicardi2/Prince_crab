let img_background_story_03;
let img_button_back_03;
let img_button_next_03;

let background_story_03;
let button_back_03;
let button_next_03;
    
function preload(s) {


    img_background_story_03 = PP.assets.image.load(s, "assets/backgrounds/story_03.png");
    img_button_back_03 = PP.assets.image.load(s, "assets/buttons/conchiglia_back.png", 108, 73);
    img_button_next_03 = PP.assets.image.load(s, "assets/buttons/conchiglia_forward.png", 108, 73);

}
    
function create(s) {

    background_story_03 = PP.assets.image.add(s, img_background_story_03, 0, 0, 0, 0);

    button_back_03 = PP.assets.image.add(s, img_button_back_03, 25, 360, 0, 0.5);
    button_next_03 = PP.assets.image.add(s, img_button_next_03, 1255, 360, 1, 0.5);

    PP.interactive.mouse.add (button_back_03, "pointerdown", change_scene_story_02);

    PP.interactive.mouse.add (button_next_03, "pointerdown", change_scene_game_play);

}

// FUNZIONI DI CAMBIO SCENA
function change_scene_story_02(s) {
    PP.scenes.start("story_02");
}

function change_scene_game_play(s) {
    PP.scenes.start("oceano");
}

function update(s) {
}

function destroy(s) {
    console.log("Executing destroy() - story_03");
}    

PP.scenes.add("story_03", preload, create, update, destroy);
        