let img_latta;
    let img_sputo;
    let latta3;
    let latta4;
    let attack_check;
    let curr_anim_latta = "idle";
    
    function preload_latta(s) {
        img_latta = PP.assets.sprite.load_spritesheet(s, "assets/images/lattina_spritesheet.png", 92, 107);
        img_sputo = PP.assets.sprite.load_spritesheet(s, "assets/images/sputo.png", 32, 27 );
    }

    function hit_player3(s, latta3, player){
        goto_gameover(s);
        create_latta3(s);
    } 

    function hit_player4(s, latta4, player){
        goto_gameover(s);
        create_latta4(s);
    } 
    

    function create_latta3(s, x, y) {
        latta3 = PP.assets.sprite.add(s, img_latta, 8480, 2197, 1, 1);
        PP.physics.add(s, latta3, PP.physics.type.STATIC);
        latta3.is_alive = true; // Stato della latta
        PP.physics.add_collider_f(s, latta3, player, goto_gameover);
        latta3.geometry.flip_x = false;
        latta3.attack_check = false;
    
        PP.assets.sprite.animation_add_list(latta3, "idle", [0, 11, 12, 11, 0], 3, -1);
        PP.assets.sprite.animation_add_list(latta3, "attack", [9, 15, 6, 2], 5, -1);
        PP.assets.sprite.animation_play(latta3, "idle");
    }

    function create_latta4(s, x, y) {
        latta4 = PP.assets.sprite.add(s, img_latta, 4630, 1447, 1, 1);
        PP.physics.add(s, latta4, PP.physics.type.STATIC);
        latta4.is_alive = true; // Stato della latta
        PP.physics.add_collider_f(s, latta4, player, goto_gameover);
        latta4.geometry.flip_x = false;
        latta4.attack_check = false;
    
        PP.assets.sprite.animation_add_list(latta4, "idle", [0, 11, 12, 11, 0], 3, -1);
        PP.assets.sprite.animation_add_list(latta4, "attack", [9, 15, 6, 2], 5, -1);
        PP.assets.sprite.animation_play(latta4, "idle");
    }

    function latta3_attack(s, latta3) {
        console.log("latta");
        if (!latta3.is_alive) return; 
        
        let sputo3 = PP.assets.sprite.add(s, img_sputo, latta3.geometry.x -60, latta3.geometry.y -70, 0.5, 0.5); 
        
        PP.timers.add_timer(s, 1000, () => {
            if (sputo3) {
                PP.assets.destroy(sputo3); 
                sputo3 = null; 
            }
        }, false); 

        PP.physics.add(s, sputo3, PP.physics.type.DYNAMIC); 
        PP.physics.set_allow_gravity(sputo3, false);
        PP.physics.set_velocity_x(sputo3, -400);
        PP.physics.add_collider_f(s, sputo3, player, hit_player_3);

    }

    function latta4_attack(s, latta4) {
        console.log("latta");
        if (!latta4.is_alive) return; // Se la latta è morta, non attacca
    
        let sputo4 = PP.assets.sprite.add(s, img_sputo, latta4.geometry.x -60, latta4.geometry.y -70, 0.5, 0.5); 
    
        PP.timers.add_timer(s, 1200, () => {
            if (sputo4) {
                PP.assets.destroy(sputo4); 
                sputo4 = null; 
            }
        }, false); 

        PP.physics.add(s, sputo4, PP.physics.type.DYNAMIC); 
        PP.physics.set_allow_gravity(sputo4, false);
        PP.physics.set_velocity_x(sputo4, -400);
        PP.physics.add_collider_f(s, sputo4, player, hit_player_4);
    
    }
    
    function update_latta(s) {


            //latta3
    
            if (Math.abs(latta3.geometry.x - player.geometry.x) <= 500) {

                if (!latta3.attack_check && latta3.is_alive) {
                    latta3.attack_check = true;
                    let next_anim = "attack";
                    PP.assets.sprite.animation_play(latta3, next_anim);
                    latta3.curr_anim = next_anim;
    
                    PP.timers.add_timer(s, 2600, () => {
                        latta3_attack(s, latta3);
                        latta3.attack_check = false; 
                    }, false);
                }
            } else {
                let next_anim = "idle";
                if (latta3.curr_anim !== next_anim && latta3.is_alive) {
                    PP.assets.sprite.animation_play(latta3, next_anim);
                    latta3.curr_anim = next_anim;
                }
            }

            //latta4
    
            if (Math.abs(latta4.geometry.x - player.geometry.x) <= 600) {
                
                if (!latta4.attack_check && latta4.is_alive) {
                    latta4.attack_check = true;
                    let next_anim = "attack";
                    PP.assets.sprite.animation_play(latta4, next_anim);
                    latta4.curr_anim = next_anim;
    
                    PP.timers.add_timer(s, 2600, () => {
                        latta4_attack(s, latta4);
                        latta4.attack_check = false; 
                    }, false);
                }
            } else {
                let next_anim = "idle";
                if (latta4.curr_anim !== next_anim && latta4.is_alive) {
                    PP.assets.sprite.animation_play(latta4, next_anim);
                    latta4.curr_anim = next_anim;
                }
            }

    }


    function hit_player_3(s, sputo3, player) {
        PP.assets.destroy(sputo3);
        goto_gameover(s); // Avvia la scena di game over
    }

    function hit_player_4(s, sputo4, player) {
        PP.assets.destroy(sputo4);
        goto_gameover(s); // Avvia la scena di game over
    }



