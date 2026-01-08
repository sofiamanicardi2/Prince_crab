let img_checkpoint1_off, img_checkpoint1_on;
let img_checkpoint2_off, img_checkpoint2_on;
let img_checkpoint3_off, img_checkpoint3_on;
let checkpoint = null; 
let checkpoint_position = { x: 0, y: 0 };
let img_gameover;
let gameover_sprite;
let img_conchiglia_back;
let conchiglia_back1;
let conchiglia_back2;
let img_conchiglia_back1;
let img_conchiglia_back2;

function preload_checkpoint(s) {
    img_conchiglia_back1 = PP.assets.image.load(s, "assets/buttons/torna.png");
    img_conchiglia_back2 = PP.assets.image.load(s, "assets/buttons/continua.png");


    img_checkpoint1_off = PP.assets.image.load(s, "assets/images/checkpoint1_off.png");
    img_checkpoint1_on = PP.assets.image.load(s, "assets/images/checkpoint1_on.png");
    img_checkpoint2_off = PP.assets.image.load(s, "assets/images/checkpoint2_off.png");
    img_checkpoint2_on = PP.assets.image.load(s, "assets/images/checkpoint2_on.png");
    img_checkpoint3_off = PP.assets.image.load(s, "assets/images/checkpoint3_off.png");
    img_checkpoint3_on = PP.assets.image.load(s, "assets/images/checkpoint3_on.png");


     img_gameover = PP.assets.image.load(s, "assets/backgrounds/game_over.png");
}

function create_checkpoint(s, x, y, img_off, img_on) {


    let checkpoint_sprite = PP.assets.image.add(s, img_off, x, y, 1, 1);
    PP.physics.add(s, checkpoint_sprite, PP.physics.type.STATIC);


    checkpoint_sprite.active_img = img_on;
    checkpoint_sprite.inactive_img = img_off;
    checkpoint_sprite.is_active = false;


    PP.physics.add_overlap_f(s, player, checkpoint_sprite, activate_checkpoint);

    return checkpoint_sprite;
}


function create_checkpoints(s) {

    checkpoint1 = create_checkpoint(s, 1850, 1950, img_checkpoint1_off, img_checkpoint1_on);
    checkpoint2 = create_checkpoint(s, 7600, 1850, img_checkpoint2_off, img_checkpoint2_on);
    checkpoint3 = create_checkpoint(s, 7510, 4450, img_checkpoint3_off, img_checkpoint3_on);
}

function activate_checkpoint(s, player, checkpoint_sprite) {
    if (!checkpoint_sprite.is_active) {

        PP.assets.destroy(checkpoint_sprite);

        let new_checkpoint_sprite = PP.assets.image.add(
            s,
            checkpoint_sprite.active_img,
            checkpoint_sprite.geometry.x,
            checkpoint_sprite.geometry.y,
            1,
            1
        );

        // stato del checkpoint
        new_checkpoint_sprite.active_img = checkpoint_sprite.active_img;
        new_checkpoint_sprite.inactive_img = checkpoint_sprite.inactive_img;
        new_checkpoint_sprite.is_active = true;

        // collider 
        PP.physics.add(s, new_checkpoint_sprite, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, new_checkpoint_sprite, activate_checkpoint);

        // stato del checkpoint attivo
        checkpoint = new_checkpoint_sprite;
        checkpoint_position.x = new_checkpoint_sprite.geometry.x;
        checkpoint_position.y = new_checkpoint_sprite.geometry.y;

        
    }
}

function goto_gameover(s) {
    if (checkpoint) {
        // Riposiziona il giocatore all'ultimo checkpoint attivato
        player.geometry.x = checkpoint_position.x;
        player.geometry.y = checkpoint_position.y;

        // Reset della velocità del giocatore
        PP.physics.set_velocity_x(player, 0);
        PP.physics.set_velocity_y(player, 0);

        // Mostra la schermata di Game Over
        show_gameover_screen(s);

        
    } else {
        // Se non c'è un checkpoint attivo, mostra solo Game Over
        gameover_sprite = PP.assets.image.add(s, img_gameover, 0, 0, 0, 0);
        gameover_sprite.tile_geometry.scroll_factor_x = 0; 
        gameover_sprite.tile_geometry.scroll_factor_y = 0; 

        conchiglia_back1 = PP.assets.image.add(s, img_conchiglia_back1, 45, 170, 0, 0);
        conchiglia_back1.tile_geometry.scroll_factor_x = 0; 
        conchiglia_back1.tile_geometry.scroll_factor_y = 0;

        
        PP.interactive.mouse.add(conchiglia_back1, "pointerdown", change_scene_cover1);
    }
}

function show_gameover_screen(s, callback) {
    // Mostra la schermata di Game Over
    gameover_sprite = PP.assets.image.add(s, img_gameover, 0, 0, 0, 0);
    gameover_sprite.tile_geometry.scroll_factor_x = 0; 
    gameover_sprite.tile_geometry.scroll_factor_y = 0; 

    conchiglia_back1 = PP.assets.image.add(s, img_conchiglia_back1, 45, 170, 0, 0);
    conchiglia_back1.tile_geometry.scroll_factor_x = 0; 
    conchiglia_back1.tile_geometry.scroll_factor_y = 0;
    conchiglia_back2 = PP.assets.image.add(s, img_conchiglia_back2, 45, 50, 0, 0);
    conchiglia_back2.tile_geometry.scroll_factor_x = 0; 
    conchiglia_back2.tile_geometry.scroll_factor_y = 0;

    PP.interactive.mouse.add(conchiglia_back1, "pointerdown", change_scene_cover);

  
    PP.interactive.mouse.add(conchiglia_back2, "pointerdown", change_scene_oceano);
    
}

function change_scene_cover(s) {
    PP.assets.destroy(conchiglia_back2);
    PP.assets.destroy(conchiglia_back1);
    PP.scenes.start("cover");
}

function change_scene_cover1(s) {
    PP.assets.destroy(conchiglia_back1);
    PP.scenes.start("cover");
}

function change_scene_oceano(s) {
    PP.assets.destroy(conchiglia_back2);
    PP.assets.destroy(conchiglia_back1);
    PP.assets.destroy(gameover_sprite);
}