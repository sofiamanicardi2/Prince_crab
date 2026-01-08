let img_background_cover;
let img_button_story;
let img_button_game;
let img_button_credits;
    
let background_cover;
let button_story;
let button_game;
let button_credits;
    

function preload(s) {

    console.log("Executing preload() - cover");
        
    img_background_cover = PP.assets.image.load(s, "assets/backgrounds/homepage.png");

    img_button_story = PP.assets.sprite.load_spritesheet(s, "assets/buttons/sprite_storia.png", 166, 50);
    img_button_game = PP.assets.sprite.load_spritesheet(s, "assets/buttons/sprite_game.png", 142, 50);
    img_button_credits = PP.assets.sprite.load_spritesheet(s, "assets/buttons/sprite_credits.png", 180, 50);

}
    
function create(s) {

    console.log("Executing create() - cover");

    // Creazione copertina
    background_cover = PP.assets.image.add(s, img_background_cover, 0, 0, 0, 0);

    // Creazione bottoni
    button_story = PP.assets.sprite.add(s, img_button_story, 1260, 165, 1, 0);
    button_game = PP.assets.sprite.add(s, img_button_game, 1246, 340, 1, 0);
    button_credits = PP.assets.sprite.add(s, img_button_credits, 1267, 512, 1, 0);

    // Interazione con mouse
    PP.interactive.mouse.add (button_story, "pointerover", change_button_story);
    PP.interactive.mouse.add (button_story, "pointerout", reset_button_story);
    PP.interactive.mouse.add (button_story, "pointerdown", change_scene_story);
    
    PP.interactive.mouse.add (button_game, "pointerover", change_button_game);
    PP.interactive.mouse.add (button_game, "pointerout", reset_button_game);
    PP.interactive.mouse.add (button_game, "pointerdown", change_scene_game_play);

    PP.interactive.mouse.add (button_credits, "pointerover", change_button_credits);
    PP.interactive.mouse.add (button_credits, "pointerout", reset_button_credits);
    PP.interactive.mouse.add (button_credits, "pointerdown", change_scene_credits);
    

        
    // Creazione animazioni
    PP.assets.sprite.animation_add(button_story, "story_unselected", 0, 0, 5, 0); 
    PP.assets.sprite.animation_add(button_story, "story_selected", 1, 1, 5, 0);

    PP.assets.sprite.animation_add(button_game, "game_unselected", 0, 0, 5, 0); 
    PP.assets.sprite.animation_add(button_game, "game_selected", 1, 1, 5, 0);

    PP.assets.sprite.animation_add(button_credits, "credits_unselected", 0, 0, 5, 0); 
    PP.assets.sprite.animation_add(button_credits, "credits_selected", 1, 1, 5, 0);
        
}


function change_button_story(s) {
    PP.assets.sprite.animation_play(button_story, "story_selected");
    

}

function reset_button_story(s) {
    PP.assets.sprite.animation_play(button_story, "story_unselected");
    
        
}

function change_button_game(s) {
    PP.assets.sprite.animation_play(button_game, "game_selected");
    
}

function reset_button_game(s) {
    PP.assets.sprite.animation_play(button_game, "game_unselected");
    
        
}

function change_button_credits(s) {
    PP.assets.sprite.animation_play(button_credits, "credits_selected");
    

}

function reset_button_credits(s) {
    PP.assets.sprite.animation_play(button_credits, "credits_unselected");
        
}



// FUNZIONI DI CAMBIO SCENA
function change_scene_story(s) {
    PP.scenes.start("story_01");
}

function change_scene_game_play(s) {
    PP.scenes.start("oceano");
}

function change_scene_credits(s) {
    PP.scenes.start("credits");
}


function update(s) {

}

function destroy(s) {
    console.log("Executing destroy() - cover");

}    

PP.scenes.add("cover", preload, create, update, destroy);
