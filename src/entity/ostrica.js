let img_ostrica;
let ostrica;
let img_oysterScreens = []; 
let oysterState = 0; 
let oysterScreen = null; 
let keyPressed = false; 
let isOstricaActivated = false; 

function preload_ostrica(s) {
    img_ostrica = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_ostrica.png", 175, 181);

    img_oysterScreens[0] = PP.assets.image.load(s, "assets/instruction/oyster1.png");
    img_oysterScreens[1] = PP.assets.image.load(s, "assets/instruction/oyster2.png");
    img_oysterScreens[2] = PP.assets.image.load(s, "assets/instruction/oyster3.png");
    img_oysterScreens[3] = PP.assets.image.load(s, "assets/instruction/oyster4.png");
    img_oysterScreens[4] = PP.assets.image.load(s, "assets/instruction/oyster5.png");
    img_oysterScreens[5] = PP.assets.image.load(s, "assets/instruction/oyster6.png");
}

function create_ostrica(s) {
    ostrica = PP.assets.sprite.add(s, img_ostrica, 670, 2505, 0, 1);
    PP.physics.add(s, ostrica, PP.physics.type.STATIC);

    // Flip orizzontale
    ostrica.geometry.flip_x = true;

    PP.assets.sprite.animation_add_list(ostrica, "stop", [5, 5, 5, 5, 4, 3, 2, 1, 0], 6, -1);
    PP.assets.sprite.animation_play(ostrica, "stop");
}

function update_ostrica(s) {
    // se il giocatore è vicino all'ostrica
    const isNearOstrica = Math.abs(ostrica.geometry.x - player.geometry.x) <= 150;

    // Se il tasto E è premuto e il giocatore è vicino all'ostrica
    if (isNearOstrica && PP.interactive.kb.is_key_down(s, PP.key_codes.E) && !keyPressed) {
        keyPressed = true; 
        isOstricaActivated = true; 
        toggleOysterScreen(s); 
    }

    if (PP.interactive.kb.is_key_up(s, PP.key_codes.E)) {
        keyPressed = false;
    }
}

function toggleOysterScreen(s) {
    if (oysterState < 6) {
        // Mostra la schermata(oyster1 > oyster5)
        if (oysterScreen) PP.shapes.destroy(oysterScreen); 
        oysterScreen = PP.assets.image.add(s, img_oysterScreens[oysterState], 640, 360, 0.5, 0.5); 
        oysterScreen.tile_geometry.scroll_factor_x = 0; 
        oysterScreen.tile_geometry.scroll_factor_y = 0; 
        oysterState++;
    } else if (oysterState === 6) {
        if (oysterScreen) PP.shapes.destroy(oysterScreen); // Distruggi schermate
        oysterScreen = null;
        oysterState = 0; 
        isOstricaActivated = false;
    }
}

