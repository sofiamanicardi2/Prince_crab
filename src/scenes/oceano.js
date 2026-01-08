let img_background;

let platform_updated = false; // Flag globale

let floor;
let speed; 

let score1; 
let score2;
let score3;
let score4;
let score5;
let score6;
let score7;
let score8;
let score9;
let score10;
let score11;
let score12;
let score13;
let score14;
let score15;
let score16;
let score17;
let score18;
let score19;
let score20;

let img_score1;
let img_score2;
let img_score3;
let img_score4;
let img_score5;
let img_score6;
let img_score7;
let img_score8;
let img_score9;
let img_score10;
let img_score11;
let img_score12;
let img_score13;
let img_score14;
let img_score15;
let img_score16;
let img_score17;
let img_score18;
let img_score19;
let img_score20;


function preload(s) {
    console.log("Executing preload() - oceano");

    // Carico gli asset grafici
    //sfondo
    img_background = PP.assets.image.load(s, "assets/backgrounds/lastbozzasfondo.jpg");

    //score
    img_score1 = PP.assets.image.load(s, "assets/hudimage/1-ciabattaopacità.png");
    img_score2 = PP.assets.image.load(s, "assets/hudimage/2-bottiglia1opacità.png");
    img_score3 = PP.assets.image.load(s, "assets/hudimage/3-sacchetto1opacità.png");
    img_score4 = PP.assets.image.load(s, "assets/hudimage/4-bottiglia2opacità.png");
    img_score5 = PP.assets.image.load(s, "assets/hudimage/5-bicchierecoloratoopacità.png");
    img_score6 = PP.assets.image.load(s, "assets/hudimage/6-saponeopacità.png");
    img_score7 = PP.assets.image.load(s, "assets/hudimage/7-posateopacità.png");
    img_score8 = PP.assets.image.load(s, "assets/hudimage/8-cannucceopacità.png");
    img_score9 = PP.assets.image.load(s, "assets/hudimage/9-portabibiteopacità.png");
    img_score10 = PP.assets.image.load(s, "assets/hudimage/10-sacchetto2opacità.png");
    img_score11 = PP.assets.image.load(s, "assets/hudimage/11-bottiglia3opacità.png");
    img_score12 = PP.assets.image.load(s, "assets/hudimage/12-saccoopacità.png");
    img_score13 = PP.assets.image.load(s, "assets/hudimage/13-bicchiereopacità.png");
    img_score14 = PP.assets.image.load(s, "assets/hudimage/14-spazzolinoopacità.png");
    img_score15 = PP.assets.image.load(s, "assets/hudimage/15-bottiglia4opacità.png");
    img_score16 = PP.assets.image.load(s, "assets/hudimage/16-bottiglia5opacità.png");
    img_score17 = PP.assets.image.load(s, "assets/hudimage/17-bottiglia6opacità.png");
    img_score18 = PP.assets.image.load(s, "assets/hudimage/18-attaccapanniopacità.png");
    img_score19 = PP.assets.image.load(s, "assets/hudimage/19-guantoopacità.png");
    img_score20 = PP.assets.image.load(s, "assets/hudimage/20-involucroopacità.png");

    preload_player(s);
    preload_platforms(s);
    preload_crab(s);
    preload_latta(s);
    preload_plastica(s);
    preload_instruction(s);
    preload_ostrica (s);
    preload_crabfriend (s);
    preload_checkpoint(s);
    preload_funfact (s);
    preload_fairy(s);


}

function collider_test(s,a,b) {
    console.log("Player colliding with the box!");
}

