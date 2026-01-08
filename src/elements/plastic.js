let score = 0; 

let img_plastica_1;
let img_plastica_2;
let img_plastica_3;
let img_plastica_4;
let img_plastica_5;
let img_plastica_21;
let img_plastica_22;
let img_plastica_23;

let img_animaletto_1;
let img_animaletto_2;
let img_animaletto_3;
let img_animaletto_4;
let img_animaletto_5;


function preload_plastica(s) {

    //score non opaco
    img_score3_no_op = PP.assets.image.load(s, "assets/hudimage/3-sacchetto1.png");
    img_score5_no_op = PP.assets.image.load(s, "assets/hudimage/5-bicchierecolorato.png");
    img_score6_no_op = PP.assets.image.load(s, "assets/hudimage/6-sapone.png");
    img_score7_no_op = PP.assets.image.load(s, "assets/hudimage/7-posate.png");
    img_score8_no_op = PP.assets.image.load(s, "assets/hudimage/8-cannucce.png");
    img_score9_no_op = PP.assets.image.load(s, "assets/hudimage/9-portabibite.png");
    img_score10_no_op = PP.assets.image.load(s, "assets/hudimage/10-sacchetto2.png");
    img_score13_no_op = PP.assets.image.load(s, "assets/hudimage/13-bicchiere.png");
    img_score16_no_op = PP.assets.image.load(s, "assets/hudimage/16-bottiglia5.png");
    img_score18_no_op = PP.assets.image.load(s, "assets/hudimage/18-attaccapanni.png");
    img_score20_no_op = PP.assets.image.load(s, "assets/hudimage/20-involucro.png"); 
    img_score12_no_op = PP.assets.image.load(s, "assets/hudimage/12-sacco.png");

    // Load delle immagini del plastica
    img_plastica_1   = PP.assets.image.load(s, "assets/plastics/plastica1.png");
    img_plastica_2   = PP.assets.image.load(s, "assets/plastics/plastica2.png");
    img_plastica_3   = PP.assets.image.load(s, "assets/plastics/plastica3.png");
    img_plastica_4   = PP.assets.image.load(s, "assets/plastics/plastica4.png");
    img_plastica_5   = PP.assets.image.load(s, "assets/plastics/plastica5.png");
    img_plastica_22   = PP.assets.image.load(s, "assets/plastics/plasticalatta2.png");
    img_plastica_21   = PP.assets.image.load(s, "assets/plastics/plastica6.png");
    img_plastica_23   = PP.assets.image.load(s, "assets/plastics/plasticalatta1.png");

    // Load delle immagini degli animaletti
    img_animaletto_1   = PP.assets.image.load(s, "assets/plastics/animaletto1.png", 105, 47);
    img_animaletto_2   = PP.assets.image.load(s, "assets/plastics/animaletto2.png", 62, 64);
    img_animaletto_3   = PP.assets.image.load(s, "assets/plastics/animaletto3.png", 61, 105);
    img_animaletto_4   = PP.assets.image.load(s, "assets/plastics/animaletto4.png", 66, 42);
    img_animaletto_5   = PP.assets.image.load(s, "assets/plastics/animaletto5.png", 74, 70);

    // Load delle immagini degli animaletti PULITI
    img_tartaruga   = PP.assets.image.load(s, "assets/plastics/tartarugapulita.png", 105, 47);
    img_pesce   = PP.assets.image.load(s, "assets/plastics/pescepulito.png", 62, 64);
    img_pescione   = PP.assets.image.load(s, "assets/plastics/pescionepulito.png", 61, 105);
    img_polpo   = PP.assets.image.load(s, "assets/plastics/polpopulito.png", 66, 42);
    img_granchio   = PP.assets.image.load(s, "assets/plastics/granchiopulito.png", 74, 70);

}


// sapone
function collision_plastica1(s, player, plastica) {

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        console.log("Plastic collected!");


    PP.assets.destroy(plastica);

    let prev_score = PP.game_state.get_variable("score");
    PP.game_state.set_variable("score", prev_score + 1);

    score6_no_op = PP.assets.image.add(s, img_score6_no_op, 300, 60, 0.5, 0.5); 
    score6_no_op.tile_geometry.scroll_factor_x = 0; 
    score6_no_op.tile_geometry.scroll_factor_y = 0; 
  }  
}

// bicchiere
function collision_plastica2(s, player, plastica) {
    
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
      
  PP.assets.destroy(plastica);

  let prev_score = PP.game_state.get_variable("score");
  PP.game_state.set_variable("score", prev_score + 1);

  score13_no_op = PP.assets.image.add(s, img_score13_no_op,  670, 60, 0.5, 0.5); 
  score13_no_op.tile_geometry.scroll_factor_x = 0; 
  score13_no_op.tile_geometry.scroll_factor_y = 0; 
  }  
}

