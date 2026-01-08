let img_player;
let img_arpione;
let arpione;
let position_arpione_x;
let position_arpione_y;
let player;

let player_speed = 350;
let jump_init_speed = 400;
let floor_height = 620;

let curr_anim = "stop";
let weapon_disable = false;
let is_jumping = false;
let jump_timer = 0;
let max_jump_duration = 1000;
let is_on_ground = false;


let img_plasticacrab_1;
let img_plasticacrab_2;
let img_plasticacrab_3;
let img_plasticacrab_4;
let img_plasticacrab_5;
let img_plasticalatta_4;
let img_plasticalatta_3;

let img_score15_no_op;
let img_score14_no_op ;
let img_score4_no_op;
let img_score11_no_op ;
let img_score2_no_op ;
let img_score17_no_op ;
let img_score19_no_op ;
let img_score1_no_op;


function configure_player_animations(s) {
    //score 0<x<5
    PP.assets.sprite.animation_add_list(player, "walk1", [84, 0, 1, 2, 3], 10, -1);
    PP.assets.sprite.animation_add_list(player, "jump_up1", [4, 5, 6, 7], 10, 0);
    PP.assets.sprite.animation_add_list(player, "jump_down1", [7, 8, 9, 10], 10, 0);
    PP.assets.sprite.animation_add_list(player, "stop1", [10, 11, 12], 5, -1);
    PP.assets.sprite.animation_add_list(player, "hurt1", [13, 14, 15, 16], 5, -1);
    PP.assets.sprite.animation_add_list(player, "arm1", [10,17,18,19,20], 10, 0);
    

    //score 5<x<10
    PP.assets.sprite.animation_add_list(player, "walk2", [85, 21, 22, 23, 24], 10, -1);
    PP.assets.sprite.animation_add_list(player, "jump_up2", [25, 26, 27, 28], 10, 0);
    PP.assets.sprite.animation_add_list(player, "jump_down2", [28, 29, 30, 31], 10, 0);
    PP.assets.sprite.animation_add_list(player, "stop2", [31, 32, 33], 5, -1);
    PP.assets.sprite.animation_add_list(player, "hurt2", [34, 35, 36, 37], 5, -1);
    PP.assets.sprite.animation_add_list(player, "arm2", [31,38,39,40,41], 10, 0);
    

    //score 10<x<15
    PP.assets.sprite.animation_add_list(player, "walk3", [86, 42, 43, 44, 45], 10, -1);
    PP.assets.sprite.animation_add_list(player, "jump_up3", [46, 47, 48, 49], 10, 0);
    PP.assets.sprite.animation_add_list(player, "jump_down3", [49, 50, 51, 52], 10, 0);
    PP.assets.sprite.animation_add_list(player, "stop3", [52, 53, 54], 5, -1);
    PP.assets.sprite.animation_add_list(player, "hurt3", [55, 56, 57, 58], 5, -1);
    PP.assets.sprite.animation_add_list(player, "arm3", [52 ,59, 60, 61, 62], 10, 0);
    

    //score 15<x<20
    PP.assets.sprite.animation_add_list(player, "walk4", [87, 63, 64, 65, 66], 10, -1);
    PP.assets.sprite.animation_add_list(player, "jump_up4", [67, 68, 69, 70], 10, 0);
    PP.assets.sprite.animation_add_list(player, "jump_down4", [70, 71, 72, 73], 10, 0);
    PP.assets.sprite.animation_add_list(player, "stop4", [73, 74, 75], 5, -1);
    PP.assets.sprite.animation_add_list(player, "hurt4", [76, 77, 78, 79], 5, -1);
    PP.assets.sprite.animation_add_list(player, "arm4", [73, 80, 81, 82, 83], 10, 0);
    

    //animazione che compie x scivolare, uguale per tutti gli score
    PP.assets.sprite.animation_add_list(player, "slide", [88], 10, 0);

    //animazione che compie all'inizio quando lo score è 0<x<5
    PP.assets.sprite.animation_play(player, "stop1");

}

function configure_arpione_animations(s) {
    PP.assets.sprite.animation_add_list(arpione, "go", [2, 1, 0], 3, -1);
    PP.assets.sprite.animation_play(player, "go");
}

