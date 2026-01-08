let img_crab;
let crab1;
let crab2;
let crab3;
let crab4;
let crab5;

function preload_crab(s) {
    //spritesheet non attacco
    img_crab = PP.assets.sprite.load_spritesheet(s, "assets/images/granchio_spritesheet_3.png", 142, 82);
}

function hit1_player(s, crab1, player){
    goto_gameover(s);
    create_crab1(s);
}

function hit2_player(s, crab2, player){
    goto_gameover(s);
    create_crab2(s);
}

function hit3_player(s, crab3, player){
    goto_gameover(s);
    create_crab3(s);
}

function hit4_player(s, crab4, player){
    goto_gameover(s);
    create_crab4(s);
}

function hit5_player(s, crab5, player){
    goto_gameover(s);
    create_crab5(s);
}


function create_crab1(s, x, y) {
    crab1 = PP.assets.sprite.add(s, img_crab, 5400, 1700, 3, 1);
    PP.physics.add(s, crab1, PP.physics.type.DYNAMIC);
    PP.physics.add_collider_f(s, crab1, player, hit1_player);
    PP.physics.add_collider(s, crab1, floor6);
    PP.physics.add_collider(s, crab1, floor8);
    PP.physics.add_collider(s, crab1, floor13);
    PP.physics.add_collider(s, crab1, floor16);
    PP.physics.add_collider(s, crab1, floor2);

    PP.assets.sprite.animation_add_list(crab1, "walk_left", [  8, 1, 3 ], 10, -1);
    PP.assets.sprite.animation_add_list(crab1, "walk_right",  [ 3, 1, 8 ], 10, -1);
    PP.assets.sprite.animation_add_list(crab1, "attack",  [ 5, 6, 2, 9, 10], 10, -1);

    PP.assets.sprite.animation_play(crab1, "walk_right");

    PP.physics.set_velocity_x(crab1, 100);

} 

function create_crab2(s, x, y) {
    crab2 = PP.assets.sprite.add(s, img_crab, 3400, 1600, 3, 1);
    PP.physics.add(s, crab2, PP.physics.type.DYNAMIC);
    PP.physics.add_collider_f(s, crab2, player, hit2_player);
    PP.physics.add_collider(s, crab2, floor6);
    PP.physics.add_collider(s, crab2, floor8);
    PP.physics.add_collider(s, crab2, floor13);
    PP.physics.add_collider(s, crab2, floor16);
    PP.physics.add_collider(s, crab2, floor2);

    PP.assets.sprite.animation_add_list(crab2, "walk_left", [  8, 1, 3 ], 10, -1);
    PP.assets.sprite.animation_add_list(crab2, "walk_right",  [ 3, 1, 8 ], 10, -1);
    PP.assets.sprite.animation_add_list(crab2, "attack",  [ 5, 6, 2, 9, 10], 10, -1);

    PP.assets.sprite.animation_play(crab2, "walk_right");

    PP.physics.set_velocity_x(crab2, 100);

} 

function create_crab3(s, x, y) {
    crab3 = PP.assets.sprite.add(s, img_crab, 8400, 2666, 3, 1);
    PP.physics.add(s, crab3, PP.physics.type.DYNAMIC);
    PP.physics.add_collider_f(s, crab3, player, hit3_player);
    PP.physics.add_collider(s, crab3, floor6);
    PP.physics.add_collider(s, crab3, floor8);
    PP.physics.add_collider(s, crab3, floor13);
    PP.physics.add_collider(s, crab3, floor16);
    PP.physics.add_collider(s, crab3, floor2);

    PP.assets.sprite.animation_add_list(crab3, "walk_left", [  8, 1, 3 ], 10, -1);
    PP.assets.sprite.animation_add_list(crab3, "walk_right",  [ 3, 1, 8 ], 10, -1);
    PP.assets.sprite.animation_add_list(crab3, "attack",  [ 5, 6, 2, 9, 10], 10, -1);

    PP.assets.sprite.animation_play(crab3, "walk_right");

    PP.physics.set_velocity_x(crab3, 100);

} 