function create(s) {
    console.log("Executing create() - oceano");

    // Inserimento dello sfondo
    PP.assets.image.add(s, img_background, -490, 0, 0, 0);

    create_player(s);

    configure_player_animations(s); 
    create_platforms(s); 
    create_structure(s, player);           
    create_crab1(s); 
    create_crab2(s); 
    create_crab3(s); 
    create_crab4(s); 
    create_crab5(s); 
    create_latta3(s);
    create_latta4(s);
    create_plastica(s); 
    create_instruction(s, player);
    create_ostrica (s);
    create_crabfriend (s);
    create_checkpoints(s);
    create_funfact (s, player);
    create_fairy(s);

                  

    PP.camera.start_follow(s, player, 0, 220);

    // Aggiunta score
    score1 = PP.assets.image.add(s, img_score1, 50, 60, 0.5, 0.5); // Posizione fissa
    score1.tile_geometry.scroll_factor_x = 0; // Blocca lo scorrimento orizzontale
    score1.tile_geometry.scroll_factor_y = 0; // Blocca lo scorrimento verticale

    score2 = PP.assets.image.add(s, img_score2, 100, 60, 0.5, 0.5); // Posizione fissa
    score2.tile_geometry.scroll_factor_x = 0; // Blocca lo scorrimento orizzontale
    score2.tile_geometry.scroll_factor_y = 0; // Blocca lo scorrimento verticale

    score3 = PP.assets.image.add(s, img_score3, 150, 60, 0.5, 0.5); // Posizione fissa
    score3.tile_geometry.scroll_factor_x = 0; // Blocca lo scorrimento orizzontale
    score3.tile_geometry.scroll_factor_y = 0; // Blocca lo scorrimento verticale

    score4 = PP.assets.image.add(s, img_score4, 200, 60, 0.5, 0.5); // Posizione fissa
    score4.tile_geometry.scroll_factor_x = 0; // Blocca lo scorrimento orizzontale
    score4.tile_geometry.scroll_factor_y = 0; // Blocca lo scorrimento verticale

    score5 = PP.assets.image.add(s, img_score5, 250, 60, 0.5, 0.5); // Posizione fissa
    score5.tile_geometry.scroll_factor_x = 0; // Blocca lo scorrimento orizzontale
    score5.tile_geometry.scroll_factor_y = 0; // Blocca lo scorrimento verticale

    score6 = PP.assets.image.add(s, img_score6, 300, 60, 0.5, 0.5); // Posizione fissa
    score6.tile_geometry.scroll_factor_x = 0; // Blocca lo scorrimento orizzontale
    score6.tile_geometry.scroll_factor_y = 0; // Blocca lo scorrimento verticale

    score7 = PP.assets.image.add(s, img_score7, 350, 60, 0.5, 0.5); // Posizione fissa
    score7.tile_geometry.scroll_factor_x = 0; // Blocca lo scorrimento orizzontale
    score7.tile_geometry.scroll_factor_y = 0; // Blocca lo scorrimento verticale

    score8 = PP.assets.image.add(s, img_score8, 400, 60, 0.5, 0.5); // Posizione fissa
    score8.tile_geometry.scroll_factor_x = 0; // Blocca lo scorrimento orizzontale
    score8.tile_geometry.scroll_factor_y = 0; // Blocca lo scorrimento verticale

    score9 = PP.assets.image.add(s, img_score9, 460, 60, 0.5, 0.5); // Posizione fissa
    score9.tile_geometry.scroll_factor_x = 0; // Blocca lo scorrimento orizzontale
    score9.tile_geometry.scroll_factor_y = 0; // Blocca lo scorrimento verticale

    score10 = PP.assets.image.add(s, img_score10, 520, 60, 0.5, 0.5); // Posizione fissa
    score10.tile_geometry.scroll_factor_x = 0; // Blocca lo scorrimento orizzontale
    score10.tile_geometry.scroll_factor_y = 0; // Blocca lo scorrimento verticale

    score11 = PP.assets.image.add(s, img_score11, 570, 60, 0.5, 0.5); // Posizione fissa
    score11.tile_geometry.scroll_factor_x = 0; // Blocca lo scorrimento orizzontale
    score11.tile_geometry.scroll_factor_y = 0; // Blocca lo scorrimento verticale

    score12 = PP.assets.image.add(s, img_score12, 620, 60, 0.5, 0.5); // Posizione fissa
    score12.tile_geometry.scroll_factor_x = 0; // Blocca lo scorrimento orizzontale
    score12.tile_geometry.scroll_factor_y = 0; // Blocca lo scorrimento verticale

    score13 = PP.assets.image.add(s, img_score13, 670, 60, 0.5, 0.5); // Posizione fissa
    score13.tile_geometry.scroll_factor_x = 0; // Blocca lo scorrimento orizzontale
    score13.tile_geometry.scroll_factor_y = 0; // Blocca lo scorrimento verticale

    score14 = PP.assets.image.add(s, img_score14, 720, 60, 0.5, 0.5); // Posizione fissa
    score14.tile_geometry.scroll_factor_x = 0; // Blocca lo scorrimento orizzontale
    score14.tile_geometry.scroll_factor_y = 0; // Blocca lo scorrimento verticale

    score15 = PP.assets.image.add(s, img_score15, 770, 60, 0.5, 0.5); // Posizione fissa
    score15.tile_geometry.scroll_factor_x = 0; // Blocca lo scorrimento orizzontale
    score15.tile_geometry.scroll_factor_y = 0; // Blocca lo scorrimento verticale

    score16 = PP.assets.image.add(s, img_score16, 820, 60, 0.5, 0.5); // Posizione fissa
    score16.tile_geometry.scroll_factor_x = 0; // Blocca lo scorrimento orizzontale
    score16.tile_geometry.scroll_factor_y = 0; // Blocca lo scorrimento verticale

    score17 = PP.assets.image.add(s, img_score17, 870, 60, 0.5, 0.5); // Posizione fissa
    score17.tile_geometry.scroll_factor_x = 0; // Blocca lo scorrimento orizzontale
    score17.tile_geometry.scroll_factor_y = 0; // Blocca lo scorrimento verticale

    score18 = PP.assets.image.add(s, img_score18, 930, 60, 0.5, 0.5); // Posizione fissa
    score18.tile_geometry.scroll_factor_x = 0; // Blocca lo scorrimento orizzontale
    score18.tile_geometry.scroll_factor_y = 0; // Blocca lo scorrimento verticale

    score19 = PP.assets.image.add(s, img_score19, 980, 60, 0.5, 0.5); // Posizione fissa
    score19.tile_geometry.scroll_factor_x = 0; // Blocca lo scorrimento orizzontale
    score19.tile_geometry.scroll_factor_y = 0; // Blocca lo scorrimento verticale

    score20 = PP.assets.image.add(s, img_score20, 1030, 60, 0.5, 0.5); // Posizione fissa
    score20.tile_geometry.scroll_factor_x = 0; // Blocca lo scorrimento orizzontale
    score20.tile_geometry.scroll_factor_y = 0; // Blocca lo scorrimento verticale

PP.game_state.set_variable("score", 0);

}


function update(s) {

    manage_player_update(s);    
    manage_player_weapon(s);    
    update_platforms(s);              
    update_crabs(s);
    update_latta(s);
    update_plastica(s); //azioni plastica
    update_instruction(s, player);
    update_ostrica (s, player);
    update_crabfriend (s,player);
    update_funfact (s, player)
    update_fairy (s);



    // Aggiorna camera
    //console.log(player.geometry.x);
    if(player.geometry.x < 160) {
        PP.camera.set_follow_offset(s, player.geometry.x-160, 220);
    }
    

    // Aggiorna il punteggio
    let curr_score = PP.game_state.get_variable("score");

}

function destroy(s) {
    console.log("Executing destroy() - oceano");

}

PP.scenes.add("oceano", preload, create, update, destroy );