function preload_player(s) {
    img_player = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_player.png", 63, 120);
    img_arpione = PP.assets.sprite.load_spritesheet(s, "assets/images/shuriken.png", 45, 18);

    img_plasticacrab_1 = PP.assets.image.load(s, "assets/plastics/plasticacrab1.png", 60, 60);
    img_plasticacrab_2 = PP.assets.image.load(s, "assets/plastics/plasticacrab2.png", 60, 60);
    img_plasticacrab_3 = PP.assets.image.load(s, "assets/plastics/plasticacrab3.png", 60, 60);
    img_plasticacrab_4 = PP.assets.image.load(s, "assets/plastics/plasticacrab4.png", 60, 60);
    img_plasticacrab_5 = PP.assets.image.load(s, "assets/plastics/plasticacrab5.png", 60, 60);
    img_plasticalatta_3 = PP.assets.image.load(s, "assets/plastics/plasticalatta3.png", 60, 60);
    img_plasticalatta_4 = PP.assets.image.load(s, "assets/plastics/plasticalatta4.png", 60, 60);

    
    img_score15_no_op = PP.assets.image.load(s, "assets/hudimage/15-bottiglia4.png");
    img_score14_no_op = PP.assets.image.load(s, "assets/hudimage/14-spazzolino.png");
    img_score4_no_op = PP.assets.image.load(s, "assets/hudimage/4-bottiglia2.png");
    img_score11_no_op = PP.assets.image.load(s, "assets/hudimage/11-bottiglia3.png");
    img_score2_no_op = PP.assets.image.load(s, "assets/hudimage/2-bottiglia1.png");
    img_score17_no_op = PP.assets.image.load(s, "assets/hudimage/17-bottiglia6.png");
    img_score19_no_op = PP.assets.image.load(s, "assets/hudimage/19-guanto.png");
    img_score1_no_op = PP.assets.image.load(s, "assets/hudimage/1-ciabatta.png");
}

function create_player(s) {
    player = PP.assets.sprite.add(s, img_player, -400, 1030, 0.5, 2);
    PP.physics.add(s, player, PP.physics.type.DYNAMIC);

    // Dimensioni del rettangolo di collisione
    let colliderWidth = 30;
    let colliderHeight = 120; 
        // Offset
        let offsetX = (40 - colliderWidth) / 2 + 15;
        let offsetY = 0
    
    PP.physics.set_collision_rectangle(player, colliderWidth, colliderHeight, offsetX, offsetY);

}


function manage_player_update(s) {


    let next_anim = curr_anim;

    let curr_score = PP.game_state.get_variable("score");
    //console.log(curr_score);  // per vedere il valore del punteggio


    if(curr_score >= 0 && curr_score < 5) {

        if(isOstricaActivated === true) {
            player_speed=0;
        }
        if (isOstricaActivated === false) {
            player_speed = 350; 
        }
    
        if(isPrinceActivated === true) {
            player_speed=0;
        }
        
        if (isPrinceActivated === false) {
            player_speed = 350; 
        }

    // Condizione per "slide" con movimento
    if (player.geometry.x <= -275 && player.geometry.y < 2092 || player.geometry.x<7400 && player.geometry.x>6930 && player.geometry.y < 4800 && player.geometry.y > 4300 ) {
        next_anim = "slide";
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.D)) {
            PP.physics.set_velocity_x(player, player_speed);
        } else if (PP.interactive.kb.is_key_down(s, PP.key_codes.A)) {
            PP.physics.set_velocity_x(player, -player_speed);
        } else {
            PP.physics.set_velocity_x(player, 0);
        }
    } else { //no slide
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.D)) {
            PP.physics.set_velocity_x(player, player_speed);
            next_anim = "walk1";
        } else if (PP.interactive.kb.is_key_down(s, PP.key_codes.A)) {
            PP.physics.set_velocity_x(player, -player_speed);
            next_anim = "walk1";
        } else {
            PP.physics.set_velocity_x(player, 0);
            next_anim = "stop1";
        }

        // Gestione salto
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.W) && is_on_ground && !is_jumping) {
            is_jumping = true;
            jump_timer = 0; // Resetta il timer del salto
            PP.physics.set_velocity_y(player, -jump_init_speed);
        }

        if (is_jumping) {
            jump_timer += s.delta_time; 
            if (jump_timer >= max_jump_duration || !PP.interactive.kb.is_key_down(s, PP.key_codes.W)) {
                is_jumping = false;
            }
        }

        if (PP.physics.get_velocity_y(player) < 0 ) {
            next_anim = "jump_up1";
        } else if (PP.physics.get_velocity_y(player) > 0 ) {
            next_anim = "jump_down1";
        }

        
    if (PP.physics.get_velocity_y(player) == 0 && !is_jumping) {
        is_on_ground = true; // Il giocatore è a terra
    } else {
        is_on_ground = false; // Il giocatore non è a terra
    }

    }

    // arma
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.F) && 
        PP.interactive.kb.is_key_up(s, PP.key_codes.D) && PP.interactive.kb.is_key_up(s, PP.key_codes.A) &&
        weapon_disable == false) {
        next_anim = "arm1";
    }

    if (next_anim !== curr_anim) {
        PP.assets.sprite.animation_play(player, next_anim);
        curr_anim = next_anim;
    }

    // Specchia giocatore 
    if (PP.physics.get_velocity_x(player) < 0) {
        player.geometry.flip_x = true;
    } else if (PP.physics.get_velocity_x(player) > 0) {
        player.geometry.flip_x = false;
    }

}

