let img_crabfriend; 
let crabfriend; 
let img_princeScreens = []; // Array 
let princeState = 0; 
let princeScreen = null; 
let keyEPressed = false; 
let isPrinceActivated = false;

function preload_crabfriend(s) {
    img_crabfriend = PP.assets.image.load(s, "assets/instruction/crabfriend.png");

    img_princeScreens[0] = PP.assets.image.load(s, "assets/instruction/prince1.png");
    img_princeScreens[1] = PP.assets.image.load(s, "assets/instruction/prince2.png");
    img_princeScreens[2] = PP.assets.image.load(s, "assets/instruction/prince3.png");
}

function create_crabfriend(s) {
    
    crabfriend = PP.assets.image.add(s, img_crabfriend, 6950, 4450, 1, 1);
    PP.physics.add(s, crabfriend, PP.physics.type.STATIC);

    crabfriend.geometry.flip_x = true;
}

function update_crabfriend(s) {

    const isNearCrabfriend = Math.abs(crabfriend.geometry.x - player.geometry.x) <= 150;

    // Se il tasto E è premuto e il giocatore è vicino al crabfriend
    if (isNearCrabfriend && PP.interactive.kb.is_key_down(s, PP.key_codes.E) && !keyEPressed) {
        keyEPressed = true; // Evita input ripetuti
        isPrinceActivated = true; 
        togglePrinceScreen(s); 
    }

    // Resetta lo stato di keyPressed quando il tasto E viene rilasciato
    if (PP.interactive.kb.is_key_up(s, PP.key_codes.E)) {
        keyEPressed = false;
    }
}

function togglePrinceScreen(s) {
    if (princeState < 3) {
        // (prince1 -> prince6)
        if (princeScreen) PP.shapes.destroy(princeScreen); 
        princeScreen = PP.assets.image.add(s, img_princeScreens[princeState], 640, 360, 0.5, 0.5); 
        princeScreen.tile_geometry.scroll_factor_x = 0; 
        princeScreen.tile_geometry.scroll_factor_y = 0; 
        princeState++;
    } else if (princeState === 3) {
        if (princeScreen) PP.shapes.destroy(princeScreen); 
        princeScreen = null;
        princeState = 0; 
        isPrinceActivated = false; // Aggiorna il flag
    }
}
