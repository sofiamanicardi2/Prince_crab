//piattaforma rocciosa fissa aaaa
let img_platform;

//piattaforma rocciosa fissa lunga
let img_platform_lunga;

//piattaforma con le alghe
let img_platform_alga_morta;

//piattaforma medusa in movimento
let img_platform_medusa;
let platform_medusa;

//piattaforma medusa fissa
let img_platform_medusa_fissa;
let platform_medusa_fissa;

//piattaforma spazzatura fissa
let img_piattaforma_spazzatura_fissa;
let img_piattaforma_spazzatura_fissa1;
let img_piattaforma_spazzatura_fissa2;

//piattaforma mobile
let img_piattaforma_mobile_granchio;
let piattaforma_granchio1;
let piattaforma_granchio2;
let piattaforma_granchio3;

let platform_alga_1; 
let platform_alga_2;
let platform_alga_3; 



function preload_platforms(s) {

    img_platform   = PP.assets.image.load(s, "assets/images/piattaformaclassica.png");


    img_platform_lunga   = PP.assets.image.load(s, "assets/images/piattaformalunga.png");
    

   img_platform_alga_morta = PP.assets.image.load(s, "assets/images/algamortapiattaforma.png", 217, 244);

    img_platform_medusa = PP.assets.sprite.load_spritesheet(s, "assets/images/piattaforma_medusa_sostitutiva.png", 94, 163 );
    

    img_platform_medusa_fissa = PP.assets.sprite.load_spritesheet(s, "assets/images/piattaforma_medusa_2.png", 95, 159 );


    img_piattaforma_mobile_granchio = PP.assets.image.load(s, "assets/images/piattdefgran.png");


    img_piattaforma_spazzatura_fissa = PP.assets.image.load(s, "assets/images/plastica_fissa_1.png");
    img_piattaforma_spazzatura_fissa1 = PP.assets.image.load(s, "assets/images/plastica_fissa_2.png");
    img_piattaforma_spazzatura_fissa2 = PP.assets.image.load(s, "assets/images/plastica_fissa_3.png");
}

function collision_platform(s, player, platform) {
    if( player.geometry.x >= platform.geometry.x &&
        player.geometry.x <= platform.geometry.x + platform.geometry.display_width) {
            player.is_on_platform = true;
    }
}

function create_platform(s, x, y) {
    let platform = PP.assets.image.add(s, img_platform, x, y, 0, 0);
    PP.physics.add(s, platform, PP.physics.type.STATIC);

    PP.physics.add_collider_f(s, player, platform, collision_platform);

   
    let colliderWidth = 140;  
    let colliderHeight = 25;  

  
    let offsetX = (130 - colliderWidth) / 2 + 15; 
    let offsetY = (30 - colliderHeight) / 2 - 3;  

    PP.physics.set_collision_rectangle(platform, colliderWidth, colliderHeight, offsetX, offsetY);

    return platform;
}


function create_platform_lunga (s,x,y) {
    let platform = PP.assets.image.add(s, img_platform_lunga, x, y, 0, 0);
    PP.physics.add(s, platform, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform, collision_platform);
    return platform;
} 

function create_platform_alga (s,x,y) {
    let platform = PP.assets.image.add(s, img_platform_alga_morta, x, y, 0, 0);
    PP.physics.add(s, platform, PP.physics.type.STATIC); 

    PP.physics.add_collider_f(s, player, platform, collision_platform);

    PP.physics.set_collision_rectangle(platform, 140, 20, 20, 20);

    return platform;
} 

