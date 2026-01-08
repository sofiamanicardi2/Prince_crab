let img_instruction_movement;
let img_instruction_jump;
let img_instruction_arpione;
let img_instruction_interaction;
let img_instruction_raccogli;
let img_instruction_help;
let img_instruction_interaction_granchio;



let instruction_movement;
let instruction_jump;
let instruction_arpione;
let instruction_interaction;
let instruction_interaction2;
let instruction_raccogli;
let instruction_help;
let instruction_interaction_granchio;


let instruction_movement_created = false;
let instruction_jump_created = false;
let instruction_arpione_created = false;
let instruction_interaction_created = false;
let instruction_interaction2_created = false;
let instruction_raccogli_created = false;
let instruction_help_created = false;
let instruction_interaction_granchio_created = false;




function preload_instruction(s) {
    img_instruction_movement = PP.assets.image.load(s, "assets/instruction/instruction_movement.png", 302, 137); 
    img_instruction_jump = PP.assets.image.load (s, "assets/instruction/instruction_jump.png", 116, 125);
    img_instruction_arpione = PP.assets.image.load (s, "assets/instruction/instruction_arpione.png", 152, 125);
    img_instruction_raccogli = PP.assets.image.load (s, "assets/instruction/instruction_raccogli.png", 173, 125);
    img_instruction_interaction = PP.assets.image.load (s, "assets/instruction/instruction_interaction.png", 173, 125);
    img_instruction_help = PP.assets.image.load (s, "assets/instruction/instruction_help.png", 133, 45);



}

function create_instruction(s, player) {
    
}

function update_instruction(s, player) {

    // ISTRUZIONE: MOVIMENTO
    if (player.geometry.x > -500 && player.geometry.x < 200 &&
        player.geometry.y > 1900 && player.geometry.y < 2400) {
        
        if (!instruction_movement_created) {
            instruction_movement = PP.assets.image.add(s, img_instruction_movement, -250, 1660, 0, 0);
            instruction_movement_created = true;
        }
        //console.log ("Create: Movimento");

    } else if ((player.geometry.x < -500 || player.geometry.x > 200 ||
                player.geometry.y > 1900 || player.geometry.y < 2400) && instruction_movement_created){
        PP.assets.destroy(instruction_movement);
        instruction_movement_created = false;
        //console.log ("Destroy: Movimento");
    }

    // ISTRUZIONE: SALTO
    if (player.geometry.x > 200 && player.geometry.x < 500 &&
        player.geometry.y > 1800 && player.geometry.y < 2400) {
        
        if (!instruction_jump_created) {
            instruction_jump = PP.assets.image.add(s, img_instruction_jump, 250, 1660, 0, 0);
            instruction_jump_created = true;
        }
        //console.log ("Create: Salto");

    } else if ((player.geometry.x > 200 || player.geometry.x < 500 ||
                player.geometry.y > 1800 || player.geometry.y < 2500) && instruction_jump_created){
        PP.assets.destroy(instruction_jump);
        instruction_jump_created = false;
        //console.log ("Destroy: Salto");
    }


    // ISTRUZIONE: ATTACCO
    if (player.geometry.x > 1200 && player.geometry.x < 1550 &&
        player.geometry.y > 2300 && player.geometry.y < 2700) {
        
        if (!instruction_arpione_created) {
            instruction_arpione = PP.assets.image.add(s, img_instruction_arpione, 1420, 2230, 0, 0);
            instruction_arpione_created = true;
        }
        //console.log ("Create: Arpione");

    } else if ((player.geometry.x > 900 || player.geometry.x < 1350 ||
                player.geometry.y > 2300 || player.geometry.y < 2700) && instruction_arpione_created){
        PP.assets.destroy(instruction_arpione);
        instruction_arpione_created = false;
        //console.log ("Destroy: Arpione");
    }

    // ISTRUZIONE:  raccogliere plastica
    if (player.geometry.x > 1300 && player.geometry.x < 1800 &&
        player.geometry.y > 2400 && player.geometry.y < 2700) {
        
        if (!instruction_raccogli_created) {
            instruction_raccogli = PP.assets.image.add(s, img_instruction_raccogli, 1680, 2230, 0, 0);
            instruction_raccogli_created = true;
        }
        //console.log ("Create: raccogli");

    } else if ((player.geometry.x > 1300 || player.geometry.x < 1800 ||
               player.geometry.y > 2400 || player.geometry.y < 2700) && instruction_raccogli_created){
        PP.assets.destroy(instruction_raccogli);
        instruction_raccogli_created = false;
        //console.log ("Destroy: raccogli");
    }
    
    // ISTRUZIONE: INTERAZIONE
    if (player.geometry.x > 600 && player.geometry.x < 950 &&
        player.geometry.y > 2300 && player.geometry.y < 2700) {
        
        if (!instruction_interaction_created) {
            instruction_interaction = PP.assets.image.add(s, img_instruction_interaction, 700, 2230, 0, 0);
            instruction_interaction_created = true;
        }
        //console.log ("Create: Arpione");

    } else if ((player.geometry.x > 600 || player.geometry.x < 950 ||
                player.geometry.y > 2300 || player.geometry.y < 2700) && instruction_interaction_created){
        PP.assets.destroy(instruction_interaction);
        instruction_interaction_created = false;
        //console.log ("Destroy: interaction");
    }
        // ISTRUZIONE: INTERAZIONE
        if (player.geometry.x > 7000 && player.geometry.x < 6750 &&
            player.geometry.y > 4250 && player.geometry.y < 4450) {
            
            if (!instruction_interaction2_created) {
                instruction_interaction2 = PP.assets.image.add(s, img_instruction_interaction, 6950, 4350, 0, 0);
                instruction_interaction2_created = true;
            }
            //console.log ("Create: Arpione");
    
        } else if ((player.geometry.x > 600 || player.geometry.x < 950 ||
                    player.geometry.y > 2300 || player.geometry.y < 2700) && instruction_interaction2_created){
            PP.assets.destroy(instruction2_interaction);
            instruction_interaction2_created = false;
            //console.log ("Destroy: interaction");
        }

        // ISTRUZIONE: HELP
        if (player.geometry.x > 1200 && player.geometry.x < 1700 &&
            player.geometry.y > 1400 && player.geometry.y < 2200) {
            
            if (!instruction_help_created) {
                instruction_help = PP.assets.image.add(s, img_instruction_help, 1390, 1610, 0, 0);
                instruction_help_created = true;
            }
    
        } else if ((player.geometry.x > 1200 || player.geometry.x < 1700 ||
                    player.geometry.y > 1400 || player.geometry.y < 2200) && instruction_help_created){
            PP.assets.destroy(instruction_help);
            instruction_help_created = false;
        }


        // ISTRUZIONE: INTERAZIONE GRANCHIO FINALE
        if (player.geometry.x > 6800 && player.geometry.x < 6940 &&
            player.geometry.y > 4000 && player.geometry.y < 6000) {
            
            if (!instruction_interaction_granchio_created) {
                instruction_interaction_granchio = PP.assets.image.add(s, img_instruction_interaction, 6820, 4200, 0, 0);
                instruction_interaction_granchio_created = true;
            }
    
        } else if ((player.geometry.x > 6800 || player.geometry.x < 6940 ||
                    player.geometry.y > 4000 || player.geometry.y < 6000) && instruction_interaction_granchio_created){
            PP.assets.destroy(instruction_interaction_granchio);
            instruction_interaction_granchio_created = false;
        }



}