if(curr_score >= 5 && curr_score < 10) {

    let player_speed = 300;

    if(isOstricaActivated === true) {
        player_speed=0;
    }
    // Controlla se il tasto E viene rilasciato
    if (isOstricaActivated === false) {
        player_speed = 300; 
    }

    if(isPrinceActivated === true) {
        player_speed=0;
    }
    
    if (isPrinceActivated === false) {
        player_speed = 300; 
    }

    if (player.geometry.x <= -275 && player.geometry.y < 1030 || player.geometry.x<7400 && player.geometry.x>6930 && player.geometry.y > 4550) {
        next_anim = "slide";
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.D)) {
            PP.physics.set_velocity_x(player, player_speed);
        } else if (PP.interactive.kb.is_key_down(s, PP.key_codes.A)) {
            PP.physics.set_velocity_x(player, -player_speed);
        } else {
            PP.physics.set_velocity_x(player, 0);
        }
    } else {
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.D)) {
            PP.physics.set_velocity_x(player, player_speed);
            next_anim = "walk2";
        } else if (PP.interactive.kb.is_key_down(s, PP.key_codes.A)) {
            PP.physics.set_velocity_x(player, -player_speed);
            next_anim = "walk2";
        } else {
            PP.physics.set_velocity_x(player, 0);
            next_anim = "stop2";
        }

        // Gestione salto
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.W) && is_on_ground && !is_jumping) {
            is_jumping = true;
            jump_timer = 0; 
            PP.physics.set_velocity_y(player, -jump_init_speed);
        }

        if (is_jumping) {
            jump_timer += s.delta_time; 
            if (jump_timer >= max_jump_duration || !PP.interactive.kb.is_key_down(s, PP.key_codes.W)) {
                is_jumping = false; 
            }
        }

        // Transizioni salto
        if (PP.physics.get_velocity_y(player) < 0) {
            next_anim = "jump_up2";
        } else if (PP.physics.get_velocity_y(player) > 0) {
            next_anim = "jump_down2";
        }
        
    if (PP.physics.get_velocity_y(player) == 0 && !is_jumping) {
        is_on_ground = true; 
    } else {
        is_on_ground = false; 
    }

    }

    // arma
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.F) && 
        PP.interactive.kb.is_key_up(s, PP.key_codes.D) && PP.interactive.kb.is_key_up(s, PP.key_codes.A) &&
        weapon_disable == false) {
        next_anim = "arm2";
    }

    
    if (next_anim !== curr_anim) {
        PP.assets.sprite.animation_play(player, next_anim);
        curr_anim = next_anim;
    }

    if (PP.physics.get_velocity_x(player) < 0) {
        player.geometry.flip_x = true;
    } else if (PP.physics.get_velocity_x(player) > 0) {
        player.geometry.flip_x = false;
    }

}

