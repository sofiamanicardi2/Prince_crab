let img_fairy;
let fairy;
let img_plastattack;
let img_plastattack1;
let plastattack;

let img_health_bar; // Immagine per la barra della vita
let health_bar; // La sprite per la barra della vita

let fairy_health = 3; // La fata può essere colpita 3 volte
let fairy_is_dead = false; // Flag per la morte della fata
let hit_count = 0; // Numero di colpi ricevuti dalla fata
let weapon_enemy_disabled5 = false; // Flag per disabilitare l'arma

let attack_type = 0; // Tipo di attacco corrente (0 = lento, 1 = veloce, 2 = misto)
let attack_timer = null; // Timer per gli attacchi
let attack_count = 0; // Numero di attacchi eseguiti (usato per aggiornare la barra della vita)

function preload_fairy(s) {
    // Caricamento delle risorse (sprite) della fata e dell'attacco
    img_fairy = PP.assets.sprite.load_spritesheet(s, "assets/images/sprite_fata_def.png", 90, 151);
    img_health_bar = PP.assets.sprite.load_spritesheet(s, "assets/images/vita_fata.png", 65, 23); // Un'unica sprite con 3 immagini per la barra
    img_flower_fairy = PP.assets.image.load(s, "assets/images/fiore_fata.png");
    img_plastattack1 = PP.assets.image.load(s, "assets/images/plastattack.png", 60, 60);


    img_finale1 = PP.assets.image.load(s, "assets/backgrounds/end_01.png");
    img_finale2 = PP.assets.image.load(s, "assets/backgrounds/end_02.png");

    console.log("Image loaded", img_fairy, img_plastattack, img_health_bar);
}

function give_damage(s, fairy, player) {
    // Riduce la salute della fata e aggiorna la barra della vita
    take_damage_fairy(s);

}



