let img_background_credits;
let img_button_back;

let background_credits;
let button_back;
    
function preload(s) {

    console.log("Executing preload() - credits");

    img_background_credits = PP.assets.image.load(s, "assets/backgrounds/credits.png");
    img_button_back = PP.assets.image.load(s, "assets/buttons/conchiglia_back.png", 108, 73);

}
    
function create(s) {


    background_credits = PP.assets.image.add(s, img_background_credits, 0, 0, 0, 0);
    button_back = PP.assets.image.add(s, img_button_back, 25, 360, 0, 0);

    PP.interactive.mouse.add (button_back, "pointerdown", change_scene_cover);
}

function change_scene_cover(s) {
    PP.scenes.start("cover");
}


function update(s){
    
}

function destroy(s) {
    console.log("Executing destroy() - credits");

}    

PP.scenes.add("credits", preload, create, update, destroy);