// attaccapanni
function collision_plastica3(s, player, plastica) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        
    
    PP.assets.destroy(plastica);

    
    let prev_score = PP.game_state.get_variable("score");
    PP.game_state.set_variable("score", prev_score + 1);

    score18_no_op = PP.assets.image.add(s, img_score18_no_op,  930, 60, 0.5, 0.5); 
    score18_no_op.tile_geometry.scroll_factor_x = 0; 
    score18_no_op.tile_geometry.scroll_factor_y = 0; 
  }  
}
// cannucce
function collision_plastica4(s, player, plastica) {

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        
    
    PP.assets.destroy(plastica);

    
    let prev_score = PP.game_state.get_variable("score");
    PP.game_state.set_variable("score", prev_score + 1);

    score8_no_op = PP.assets.image.add(s, img_score8_no_op, 400, 60, 0.5, 0.5); 
    score8_no_op.tile_geometry.scroll_factor_x = 0; 
    score8_no_op.tile_geometry.scroll_factor_y = 0; 
  }  
}


function collision_plastica5(s, player, plastica) {
    
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
    
    PP.assets.destroy(plastica);

    let prev_score = PP.game_state.get_variable("score");
    PP.game_state.set_variable("score", prev_score + 1);

    score16_no_op = PP.assets.image.add(s, img_score16_no_op, 820, 60, 0.5, 0.5); 
    score16_no_op.tile_geometry.scroll_factor_x = 0; 
    score16_no_op.tile_geometry.scroll_factor_y = 0; 

  }  
}

// portabibite tartaruga 
function collision_plastica6(s, player, plastica) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        
    PP.assets.destroy(animaletto_1);
    let tartaruga = PP.assets.image.add(s, img_tartaruga, 2080, 3390, 0, 0);

    
    let prev_score = PP.game_state.get_variable("score");
    PP.game_state.set_variable("score", prev_score + 1);

    score9_no_op = PP.assets.image.add(s, img_score9_no_op, 460, 60, 0.5, 0.5); 
    score9_no_op.tile_geometry.scroll_factor_x = 0; 
    score9_no_op.tile_geometry.scroll_factor_y = 0; 
  }  
}
// sacchetto2 pesce arancio
function collision_plastica7(s, player, plastica) {

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {

    PP.assets.destroy(animaletto_2);
    let pesce = PP.assets.image.add(s, img_pesce, 10850, 3480, 0, 0);

    let prev_score = PP.game_state.get_variable("score");
    PP.game_state.set_variable("score", prev_score + 1);

    score10_no_op = PP.assets.image.add(s, img_score10_no_op, 520, 60, 0.5, 0.5); 
    score10_no_op.tile_geometry.scroll_factor_x = 0; 
    score10_no_op.tile_geometry.scroll_factor_y = 0; 
  }  
}
// sacchetto1 polpo
function collision_plastica8(s, player, plastica) {
    
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        
    PP.assets.destroy(animaletto_3);
    let polpo = PP.assets.image.add(s, img_polpo, 8480, 1340, 0, 0);

    
    let prev_score = PP.game_state.get_variable("score");
    PP.game_state.set_variable("score", prev_score + 1);

    score3_no_op = PP.assets.image.add(s, img_score3_no_op, 150, 60, 0.5, 0.5); 
    score3_no_op.tile_geometry.scroll_factor_x = 0; 
    score3_no_op.tile_geometry.scroll_factor_y = 0; 
  }  
}
// posate pesce arancione
function collision_plastica9(s, player, plastica) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        
    PP.assets.destroy(animaletto_4);
    let pescione = PP.assets.image.add(s, img_pescione, 10230, 2800, 0, 0);

    
    let prev_score = PP.game_state.get_variable("score");
    PP.game_state.set_variable("score", prev_score + 1);

    score7_no_op = PP.assets.image.add(s, img_score7_no_op, 350, 60, 0.5, 0.5); 
    score7_no_op.tile_geometry.scroll_factor_x = 0; 
    score7_no_op.tile_geometry.scroll_factor_y = 0; 
  }  
}

// bicchiere colorato granchio
function collision_plastica10(s, player, plastica) {

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        
    PP.assets.destroy(animaletto_5);
    let granchio = PP.assets.image.add(s, img_granchio, 1290, 1630, 0, 0);

    let prev_score = PP.game_state.get_variable("score");
    PP.game_state.set_variable("score", prev_score + 1);

    score5_no_op = PP.assets.image.add(s, img_score5_no_op, 250, 60, 0.5, 0.5); 
    score5_no_op.tile_geometry.scroll_factor_x = 0; 
    score5_no_op.tile_geometry.scroll_factor_y = 0; 
  }  
}