function activate_platform(s, player, platform) {
    if (!platform.is_active) {

        PP.assets.destroy(platform);

        let new_platform = PP.assets.image.add(
            s,
            platform.active_img,
            platform.geometry.x,
            platform.geometry.y, 
            0,
            0
        );

        console.log("New Platform Position No Physics:", new_platform.geometry.x, new_platform.geometry.y);

        new_platform.active_img = platform.active_img;
        new_platform.inactive_img = platform.inactive_img;
        new_platform.is_active = true;

        PP.physics.add(s, new_platform, PP.physics.type.STATIC);
        PP.physics.add_collider_f(s, player, new_platform, collision_platform);

        console.log("New Platform Position After Physics:", new_platform.geometry.body_x, new_platform.geometry.body_y);


        platform = new_platform;
    }
}


function create_platform_medusa (s,x,y) {
    let platform = PP.assets.sprite.add(s, img_platform_medusa, x, y, 0, 0);
    PP.assets.sprite.animation_add_list (platform, "move", [0, 1 , 2, 3, 4, 5], 5, -1);
    PP.assets.sprite.animation_play(platform, "move");

    let colliderWidth = 140;  
    let colliderHeight = 25;  

  
    let offsetX = (130 - colliderWidth) / 2 + 15; 
    let offsetY = (30 - colliderHeight) / 2 - 3;  

    PP.physics.set_collision_rectangle(platform, colliderWidth, colliderHeight, offsetX, offsetY);

    return platform;
}


function create_platform_medusa_2 (s,x,y) {
    let platform = PP.assets.sprite.add(s, img_platform_medusa_fissa, x, y, 0, 0);
    PP.assets.sprite.animation_add_list (platform, "move", [0, 1 , 2, 3, 4, 5], 5, -1);
    PP.assets.sprite.animation_play(platform, "move");

    PP.physics.add(s, platform, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform, collision_platform);
    
    PP.physics.set_collision_rectangle(platform, 55, 10, 25, 2); 

    return platform;
}

function create_piattaforma_granchio (s, x, y) {

    let piattaforma_granchio = PP.assets.image.add(s, img_piattaforma_mobile_granchio, x, y, 0, 0);
    

    PP.physics.add(s, piattaforma_granchio, PP.physics.type.DYNAMIC); 
    

    PP.physics.set_immovable(piattaforma_granchio, true);
  
    PP.physics.set_allow_gravity(piattaforma_granchio, false);    
    

    PP.physics.add_collider_f(s, player, piattaforma_granchio, collision_platform);


    PP.physics.set_velocity_x(piattaforma_granchio,160);

 
    PP.physics.set_collision_rectangle(piattaforma_granchio, 85, 20, 40, 0); 

    return piattaforma_granchio;
}

function create_piattaforma_spazzatura (s, x, y) {
    let platform = PP.assets.image.add(s, img_piattaforma_spazzatura_fissa, x, y, 0, 0);
    PP.physics.add(s, platform, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform, collision_platform);
    

    PP.physics.set_collision_rectangle(platform, 20, 1, 25, 0);  
    
    return platform;
}

function create_piattaforma_spazzatura1 (s, x, y) {
    let platform = PP.assets.image.add(s, img_piattaforma_spazzatura_fissa1, x, y, 0, 0);
    PP.physics.add(s, platform, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform, collision_platform);
    

    PP.physics.set_collision_rectangle(platform, 20, 1, 20, 0);  
    
    return platform;
}

function create_piattaforma_spazzatura2 (s, x, y) {
    let platform = PP.assets.image.add(s, img_piattaforma_spazzatura_fissa2, x, y, 0, 0);
    PP.physics.add(s, platform, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform, collision_platform);
  
    PP.physics.set_collision_rectangle(platform, 20, 1, 20, 0);  
    
    return platform;
}

function create_piattaforma_spazzatura3 (s, x, y) {
    let platform = PP.assets.image.add(s, img_piattaforma_spazzatura_fissa, x, y, 0, 0);
    PP.physics.add(s, platform, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform, collision_platform);

    PP.physics.set_collision_rectangle(platform, 20, 1, 25, 0);  
    
    return platform;
}