if(curr_score >= 10 && curr_score < 15) {

    let player_speed = 250;

    if(isOstricaActivated === true) {
        player_speed=0;
    }

    if (isOstricaActivated === false) {
        player_speed = 250; 
    }

    if(isPrinceActivated === true) {
        player_speed=0;
    }
  
    if (isPrinceActivated === false) {
        player_speed = 250; 
    }


    if (player.geometry.x <= -275 && player.geometry.y < 2092 || player.geometry.x<7400 && player.geometry.x>6930) {
        next_anim = "slide";
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.D)) {
            PP.physics.set_velocity_x(player, player_speed);
        } else if (PP.interactive.kb.is_key_down(s, PP.key_codes.A)) {
            PP.physics.set_velocity_x(player, -player_speed);
        } else {
            PP.physics.set_velocity_x(player, 0);
        }
    } else {
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.D)) {
            PP.physics.set_velocity_x(player, player_speed);
            next_anim = "walk3";
        } else if (PP.interactive.kb.is_key_down(s, PP.key_codes.A)) {
            PP.physics.set_velocity_x(player, -player_speed);
            next_anim = "walk3";
        } else {
            PP.physics.set_velocity_x(player, 0);
            next_anim = "stop3";
        }

        if (PP.interactive.kb.is_key_down(s, PP.key_codes.W) && is_on_ground && !is_jumping) {
            is_jumping = true;
            jump_timer = 0; 
            PP.physics.set_velocity_y(player, -jump_init_speed);
        }

        if (is_jumping) {
            jump_timer += s.delta_time; 
            if (jump_timer >= max_jump_duration || !PP.interactive.kb.is_key_down(s, PP.key_codes.W)) {
                is_jumping = false; 
            }
        }

        //salto
        if (PP.physics.get_velocity_y(player) < 0) {
            next_anim = "jump_up3";
        } else if (PP.physics.get_velocity_y(player) > 0) {
            next_anim = "jump_down3";
        }
                
    if (PP.physics.get_velocity_y(player) == 0 && !is_jumping) {
        is_on_ground = true; 
    } else {
        is_on_ground = false; 
    }

    }

    // arma
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.F) && 
        PP.interactive.kb.is_key_up(s, PP.key_codes.D) && PP.interactive.kb.is_key_up(s, PP.key_codes.A) &&
        weapon_disable == false) {
        next_anim = "arm3";
    }

    if (next_anim !== curr_anim) {
        PP.assets.sprite.animation_play(player, next_anim);
        curr_anim = next_anim;
    }

    if (PP.physics.get_velocity_x(player) < 0) {
        player.geometry.flip_x = true;
    } else if (PP.physics.get_velocity_x(player) > 0) {
        player.geometry.flip_x = false;
    }

}

if(curr_score >= 15 ) {

    let player_speed = 200;

    if(isOstricaActivated === true) {
        player_speed=0;
    }
    if (isOstricaActivated === false) {
        player_speed = 200; 
    }

    if(isPrinceActivated === true) {
        player_speed=0;
    }
    if (isPrinceActivated === false) {
        player_speed = 200; 
    }

    // Condizione per "slide" 
    if (player.geometry.x <= -275 && player.geometry.y < 2092 || player.geometry.x<7400 && player.geometry.x>6930) {
        next_anim = "slide";
        // Permetti il movimento durante la slide
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.D)) {
            PP.physics.set_velocity_x(player, player_speed);
        } else if (PP.interactive.kb.is_key_down(s, PP.key_codes.A)) {
            PP.physics.set_velocity_x(player, -player_speed);
        } else {
            PP.physics.set_velocity_x(player, 0);
        }
    } else {
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.D)) {
            PP.physics.set_velocity_x(player, player_speed);
            next_anim = "walk4";
        } else if (PP.interactive.kb.is_key_down(s, PP.key_codes.A)) {
            PP.physics.set_velocity_x(player, -player_speed);
            next_anim = "walk4";
        } else {
            PP.physics.set_velocity_x(player, 0);
            next_anim = "stop4";
        }

        //salto
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.W) && is_on_ground && !is_jumping) {
            is_jumping = true;
            jump_timer = 0;
            PP.physics.set_velocity_y(player, -jump_init_speed);
        }

        if (is_jumping) {
            jump_timer += s.delta_time; 
            if (jump_timer >= max_jump_duration || !PP.interactive.kb.is_key_down(s, PP.key_codes.W)) {
                is_jumping = false; 
            }
        }

       
        if (PP.physics.get_velocity_y(player) < 0 ) {
            next_anim = "jump_up4";
        } else if (PP.physics.get_velocity_y(player) > 0) {
            next_anim = "jump_down4";
        }
        // Verifica se il giocatore è a terra
    if (PP.physics.get_velocity_y(player) == 0 && !is_jumping) {
        is_on_ground = true; 
    } else {
        is_on_ground = false; 
    }

    }

    // arma
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.F) && 
        PP.interactive.kb.is_key_up(s, PP.key_codes.D) && PP.interactive.kb.is_key_up(s, PP.key_codes.A) &&
        weapon_disable == false) {
        next_anim = "arm4";
    }


    if (next_anim !== curr_anim) {
        PP.assets.sprite.animation_play(player, next_anim);
        curr_anim = next_anim;
    }

    
    if (PP.physics.get_velocity_x(player) < 0) {
        player.geometry.flip_x = true;
    } else if (PP.physics.get_velocity_x(player) > 0) {
        player.geometry.flip_x = false;
    }

}
}


