let bubble1_created = false;
let bubble2_created = false;
let bubble3_created = false;
let bubble4_created = false;

let bubble_created = false;
let txt_bubble_created = false;



function preload_funfact(s) {
img_funfact1 = PP.assets.image.load (s, "assets/funfact/ostrica1.png", 79, 78);


img_bubble1 = PP.assets.image.load (s, "assets/funfact/bubble1.png", 355, 143);
img_bubble2 = PP.assets.image.load (s, "assets/funfact/bubble2.png", 355, 124);
img_bubble3 = PP.assets.image.load (s, "assets/funfact/bubble3.png", 313, 124);
img_bubble4 = PP.assets.image.load (s, "assets/funfact/bubble4.png", 377, 161);





}

function create_funfact(s, player) {
    funfact1 = PP.assets.image.add(s, img_funfact1, 2920, 3365, 0, 0);
    funfact2 = PP.assets.image.add(s, img_funfact1, 7200, 1775, 0, 0);
    funfact3 = PP.assets.image.add(s, img_funfact1, 9770, 1590, 0, 0);
    funfact4 = PP.assets.image.add(s, img_funfact1, 8725, 4390, 0, 0);

}


function update_funfact(s, player) {
// INTERAZIONE CON BUBBLE CHE COMPARE 1

    if (player.geometry.x > 2920 && player.geometry.x < 3040 &&
        player.geometry.y > 3115 && player.geometry.y < 3600) {
        

        if (!bubble1_created) {
            bubble = PP.assets.image.add(s, img_bubble1, 2990, 3245, 0, 0);
            bubble1_created = true;
        }
    }

    else if ((player.geometry.x > 2920 || player.geometry.x < 3040 ||
        player.geometry.y > 3115 || player.geometry.y < 3600) && bubble1_created){
        PP.assets.destroy(bubble);
        bubble1_created = false;
    } 


    
// INTERAZIONE CON BUBBLE CHE COMPARE 2

    if (player.geometry.x > 7200 && player.geometry.x < 7320 &&
        player.geometry.y > 1500 && player.geometry.y < 2000) {

        if (!bubble2_created) {
            bubble = PP.assets.image.add(s, img_bubble4, 7270, 1650, 0, 0);
            bubble2_created = true;
        }
    }

    else if ((player.geometry.x > 7200 || player.geometry.x < 7320 ||
        player.geometry.y > 1500 || player.geometry.y < 2000) && bubble2_created){
        PP.assets.destroy(bubble);
        bubble2_created = false;
    }  


    
// INTERAZIONE CON BUBBLE CHE COMPARE 3

    if (player.geometry.x > 9770 && player.geometry.x < 9890 &&
        player.geometry.y > 1340 && player.geometry.y < 1800) {
        

        if (!bubble3_created) {
            bubble = PP.assets.image.add(s, img_bubble2, 9840, 1480, 0, 0);
            bubble3_created = true;
        }
    }

    else if ((player.geometry.x > 9770 || player.geometry.x < 9890 ||
        player.geometry.y > 1340 || player.geometry.y < 1800) && bubble3_created){
        PP.assets.destroy(bubble);
        bubble3_created = false;
    }   



// INTERAZIONE CON BUBBLE CHE COMPARE 4

    if (player.geometry.x > 8720 && player.geometry.x < 8825 &&
        player.geometry.y > 4300 && player.geometry.y < 4800) {
        

        if (!bubble4_created) {
            bubble = PP.assets.image.add(s, img_bubble3, 8420, 4290, 0, 0);
            bubble4_created = true;
        }
    }
    else if ((player.geometry.x > 8720 || player.geometry.x < 8825 ||
        player.geometry.y > 4300 || player.geometry.y < 4800) && bubble4_created){
        PP.assets.destroy(bubble);
        bubble4_created = false;
    }   

}