// ciabatta
function collision_plastica21 (s, player, plastica) {
  if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
  
PP.assets.destroy(plastica);

  let prev_score = PP.game_state.get_variable("score");
  PP.game_state.set_variable("score", prev_score + 1);

  score1_no_op = PP.assets.image.add(s, img_score1_no_op, 50, 60, 0.5, 0.5); 
  score1_no_op.tile_geometry.scroll_factor_x = 0; 
  score1_no_op.tile_geometry.scroll_factor_y = 0; 
} 
}

// involucro
function collision_plastica22(s, player, plastica) {
  if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
    
PP.assets.destroy(plastica);


let prev_score = PP.game_state.get_variable("score");
PP.game_state.set_variable("score", prev_score + 1);

score20_no_op = PP.assets.image.add(s, img_score20_no_op,  1030, 60, 0.5, 0.5); 
score20_no_op.tile_geometry.scroll_factor_x = 0; 
score20_no_op.tile_geometry.scroll_factor_y = 0; 
} 

}

// sacco
function collision_plastica23(s, player, plastica) {

  if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
    
PP.assets.destroy(plastica);

let prev_score = PP.game_state.get_variable("score");
PP.game_state.set_variable("score", prev_score + 1);

score12_no_op = PP.assets.image.add(s, img_score12_no_op,  620, 60, 0.5, 0.5); 
score12_no_op.tile_geometry.scroll_factor_x = 0; 
score12_no_op.tile_geometry.scroll_factor_y = 0; 
} 

}


function create_plastica(s) {


        // sapone sotto la piattaforma prima della melma circa a metà
        let plastica_1 = PP.assets.image.add(s, img_plastica_1, 4920, 1810, 0, 0);
        PP.physics.add(s, plastica_1, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, plastica_1, collision_plastica1);

        // bicchiere di plastica sui tubi
        let plastica_2 = PP.assets.image.add(s, img_plastica_2, 10940, 2310, 0, 0);
        PP.physics.add(s, plastica_2, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, plastica_2, collision_plastica2);

        // attaccapanni 
        let plastica_3 = PP.assets.image.add(s, img_plastica_3, 7730, 1690, 0, 0);
        PP.physics.add(s, plastica_3, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, plastica_3, collision_plastica3);

        // cannucce in quella in alto lontana prima della discesa
        let plastica_4 = PP.assets.image.add(s, img_plastica_4, 8950, 1290, 0, 0);
        PP.physics.add(s, plastica_4, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, plastica_4, collision_plastica4);

        // (bottogliona tappo verde percorso pre fata piattaforma rientranza)
        let plastica_5 = PP.assets.image.add(s, img_plastica_5, 7620, 3860, 0, 0);
        PP.physics.add(s, plastica_5, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, plastica_5, collision_plastica5);

        // tartaruga sopra la fossa melma post tunnel
        animaletto_1 = PP.assets.image.add(s, img_animaletto_1, 2080, 3390, 0, 0);
        PP.physics.add(s, animaletto_1, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, animaletto_1, collision_plastica6);

        // pesce dentro busta percorso verso la fata
        animaletto_2 = PP.assets.image.add(s, img_animaletto_2, 10850, 3480, 0, 0);
        PP.physics.add(s, animaletto_2, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, animaletto_2, collision_plastica7);

        //polpo nella rientranza prima delle due latte sparanti
        animaletto_3 = PP.assets.image.add(s, img_animaletto_3, 8480, 1340, 0, 0);
        PP.physics.add(s, animaletto_3, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, animaletto_3, collision_plastica8);

        // pesce posate reintranza durante la discesa finale
        animaletto_4 = PP.assets.image.add(s, img_animaletto_4, 10230, 2800, 0, 0);
        PP.physics.add(s, animaletto_4, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, animaletto_4, collision_plastica9);

        // granchietto sulla piattaforma all'inzio
        animaletto_5 = PP.assets.image.add(s, img_animaletto_5, 1290, 1630, 0, 0);
        PP.physics.add(s, animaletto_5, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, animaletto_5, collision_plastica10);

        // ciabatta
        let plastica_21 = PP.assets.image.add(s, img_plastica_21, 8980, 1900, 0, 0);
        PP.physics.add(s, plastica_21, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, plastica_21, collision_plastica21);

       // involucro
        let plastica_22 = PP.assets.image.add(s, img_plastica_22, 7800, 2350, 0, 0);
        PP.physics.add(s, plastica_22, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, plastica_22, collision_plastica22);

        // involucro
        let plastica_23 = PP.assets.image.add(s, img_plastica_23, 3755, 2470, 1, 1);
        PP.physics.add(s, plastica_23, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, plastica_23, collision_plastica23);
    }

function update_plastica(s) {

}