function collision_plastica11(s, player, plastica) {
    // Verifica se il tasto E è premuto e se il giocatore è vicino alla plastica
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        console.log("Plastic collected!");

    // In caso di collisione:

    //distruggo plastica
    PP.assets.destroy(plastica);

    //aggiorno il punteggio
    let prev_score = PP.game_state.get_variable("score");
    PP.game_state.set_variable("score", prev_score + 1);

    score15_no_op = PP.assets.image.add(s, img_score15_no_op, 770, 60, 0.5, 0.5); // Posizione fissa
    score15_no_op.tile_geometry.scroll_factor_x = 0; 
    score15_no_op.tile_geometry.scroll_factor_y = 0; 
   }
}

function collision_plastica12(s, player, plastica) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        console.log("Plastic collected!");

    PP.assets.destroy(plastica);

    let prev_score = PP.game_state.get_variable("score");
    PP.game_state.set_variable("score", prev_score + 1);

    score14_no_op = PP.assets.image.add(s, img_score14_no_op, 720, 60, 0.5, 0.5); 
    score14_no_op.tile_geometry.scroll_factor_x = 0; 
    score14_no_op.tile_geometry.scroll_factor_y = 0; 
   }
}

function collision_plastica13(s, player, plastica) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        console.log("Plastic collected!");

    PP.assets.destroy(plastica);

    let prev_score = PP.game_state.get_variable("score");
    PP.game_state.set_variable("score", prev_score + 1);

    score4_no_op = PP.assets.image.add(s, img_score4_no_op, 200, 60, 0.5, 0.5); 
    score4_no_op.tile_geometry.scroll_factor_x = 0; 
    score4_no_op.tile_geometry.scroll_factor_y = 0; 
   }
}

function collision_plastica14(s, player, plastica) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        console.log("Plastic collected!");
    PP.assets.destroy(plastica);

    let prev_score = PP.game_state.get_variable("score");
    PP.game_state.set_variable("score", prev_score + 1);

    score11_no_op = PP.assets.image.add(s, img_score11_no_op, 570, 60, 0.5, 0.5); 
    score11_no_op.tile_geometry.scroll_factor_x = 0; 
    score11_no_op.tile_geometry.scroll_factor_y = 0; 
   }
}

function collision_plastica15(s, player, plastica) {

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
 
    PP.assets.destroy(plastica);

    let prev_score = PP.game_state.get_variable("score");
    PP.game_state.set_variable("score", prev_score + 1);

    score2_no_op = PP.assets.image.add(s, img_score2_no_op, 100, 60, 0.5, 0.5); 
    score2_no_op.tile_geometry.scroll_factor_x = 0; 
    score2_no_op.tile_geometry.scroll_factor_y = 0; 
   }
}

function hit_crab1(s, arpione, crab1){
    PP.assets.destroy(arpione);
    crab1.is_dead = true;

    //nemico droppa plastica se muore
    // la posizione del granchio per decidere dove droppare la plastica
    let drop_x = crab1.geometry.body_x ; 
    let drop_y = crab1.geometry.body_y ; 

    PP.assets.destroy(crab1);

    let plastica = PP.assets.image.add(s, img_plasticacrab_1, drop_x, drop_y, 0, 0);
    PP.physics.add(s, plastica, PP.physics.type.STATIC);

    // Aggiunto una collisione, ma con il controllo del tasto E per raccoglierla
    PP.physics.add_overlap_f(s, player, plastica, collision_plastica11);

}

