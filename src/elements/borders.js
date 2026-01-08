function collision_floor(s, player, floor) {
    verifica_floor = true;
}

function create_wall (s,x,y,c) {
    let wall = PP.shapes.rectangle_add(s, x, y, 1, c, "0x00ff12", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
    return wall;

} 

function create_ceiling (s,x,y,c) {
    let ceiling = PP.shapes.rectangle_add(s, x, y, c, 1, "0xFF00FF", 0);
    PP.physics.add(s, ceiling, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, ceiling);
    return ceiling;
}

function create_floor (s, x, y, c){
    let floor = PP.shapes.rectangle_add(s, x, y, c, 1, "0xFF0000", 0);
    PP.physics.add(s, floor, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, floor);
    return floor;
}

function hit_player(s, floor, player){
    goto_gameover(s);
}

function create_floordeath (s, x, y, c){
    let floor = PP.shapes.rectangle_add(s, x, y, c, 1, "0xFF0000", 0);
    PP.physics.add(s, floor, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, floor, player, hit_player);
    PP.physics.add_collider(s, player, floor);
    return floor;
}

function create_structure(s, player) {
    
    //MURI
    wall0 = create_wall(s, -480, 1000, 4000)
    wall1 = create_wall(s, -250, 805, 1540);
    wall2 = create_wall(s, 755, 1800, 460);
    wall16 = create_wall(s, 330, 2238, 540);
    wall3 = create_wall(s, 1260, 1310, 1440);
    wall4 = create_wall(s, 2635, 1860, 500);
    wall9 = create_wall(s, 1975, 2548, 85);
    wall10 = create_wall(s, 2625, 2465, 274);
    wall5 = create_wall(s, 3290, 2040, 142);
    wall6 = create_wall(s, 3850, 2230, 480);
    wall7 = create_wall(s, 3280, 2710, 750);
    wall8 = create_wall(s, 3540, 2955, 970);
    wall12 = create_wall(s, 2775, 3526, 168);
    // non serve più wall12pt2 = create_wall(s, 2775, 3140, 168);
    wall11 = create_wall(s, 1980, 3320, 478);
    wall15 = create_wall(s, 3760, 1535, 172);
    wall13 = create_wall(s, 4848, 1667, 440);
    wall13pt2 = create_wall(s, 5825, 1910, 60);
    wall13pt3 = create_wall(s, 6760, 1890, 80);
    wall14 = create_wall(s, 7480, 980, 765);
    wall15 = create_wall(s, 8630, 1270, 465);
    wall16 = create_wall(s, 8140, 1210, 310);
    wall17 = create_wall(s, 8350, 1780, 580);
    wall18 = create_wall(s, 7885, 2080, 460);
    wall19 = create_wall(s, 7750, 2390, 150);
    wall20 = create_wall(s, 8490, 2130, 150);
    wall21 = create_wall(s, 7890, 2565, 200);
    wall22 = create_wall(s, 8350, 2223, 50);
    wall23 = create_wall(s,  9457, 2170, 1000);
    wall24 = create_wall(s,  8940, 1415, 1660);
    wall25 = create_wall(s, 10460, 2180, 1020);
    wall27 = create_wall(s, 10170, 2800, 210);
    wall28 = create_wall(s, 10470, 3447, 1100);
    wall26 = create_wall(s, 11010, 2510, 5000);
    wall29 = create_wall(s, 10045, 4507, 70);
    wall30 = create_wall(s, 9270, 4507, 70);
    wall31 = create_wall(s, 8310, 4507, 70);
    wall32 = create_wall(s, 7545, 4493, 80);
    wall33 = create_wall(s, 7590, 3790, 440);
    wall34 = create_wall(s, 8000, 3780, 440);
    wall35 = create_wall(s, 6820, 3845, 330);
    wall36 = create_wall(s, 4850, 4200, 1100);
    wall37 = create_wall(s, 5550, 4200, 300);


   //SOFFITTI
   ceiling1 = create_ceiling (s, 260, 1580, 1021);
   ceiling2 = create_ceiling (s, 1007, 2035, 505);
   ceiling3 = create_ceiling (s, 2963, 2110, 655);
   ceiling4 = create_ceiling (s, 3570, 1995, 560);
   // non serve più ceiling5 = create_ceiling (s, 3028, 3225, 505);
   ceiling6 = create_ceiling (s, 2380, 3090, 1800);
   ceiling7 = create_ceiling (s, 4360, 610, 6259);
   ceiling8 = create_ceiling (s, 7810, 1365, 660);
   ceiling9 = create_ceiling (s, 8400, 1060, 600);
   ceiling10 = create_floor (s, 7815, 2313, 140);
   ceiling11 = create_floor (s, 8420, 2070, 140);
   ceiling12 = create_floor (s, 8645, 2247, 590);
   ceiling13 = create_floor (s, 9980, 610, 2100);
   ceiling14 = create_floor (s, 10310, 2695, 300);
   ceiling15 = create_floor (s, 9205, 4005, 2400);
   ceiling16 = create_floor (s, 7795, 3580, 400);
   ceiling17 = create_floor (s, 7205, 4010, 770);
   ceiling18 = create_floor (s, 5800, 3700, 2100);
   ceilingtubo1 = create_floor (s, 10617, 1946, 315);
   ceilingtubo2 = create_floor (s, 10920, 2363, 200);
   ceilingtubo3 = create_floor (s, 10650, 2955, 363);
   ceilingtubo4 = create_floor (s, 10880, 3577, 236);



   //PAVIMENTI
   floor1 = create_floor (s, -80, 1967, 825);
   floor2 = create_floor (s, 1150, 2505, 1650);
   floorX = create_floordeath (s, 2300, 2640, 650);
   floor3 = create_floor (s, 2952, 2330, 655);
   floor4 = create_floor (s, 3697, 2470, 314); //
   floor5 = create_floor (s, 3160, 3442, 760); 
   floorY = create_floordeath (s, 2380, 3620, 800);  
   floor6 = create_floor(s, 3200, 1611, 1130);
   floor7 = create_floor (s, 4304, 1446, 1087);
   floor8 = create_floor (s, 5335, 1880, 980);
   floorZ = create_floordeath (s, 6290, 2030, 940);
   floor9 = create_floor (s, 7320, 1850, 1120);
   floor10 = create_floor (s, 8490, 1490, 280);
   floor11 = create_floor (s, 7820, 2463, 140);
   floor12 = create_floor (s, 8420, 2197, 140);
   floor13 = create_floor (s, 8700, 2666, 1630);
   floor14 = create_floor (s, 9960, 1670, 1000);
   floor15 = create_floor (s, 10320, 2895, 300);
   floor16 = create_floor (s, 10530, 4472, 970);
   floorJ = create_floordeath (s, 9660, 4642, 780);
   floor17 = create_floor (s, 8790, 4470, 960);
   floorK = create_floordeath (s, 7930, 4632, 770);
   floor18 = create_floor (s, 7175, 4452, 740);
   floor19 = create_floor (s, 5800, 4500, 2100);
   floortubo = create_floor (s, -400, 1882, 295);
   floortubo1 = create_floor (s, 10617, 2023, 315);
   floortubo2 = create_floor (s, 10920, 2470, 200);
   floortubo3 = create_floor (s, 10650, 3055, 363);
   floortubo4 = create_floor (s, 10880, 3677, 236);

}