function create_crab4(s, x, y) {
    crab4 = PP.assets.sprite.add(s, img_crab, 10650, 4470, 3, 1);
    PP.physics.add(s, crab4, PP.physics.type.DYNAMIC);
    PP.physics.add_collider_f(s, crab4, player, hit4_player);
    PP.physics.add_collider(s, crab4, floor6);
    PP.physics.add_collider(s, crab4, floor8);
    PP.physics.add_collider(s, crab4, floor13);
    PP.physics.add_collider(s, crab4, floor16);
    PP.physics.add_collider(s, crab4, floor2);

    PP.assets.sprite.animation_add_list(crab4, "walk_left", [  8, 1, 3 ], 10, -1);
    PP.assets.sprite.animation_add_list(crab4, "walk_right",  [ 3, 1, 8 ], 10, -1);
    PP.assets.sprite.animation_add_list(crab4, "attack",  [ 5, 6, 2, 9, 10], 10, -1);

    PP.assets.sprite.animation_play(crab4, "walk_right");

    PP.physics.set_velocity_x(crab4, 100);

} 

function create_crab5(s, x, y) {
    crab5 = PP.assets.sprite.add(s, img_crab, 1950, 2505, 3, 1);
    PP.physics.add(s, crab5, PP.physics.type.DYNAMIC);
    PP.physics.add_collider_f(s, crab5, player, hit5_player);
    PP.physics.add_collider(s, crab5, floor6);
    PP.physics.add_collider(s, crab5, floor8);
    PP.physics.add_collider(s, crab5, floor13);
    PP.physics.add_collider(s, crab5, floor16);
    PP.physics.add_collider(s, crab5, floor2);

    PP.assets.sprite.animation_add_list(crab5, "walk_left", [  8, 1, 3 ], 10, -1);
    PP.assets.sprite.animation_add_list(crab5, "walk_right",  [ 3, 1, 8 ], 10, -1);
    PP.assets.sprite.animation_add_list(crab5, "attack",  [ 5, 6, 2, 9, 10], 10, -1);

    PP.assets.sprite.animation_play(crab5, "walk_right");

    PP.physics.set_velocity_x(crab5, 100);

}

function update_crabs(s) {
  
    if(crab1 && crab1.geometry.x >= 5800) {
            PP.physics.set_velocity_x(crab1, -100);
            PP.assets.sprite.animation_play(crab1, "walk_left");
        }
        else if(crab1 && crab1.geometry.x <= 5400) {
            PP.physics.set_velocity_x(crab1, 100);
            PP.assets.sprite.animation_play(crab1, "walk_right");
        }

        if(crab2 && crab2.geometry.x >= 3800) {
            PP.physics.set_velocity_x(crab2, -100);
            PP.assets.sprite.animation_play(crab2, "walk_left");
        }
        else if(crab2 && crab2.geometry.x <= 3400) {
            PP.physics.set_velocity_x(crab2, 100);
            PP.assets.sprite.animation_play(crab2, "walk_right");
        }

        if(crab3 && crab3.geometry.x >= 9400) {
            PP.physics.set_velocity_x(crab3, -100);
            PP.assets.sprite.animation_play(crab3, "walk_left");
        }
        else if(crab3 && crab3.geometry.x <= 8800) {
            PP.physics.set_velocity_x(crab3, 100);
            PP.assets.sprite.animation_play(crab3, "walk_right");
        }

        if(crab4 && crab4.geometry.x >= 10880) {
            PP.physics.set_velocity_x(crab4, -100);
            PP.assets.sprite.animation_play(crab4, "walk_left");
        }
        else if(crab4 && crab4.geometry.x <= 10500) {
            PP.physics.set_velocity_x(crab4, 100);
            PP.assets.sprite.animation_play(crab4, "walk_right");
        }

        if(crab5 && crab5.geometry.x >= 2250) {
            PP.physics.set_velocity_x(crab5, -100);
            PP.assets.sprite.animation_play(crab5, "walk_left");
        }
        else if(crab5 && crab5.geometry.x <= 2050) {
            PP.physics.set_velocity_x(crab5, 100);
            PP.assets.sprite.animation_play(crab5, "walk_right");
        }

    }