function hit_crab2(s, arpione, crab2){
    PP.assets.destroy(arpione);
    crab2.is_dead = true;

    let drop_x = crab2.geometry.body_x ; 
    let drop_y = crab2.geometry.body_y ; 

    PP.assets.destroy(crab2);

    let plastica = PP.assets.image.add(s, img_plasticacrab_2, drop_x, drop_y, 0, 0);
    PP.physics.add(s, plastica, PP.physics.type.STATIC);

    PP.physics.add_overlap_f(s, player, plastica, collision_plastica12);
    

}

function hit_crab3(s, arpione, crab3){
    PP.assets.destroy(arpione);
    crab3.is_dead = true;

    let drop_x = crab3.geometry.body_x ; 
    let drop_y = crab3.geometry.body_y ; 

    PP.assets.destroy(crab3);

    let plastica = PP.assets.image.add(s, img_plasticacrab_3, drop_x, drop_y, 0, 0);
    PP.physics.add(s, plastica, PP.physics.type.STATIC);

    PP.physics.add_overlap_f(s, player, plastica, collision_plastica13);
    
    
}

function hit_crab4(s, arpione, crab4){
    PP.assets.destroy(arpione);
    crab4.is_dead = true;

    let drop_x = crab4.geometry.body_x ; 
    let drop_y = crab4.geometry.body_y ; 

    PP.assets.destroy(crab4);

    let plastica = PP.assets.image.add(s, img_plasticacrab_4, drop_x, drop_y, 0, 0);
    PP.physics.add(s, plastica, PP.physics.type.STATIC);

    PP.physics.add_overlap_f(s, player, plastica, collision_plastica14);
    
}

function hit_crab5(s, arpione, crab5){
    PP.assets.destroy(arpione);
    crab5.is_dead = true;

    let drop_x = crab5.geometry.body_x ; 
    let drop_y = crab5.geometry.body_y ; 

    PP.assets.destroy(crab5);

    let plastica = PP.assets.image.add(s, img_plasticacrab_5, drop_x, drop_y, 0, 0);
    PP.physics.add(s, plastica, PP.physics.type.STATIC);

    PP.physics.add_overlap_f(s, player, plastica, collision_plastica15);
    
}


function hit_latta3(s, arpione, latta3){
    PP.assets.destroy(arpione);
    latta3.is_alive = false;

    let drop_x = latta3.geometry.body_x; 
    let drop_y = latta3.geometry.body_y; 

    PP.assets.destroy(latta3);

    let plastica = PP.assets.image.add(s, img_plasticalatta_3, drop_x, drop_y, 0, 0);
    PP.physics.add(s, plastica, PP.physics.type.STATIC);

    PP.physics.add_overlap_f(s, player, plastica, collision_plastica18);
    
}

function hit_latta4(s, arpione, latta4){
    PP.assets.destroy(arpione);
    latta4.is_alive = false;

    let drop_x = latta4.geometry.body_x; 
    let drop_y = latta4.geometry.body_y; 

    PP.assets.destroy(latta4);

    let plastica = PP.assets.image.add(s, img_plasticalatta_4, drop_x, drop_y, 0, 0);
    PP.physics.add(s, plastica, PP.physics.type.STATIC);

    PP.physics.add_overlap_f(s, player, plastica, collision_plastica19);
    
}


function hit_plastattack(s, arpione, plastattack){
    PP.assets.destroy(arpione);
    PP.assets.destroy(plastattack);

}

function hit_fairy(s, arpione, fairy){
    PP.assets.destroy(arpione); // Distruggi l'arpione
    take_damage_fairy(s);
}


function collision_plastica17(s, player, plastica) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        console.log("Plastic collected!");

    PP.assets.destroy(plastica);

    let prev_score = PP.game_state.get_variable("score");
    PP.game_state.set_variable("score", prev_score + 1);

    score1_no_op = PP.assets.image.add(s, img_score1_no_op, 820, 60, 0.5, 0.5); 
    score1_no_op.tile_geometry.scroll_factor_x = 0;
    score1_no_op.tile_geometry.scroll_factor_y = 0; 
   }
}