function create_piattaforma_spazzatura4 (s, x, y) {
    let platform = PP.assets.image.add(s, img_piattaforma_spazzatura_fissa1, x, y, 0, 0);
    PP.physics.add(s, platform, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform, collision_platform);
    

    PP.physics.set_collision_rectangle(platform, 20, 1, 20, 0); 
    
    return platform;
}

function create_piattaforma_spazzatura5 (s, x, y) {
    let platform = PP.assets.image.add(s, img_piattaforma_spazzatura_fissa2, x, y, 0, 0);
    PP.physics.add(s, platform, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform, collision_platform);
    
  
    PP.physics.set_collision_rectangle(platform, 20, 1, 20, 0);  
    
    return platform;
}






function create_platforms(s) {

    //PIATTAFORME ROCCIOSE FISSE

    // Piattaforma 1
    let platform_1 = create_platform(s, 560, 2070);

    // Piattaforma 3
    let platform_4 = create_platform(s, 400, 2270);

    // Piattaforma 4
    //let platform_4 = create_platform(s, 1450, 1950);
   
    // Piattaforma 5
    let platform_5 = create_platform(s, 1000, 2390);

    let platform_3 = create_platform(s, 1200, 2280);


    let platform_7 = create_platform(s, 1710, 1950);

    // Piattaforma 6
    //let platform_6 = create_platform(s, 1250, 2060);

    // Piattaforma 9
    let platform_2 = create_platform(s, 1400, 2170);

    // Piattaforma 18
    //let platform_18 = create_platform(s, 1260, 1900);

    // Piattaforma 7
    //let platform_7 = create_platform(s, 1500, 1840);

    // Piattaforma 8
    let platform_8 = create_platform(s, 1260, 1730);

    //piattaforma 9
    let platform_9 = create_platform(s, 2500, 3400);

    //piattaforma 10
    let platform_10 = create_platform(s, 2080, 3470);

    //piattaforma 11(fossa di lava)
    let platform_11 = create_platform(s, 2440, 2420);
    
    //piattaforma 12 un po lunga (la seconda sopra lattina)
    let platform_12 = create_platform(s, 4500, 1235);

    //piattaforma 13 (la prima sopra lattina)
    let platform_13 = create_platform(s, 4300, 1335);

    //piattaforma 14
    let platform_14 = create_platform(s, 3580, 1500);

    //piattaforma 15
    //let platform_15 = create_platform(s, 4880, 1555);

     //piattaforma 16
     let platform_16 = create_platform(s, 5200, 1665);

     //piattaforma 17
     let platform_17 = create_platform(s, 5520, 1775);
 
     //piattaforma 18
     //let platform_18 = create_platform(s, 7900, 1900);
 
     //piattaforma 19
     //let platform_19 = create_platform(s, 7900, 2205);
     
     //piattaforma 20
     //let platform_20 = create_platform(s, 7900, 2465); 

    //piattaforma 30
    //let platform_33 = create_platform(s, 8170, 1900);


    //piattaforma 32
    //let platform_32 = create_platform(s, 7900, 2100);

    //piattaforma 31
    //let platform_31 = create_platform(s, 8170, 2200);

    //piattaforma 30
    //let platform_30 = create_platform(s, 7900, 2300);

    //piattaforma 29
    //let platform_29 = create_platform(s, 8200, 2400);
    
    //piattaforma 21
    //let platform_21 = create_platform(s, 8200, 2580);    

    //piattaforma 22(lontanaaa in alto)
    let platform_22 = create_platform(s, 8940, 1360);

    //piattaforma 23 (molto in basso)
    let platform_23 = create_platform(s, 7540, 3920);

    //piattaforma 24
    let platform_24 = create_platform(s, 7840, 4030);

    //piattaforma 25
    let platform_25 = create_platform(s, 7600, 4140);

    //piattaforma 25
    let platform_26 = create_platform(s, 7830, 4250);

    //piattaforma 25
    let platform_27 = create_platform(s, 8100, 4360);

    //piattaforma 28
    let platform_28 = create_platform(s, 9000, 2550);

    //piattaforma 35  con la ciabatta verso la fine medusa mobile in salita
    let platform_35 = create_platform(s, 8940, 1990);


    //piattaforma 34
    let platform_34 = create_platform(s, 3120, 3340);

    //piattaforma 36 dove ci sono le due mobili 
    let platform_36 = create_platform(s, 8170, 2560);


// PIATTAFORME ALGA

let platform_alga_1 = create_platform_alga (s, 8110, 1530);
let platform_alga_2 = create_platform_alga (s, 7910, 1640);
let platform_alga_3 = create_platform_alga (s, 7700, 1730);


    


//PIATTAFORME MEDUSA FISSA

    //piattaforma 2
    let platform_medusa_2 =create_platform_medusa_2(s, 1975, 1870);

    let platform_medusa_3 =create_platform_medusa_2(s, 4970, 1555); 





    //PIATTAFORME SPAZZATURA FISSA

    //piattaforma 1
    piattaforma_spazzatura = create_piattaforma_spazzatura(s, 6050, 1850);

    //piattaforma 2
    piattaforma_spazzatura_2 = create_piattaforma_spazzatura1(s, 6300, 1850);

    //piattaforma 3
    piattaforma_spazzatura_3 = create_piattaforma_spazzatura2(s, 6550, 1850);

    //piattaforma 4
    piattaforma_spazzatura_4 = create_piattaforma_spazzatura(s, 9390, 4450);

    //piattaforma 5
    piattaforma_spazzatura_5 = create_piattaforma_spazzatura1(s, 9630, 4450);

    //piattaforma 6
    piattaforma_spazzatura_6 = create_piattaforma_spazzatura2(s, 9870, 4450);

    //PIATTAFORMA MEDUSA MOBILE

    piattaforma_medusamobile2 = PP.assets.image.add(s, img_platform, 3327, 2400, 0, 0);
    PP.physics.add(s, piattaforma_medusamobile2, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable( piattaforma_medusamobile2, true);
    PP.physics.set_allow_gravity( piattaforma_medusamobile2, false);    
    PP.physics.add_collider_f(s, player,  piattaforma_medusamobile2, collision_platform);
    PP.physics.set_velocity_y( piattaforma_medusamobile2, 200);
    PP.physics.set_collision_rectangle(piattaforma_medusamobile2, 140, 25, 12, 0);


    piattaforma_medusamobile3 = PP.assets.sprite.add(s, img_platform_medusa, 2405, 1610, 0, 0);
    PP.assets.sprite.animation_add_list(piattaforma_medusamobile3, "move", [0, 1, 2, 3, 4, 5], 6, -1);
    PP.assets.sprite.animation_play(piattaforma_medusamobile3, "move");    
    PP.physics.add(s, piattaforma_medusamobile3, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable( piattaforma_medusamobile3, true);
    PP.physics.set_allow_gravity( piattaforma_medusamobile3, false);    
    PP.physics.add_collider_f(s, player,  piattaforma_medusamobile3, collision_platform);
    PP.physics.set_velocity_y( piattaforma_medusamobile3, 200);
    PP.physics.set_collision_rectangle(piattaforma_medusamobile3, 40, 10, 22, 2);


    piattaforma_medusamobile4 = PP.assets.sprite.add(s, img_platform_medusa, 2190, 1790, 0, 0);
    PP.assets.sprite.animation_add_list(piattaforma_medusamobile4, "move", [0, 1, 2, 3, 4, 5], 6, -1);
    PP.assets.sprite.animation_play(piattaforma_medusamobile4, "move");    
    PP.physics.add(s, piattaforma_medusamobile4, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable( piattaforma_medusamobile4, true);
    PP.physics.set_allow_gravity( piattaforma_medusamobile4, false);    
    PP.physics.add_collider_f(s, player,  piattaforma_medusamobile4, collision_platform);
    PP.physics.set_velocity_y( piattaforma_medusamobile4, 200);
    PP.physics.set_collision_rectangle(piattaforma_medusamobile4, 60, 150, 12, 2);

    piattaforma_medusamobile5 = PP.assets.sprite.add(s, img_platform_medusa, 9220, 1160, 0, 0);
    PP.assets.sprite.animation_add_list(piattaforma_medusamobile5, "move", [0, 1, 2, 3, 4, 5], 6, -1);
    PP.assets.sprite.animation_play(piattaforma_medusamobile5, "move");    
    PP.physics.add(s, piattaforma_medusamobile5, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable( piattaforma_medusamobile5, true);
    PP.physics.set_allow_gravity( piattaforma_medusamobile5, false);    
    PP.physics.add_collider_f(s, player,  piattaforma_medusamobile5, collision_platform);
    PP.physics.set_velocity_y( piattaforma_medusamobile5, 200);
    PP.physics.set_collision_rectangle(piattaforma_medusamobile5, 40, 10, 22, 2);

    piattaforma_medusamobile6 = PP.assets.sprite.add(s, img_platform_medusa, 1570, 2290, 0, 0);
    PP.assets.sprite.animation_add_list(piattaforma_medusamobile6, "move", [0, 1, 2, 3, 4, 5], 6, -1);
    PP.assets.sprite.animation_play(piattaforma_medusamobile6, "move");    
    PP.physics.add(s, piattaforma_medusamobile6, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable( piattaforma_medusamobile6, true);
    PP.physics.set_allow_gravity( piattaforma_medusamobile6, false);    
    PP.physics.add_collider_f(s, player,  piattaforma_medusamobile6, collision_platform);
    PP.physics.set_velocity_y( piattaforma_medusamobile6, 200);
    PP.physics.set_collision_rectangle(piattaforma_medusamobile6, 60, 150, 12, 2);

    piattaforma_medusamobile7 = PP.assets.image.add(s, img_platform, 8170, 1800, 0, 0);
    PP.physics.add(s, piattaforma_medusamobile7, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable( piattaforma_medusamobile7, true);
    PP.physics.set_allow_gravity( piattaforma_medusamobile7, false);    
    PP.physics.add_collider_f(s, player,  piattaforma_medusamobile7, collision_platform);
    PP.physics.set_velocity_y( piattaforma_medusamobile7, 200);
    PP.physics.set_collision_rectangle(piattaforma_medusamobile7, 140, 25, 12, 0);

    piattaforma_medusamobile8 = PP.assets.image.add(s, img_platform, 7900, 1800, 0, 0);
    PP.physics.add(s, piattaforma_medusamobile8, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable( piattaforma_medusamobile8, true);
    PP.physics.set_allow_gravity( piattaforma_medusamobile8, false);    
    PP.physics.add_collider_f(s, player,  piattaforma_medusamobile8, collision_platform);
    PP.physics.set_velocity_y( piattaforma_medusamobile8, 200);
    PP.physics.set_collision_rectangle(piattaforma_medusamobile8, 140, 25, 12, 0);

}

function update_platforms(s) {

    let curr_score = PP.game_state.get_variable("score");

    if (curr_score > 7 && !piattaforma_granchio1) {
        PP.assets.destroy(piattaforma_spazzatura);
        PP.assets.destroy(piattaforma_spazzatura_2);
        PP.assets.destroy(piattaforma_spazzatura_3);
        piattaforma_granchio1 = create_piattaforma_granchio(s, 5900, 1820);
        !piattaforma_granchio1 === true; 
    }

    // Se la piattaforma esiste
    if (piattaforma_granchio1) {
        if (piattaforma_granchio1.geometry.x >= 6630) {
            PP.physics.set_velocity_x(piattaforma_granchio1, -200); // si muove al contrario
        } else if (piattaforma_granchio1.geometry.x <= 5800) {
            PP.physics.set_velocity_x(piattaforma_granchio1, 200); // si muove in avanti
        }
    }


    if (curr_score > 15 && !piattaforma_granchio2) {
        piattaforma_granchio2 = create_piattaforma_granchio(s, 7580, 4435);
        !piattaforma_granchio2 === true; 

    }

    if(piattaforma_granchio2) {
        if (piattaforma_granchio2.geometry.x >= 8190) {
        PP.physics.set_velocity_x(piattaforma_granchio2, -200); //si muove al contrario
    }
    else if(piattaforma_granchio2.geometry.x <= 7580) {
        PP.physics.set_velocity_x(piattaforma_granchio2, 200);
        }
    }

    if (curr_score > 13 && !piattaforma_granchio3) {
        PP.assets.destroy(piattaforma_spazzatura_4);
        PP.assets.destroy(piattaforma_spazzatura_5);
        PP.assets.destroy(piattaforma_spazzatura_6);
        piattaforma_granchio3 = create_piattaforma_granchio(s, 9320, 4435);
        !piattaforma_granchio3 === true; 

    }

    if(piattaforma_granchio3) {
    if(piattaforma_granchio3.geometry.x >= 9930) {
        PP.physics.set_velocity_x(piattaforma_granchio3, -250); //si muove al contrario
    }
    else if(piattaforma_granchio3.geometry.x <= 9320) {
        PP.physics.set_velocity_x(piattaforma_granchio3, 250);
        }
    }

    if(piattaforma_medusamobile2.geometry.y >= 3260) {
        PP.physics.set_velocity_y(piattaforma_medusamobile2, -250); //si muove al contrario
    }
    else if(piattaforma_medusamobile2.geometry.y <= 2370) {
        PP.physics.set_velocity_y(piattaforma_medusamobile2, 250);
    }

    if(piattaforma_medusamobile3.geometry.y >= 2270) {
        PP.physics.set_velocity_y(piattaforma_medusamobile3, -250); //si muove al contrario
    }
    else if(piattaforma_medusamobile3.geometry.y <= 1610) {
        PP.physics.set_velocity_y(piattaforma_medusamobile3, 250);
    }

    if(piattaforma_medusamobile4.geometry.y >= 2100) {
        PP.physics.set_velocity_y(piattaforma_medusamobile4, -250); //si muove al contrario
    }
    else if(piattaforma_medusamobile4.geometry.y <= 1790) {
        PP.physics.set_velocity_y(piattaforma_medusamobile4, 250);
    }

    if(piattaforma_medusamobile5.geometry.y >= 2530) {
        PP.physics.set_velocity_y(piattaforma_medusamobile5, -250); //si muove al contrario
    }
    else if(piattaforma_medusamobile5.geometry.y <= 1160) {
        PP.physics.set_velocity_y(piattaforma_medusamobile5, 250);
    }

    if(piattaforma_medusamobile6.geometry.y >= 2150) {
        PP.physics.set_velocity_y(piattaforma_medusamobile6, -250); //si muove al contrario
    }
    else if(piattaforma_medusamobile6.geometry.y <= 1700) {
        PP.physics.set_velocity_y(piattaforma_medusamobile6, 250);
    }

    if(piattaforma_medusamobile7.geometry.y >= 2350) {
        PP.physics.set_velocity_y(piattaforma_medusamobile7, -200); //si muove al contrario
    }
    else if(piattaforma_medusamobile7.geometry.y <= 1800) {
        PP.physics.set_velocity_y(piattaforma_medusamobile7, 200);
    }

    if(piattaforma_medusamobile8.geometry.y >= 2500) {
        PP.physics.set_velocity_y(piattaforma_medusamobile8, -250); //si muove al contrario
    }
    else if(piattaforma_medusamobile8.geometry.y <= 1900) {
        PP.physics.set_velocity_y(piattaforma_medusamobile8, 250); 
    }

    
}