function create_fairy(s) {
    fairy = PP.assets.sprite.add(s, img_fairy, 5900, 4400, 0.5, 1);
    PP.physics.add(s, fairy, PP.physics.type.DYNAMIC);
    PP.physics.set_allow_gravity(fairy, false); // Disabilita la gravità
    PP.physics.add_collider_f(s, fairy, player, goto_gameover);  // collisione con il player
    PP.physics.add_collider(s, fairy, floor19);
    PP.physics.add_collider(s, fairy, wall36);
    PP.physics.add_collider(s, fairy, wall37);

    PP.assets.sprite.animation_add_list(fairy, "attack", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 0); // Animazione di attacco lento
    PP.assets.sprite.animation_add_list(fairy, "attack2", [16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 4, 0); // Animazione di attacco veloce
    PP.assets.sprite.animation_add_list(fairy, "attack3", [32, 33, 34, 35, 36, 37, 38, 39, 40, 41], 7, 0); // Animazione di attacco misto
    PP.assets.sprite.animation_add_list(fairy, "die", [0, 15], 5, 5); 
    PP.assets.sprite.animation_play(fairy, "attack"); 

    health_bar = PP.assets.sprite.add(s, img_health_bar, fairy.geometry.x, fairy.geometry.y - 40, 0.5, 1);

    PP.assets.sprite.animation_add_list(health_bar, "0", [0], 10, -1); // Barra piena
    PP.assets.sprite.animation_add_list(health_bar, "1", [1], 10, -1); // Barra 2/3
    PP.assets.sprite.animation_add_list(health_bar, "2", [2], 10, -1); // Barra 1/3


    start_attack_timer(s);
}

function update_fairy(s, player) {
    if (fairy_is_dead) return;

    fairy.geometry.x = 5900;

   
    let offset = Math.sin(s.time.now / 900) * 75; 
    fairy.geometry.y = 4400 + offset;

    health_bar.geometry.x = fairy.geometry.x;
    health_bar.geometry.y = fairy.geometry.y - 140; 
}

function attack(s) {
    if (weapon_enemy_disabled5 || fairy_is_dead) {
        return;
    }

    const distanceToPlayer = Math.abs(fairy.geometry.x - player.geometry.x);

    if (distanceToPlayer > 1000) {
        return;
    }

    let velocity;

    // Cambia l'animazione solo se la fata è stata colpita
    if (hit_count === 0) {
        PP.assets.sprite.animation_play(fairy, "attack"); // Animazione di attacco lento
    } else if (hit_count === 1) {
        PP.assets.sprite.animation_play(fairy, "attack2"); // Animazione di attacco veloce
    } else if (hit_count === 2) {
        PP.assets.sprite.animation_play(fairy, "attack3");
        fairy.geometry.scale_x = 1.25;
        fairy.geometry.scale_y = 1.25; // Animazione di attacco misto
    }


    plastattack;
        if (Math.random() < 0.1) { // Probabilità 10% per ciascuna immagine
            img_plastattack = img_plastica_1;
        } else if (Math.random() < 0.2) {
            img_plastattack = img_plastica_2;
        } else if (Math.random() < 0.3) {
            img_plastattack = img_plastica_3;
        } else if (Math.random() < 0.4) {
            img_plastattack = img_plastica_4;
        } else if (Math.random() < 0.5) {
            img_plastattack = img_plastica_5;
        } else if (Math.random() < 0.6) {
            img_plastattack = img_plastica_22;
        } else if (Math.random() < 0.7) {
            img_plastattack = img_score14_no_op;
        } else if (Math.random() < 0.8) {
            img_plastattack = img_plastica_23;
        } else if (Math.random() < 0.9) {
            img_plastattack = img_plastica_21;
        } else {
            img_plastattack = img_plastattack1;
        }

    plastattack = PP.assets.image.add(s, img_plastattack, fairy.geometry.x, fairy.geometry.y, 0.5, 0.5); // Posizione dell'attacco


    PP.physics.add(s, plastattack, PP.physics.type.DYNAMIC); 
    PP.physics.set_allow_gravity(plastattack, false);
    PP.physics.set_velocity_x(plastattack, 300); 

    
    PP.timers.add_timer(s, 1800, () => {
        if (plastattack) {
            PP.assets.destroy(plastattack); 
            plastattack = null; 
        }
    }, false); 

    PP.physics.add_collider_f(s, plastattack, player, hit7_player);


    
    attack_type = (attack_type + 1) % 3; 

    
    attack_count++;
    update_health_bar(s);
}

function hit7_player(s, plastattack, player){
    goto_gameover(s);
}

function start_attack_timer(s) {
    
    attack_timer = PP.timers.add_timer(s, 3000, () => {
        if (!fairy_is_dead) {
            attack(s); 
        }
    }, true); 
}

function reenable_weapon_enemy(s) {
    weapon_enemy_disabled5 = false;
}

function update_health_bar(s) {
    if (hit_count === 0) {
        PP.assets.sprite.animation_play(health_bar, "0"); // Barra piena
    } else if (hit_count === 1) {
        PP.assets.sprite.animation_play(health_bar, "1"); // Barra 2/3
    } else if (hit_count === 2) {
        PP.assets.sprite.animation_play(health_bar, "2"); // Barra 1/3
    }
}

function finale1(s) {
    finale1_sprite = PP.assets.image.add(s, img_finale1, 0, 0, 0, 0);
    finale1_sprite.tile_geometry.scroll_factor_x = 0; 
    finale1_sprite.tile_geometry.scroll_factor_y = 0; 
}

function finale2(s) {
finale2_sprite = PP.assets.image.add(s, img_finale2, 0, 0, 0, 0);
finale2_sprite.tile_geometry.scroll_factor_x = 0; 
finale2_sprite.tile_geometry.scroll_factor_y = 0; 
}

function take_damage_fairy(s) {
    let drop_x = fairy.geometry.body_x ; 
    let drop_y = fairy.geometry.body_y + 210;

    // Ogni volta che la fata prende danno
    hit_count++;
    fairy_health--; 

    console.log("Fairy hit count: " + hit_count); 
    console.log("Fairy health: " + fairy_health);

    if (hit_count === 3) {
        PP.assets.sprite.animation_play(fairy, "die"); 
        fairy_is_dead = true; 

        if (fairy) {
            PP.assets.destroy(fairy);  
            fairy = null;
        }

        if (health_bar) {
            PP.assets.destroy(health_bar); 
            health_bar = null;
        }

        // Disabilita il timer degli attacchi solo se esiste
        if (attack_timer) {
            PP.timers.remove_timer(s, attack_timer); 
            attack_timer = null;
        } 

        flower_fairy = PP.assets.image.add(s, img_flower_fairy, drop_x, drop_y, 0.5, 0.5);
        PP.physics.add(s, flower_fairy, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, flower_fairy, collision_fiore);

            // Controlla se il giocatore è vicino all'ostrica
    if (flower_fairy) {
        const isNearFiore = Math.abs(flower_fairy.geometry.x - player.geometry.x) <= 150;

        if (isNearFiore && PP.interactive.kb.is_key_down(s, PP.key_codes.E) && !keyFiorePressed) {
            keyFiorePressed = true; 
            PP.scenes.start("cover");
        }

        if (PP.interactive.kb.is_key_up(s, PP.key_codes.E)) {
            keyFiorePressed = false;
        }
    }

    function collision_fiore(s, player, flower_fairy) {
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
    
        PP.assets.destroy(flower_fairy);
    
        let prev_score = PP.game_state.get_variable("score");
        PP.game_state.set_variable("score", prev_score + 1);

        let curr_score = PP.game_state.get_variable("score");

        // Se raccogli il fiore passa ai due finali
    if ( curr_score === 21) {
        finale2(s);  
    }
    else if (curr_score < 21) {
        finale1(s); 
    }

        
    }
    }
}
}