function collision_plastica18(s, player, plastica) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        console.log("Plastic collected!");

    
    PP.assets.destroy(plastica);

    let prev_score = PP.game_state.get_variable("score");
    PP.game_state.set_variable("score", prev_score + 1);

    score17_no_op = PP.assets.image.add(s, img_score17_no_op, 870, 60, 0.5, 0.5); 
    score17_no_op.tile_geometry.scroll_factor_x = 0; 
    score17_no_op.tile_geometry.scroll_factor_y = 0; 
   }
}

function collision_plastica19(s, player, plastica) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        console.log("Plastic collected!");

    
    PP.assets.destroy(plastica);

    let prev_score = PP.game_state.get_variable("score");
    PP.game_state.set_variable("score", prev_score + 1);

    score19_no_op = PP.assets.image.add(s, img_score19_no_op, 980, 60, 0.5, 0.5); 
    score19_no_op.tile_geometry.scroll_factor_x = 0; 
    score19_no_op.tile_geometry.scroll_factor_y = 0; 
   }
}

function reenable_weapon(s){
    weapon_disable = false;
}

function manage_player_weapon(s){
    let offset = 60;
    let velocity = 670;

    let curr_score = PP.game_state.get_variable("score");
    //console.log(curr_score);  // per vedere il valore del punteggio

    if (player.geometry.flip_x == true){
        offset = -offset;
        velocity = -velocity;
    }



    if (PP.interactive.kb.is_key_down(s, PP.key_codes.F) && key_f_released) {
        if(weapon_disable == false) {
            key_f_released = false; 

            if(curr_score >= 0 && curr_score < 5) {
           // Avvia l'animazione 
           PP.assets.sprite.animation_play (player, "arm1", [15, 16, 17, 18], 20, 0);
        }

        if(curr_score >= 5 && curr_score < 10) {

            PP.assets.sprite.animation_play (player, "arm2", [15, 16, 17, 18], 20, 0);
        }

        if(curr_score >= 10 && curr_score < 15) {

            PP.assets.sprite.animation_play (player, "arm3", [15, 16, 17, 18], 20, 0);
        }

        if(curr_score >= 15 && curr_score < 20) {

            PP.assets.sprite.animation_play (player, "arm4", [15, 16, 17, 18], 20, 0);
        }

           // timer per attendere la fine dell'animazione
           PP.timers.add_timer (s, 800, function () {
            // Lancia l'arpione
            let arpione = PP.assets.sprite.add(
                s,
                img_arpione,
                player.geometry.x + offset,
                player.geometry.y - 170,
                0.5,
                0.5
            );
             
             // Aggiungi animazione all'arpione 
            PP.assets.sprite.animation_add_list(arpione, "go", [2, 1, 0], 3, 0);

            if(player.geometry.flip_x) {    // == true
                arpione.geometry.flip_x = true;

            }

            // Avvia l'animazione dell'arpione
            PP.assets.sprite.animation_play(arpione, "go");
 
              PP.physics.add(s, arpione, PP.physics.type.DYNAMIC);
              PP.physics.set_allow_gravity(arpione, false);
              PP.physics.set_velocity_x(arpione, velocity);

              // Aggiungi collider per ogni granchio
              PP.physics.add_collider_f(s, arpione, crab1, hit_crab1);
              PP.physics.add_collider_f(s, arpione, crab2, hit_crab2);
              PP.physics.add_collider_f(s, arpione, crab3, hit_crab3);
              PP.physics.add_collider_f(s, arpione, crab4, hit_crab4);
              PP.physics.add_collider_f(s, arpione, crab5, hit_crab5);
              if(fairy) {PP.physics.add_collider_f(s, arpione, fairy, hit_fairy);}
          
              if(plastattack) {PP.physics.add_collider_f(s, arpione, plastattack, hit_plastattack);}
         
             PP.physics.add_collider_f(s, arpione, latta3, hit_latta3);
             PP.physics.add_collider_f(s, arpione, latta4, hit_latta4);

            // Riabilita l'arma dopo un certo periodo
            PP.timers.add_timer(s, 500, reenable_weapon, false);
            weapon_disable = true;
        }, false); // 300ms 
    }
}
// Controlla se il tasto F è stato rilasciato
if (PP.interactive.kb.is_key_up(s, PP.key_codes.F)) {
    key_f_released = true; // nuovo lancio al prossimo "keydown"
}
}