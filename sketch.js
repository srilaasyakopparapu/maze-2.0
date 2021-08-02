var w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16, w17, w18, w19, w20
var w21, w22, w23, w24, w25, w26, w27, w28, w29, w30, w31, w32, w33, w34, w35, w36, w37, w38, w39
var w40, w41, w42, w43, w44, w45, w46, w47, w48, w49, w50, w51, w52, w53, w54, w55, w56, w57, w58
var coinImg, doorImg, keyImg, opendoorImg, boyImage, boy, boyImage2
var key1, door1
var wallGroup, keyGroup
function preload(){
boyImage = loadAnimation("images/boy2.png","images/boy5.png", "images/boy10.png", "images/boy15.png", "images/boy20.png", "images/boy25.png" )
boyImage2 = loadAnimation("images/boy2l.png","images/boy5l.png", "images/boy10l.png")
doorImg = loadImage("images/door.png")
keyImg = loadImage("images/key.png")
opendoorImg = loadImage("images/opendoor.png")
}
function setup() {
  createCanvas(800, 700);
  w1 = createSprite(800, 630, 150, 2);
  w2 = createSprite(720, 580, 2, 100);
  //w3 = createSprite(695, 555, 50, 2);
  w4 = createSprite(755, 570, 2, 80);
  w5 = createSprite(800, 650, 60, 2);
  w6 = createSprite(670, 667, 2, 40);
  w7 = createSprite(610, 667, 2, 40);
  w8 = createSprite(646, 600, 54, 2);
  w9 = createSprite(620, 473, 2, 250);
  w10 = createSprite(646, 520, 54, 2);
  w11 = createSprite(646, 480, 54, 2);
  w12 = createSprite(670, 394, 2, 170);
  w13 = createSprite(695, 440, 44, 2);
  w14 = createSprite(715, 400, 2, 130);
  w15 = createSprite(737, 467, 44, 2);
  w16 = createSprite(757, 444, 2, 45);
  w17 = createSprite(780, 420, 45, 2);
  w18 = createSprite(740, 380, 45, 2);
  w19 = createSprite(760, 356, 2, 45);
  w20 = createSprite(740, 290, 45, 2);
  w21 = createSprite(718, 250, 2, 80);
  w22 = createSprite(720, 255, 130, 2);
  w23 = createSprite(755, 234, 2, 45);
  w24 = createSprite(674, 210, 90, 2);
  w25 = createSprite(675, 187, 2, 45);
  w26 = createSprite(630, 230, 2, 130);
  w27 = createSprite(610, 297, 45, 2);
  w28 = createSprite(610, 250, 45, 2);
  w29 = createSprite(590, 190, 2, 120);
  w30 = createSprite(580, 130, 130, 2);
  w31 = createSprite(600, 110, 2, 40);
  w32 = createSprite(518, 90, 170, 2);
  w33 = createSprite(480, 108, 2, 40);
  w34 = createSprite(790, 100, 30, 2);
  w35 = createSprite(775, 140, 2, 80);
  w36 = createSprite(755, 180, 45, 2);
  w37 = createSprite(730, 158, 2, 45);
  w38 = createSprite(700, 38, 2, 40);
  w39 = createSprite(720, 57, 40, 2);
  w40 = createSprite(700, 90, 100, 2);
  w41 = createSprite(500, 670, 2, 44);
  w42 = createSprite(520, 650, 44, 2);
  w43 = createSprite(540, 590, 2, 120);
  w43 = createSprite(560, 530, 44, 2);
  w44 = createSprite(580, 490, 2, 80);
  w45 = createSprite(560, 570, 45, 2);
  w46 = createSprite(580, 610, 2, 80);
  w47 = createSprite(560, 500, 45, 2);
  w48 = createSprite(540, 480, 2, 45);
  w49 = createSprite(520, 460, 45, 2);
  w50 = createSprite(500, 515, 2, 110);
  w51 = createSprite(580, 380, 80, 2);
  w52 = createSprite(470, 380, 55, 2);
  w53 = createSprite(580, 360, 2, 45);
  w54 = createSprite(445, 400, 2, 40);
  w55 = createSprite(400, 420, 90, 2);
  w56 = createSprite(355, 370, 2, 180);
    


  w57 = createSprite(600, 20, 1500, 2);
  w58 = createSprite(500, 690, 1100, 2);
  wallGroup = new Group();
  wallGroup.add(w1)
  wallGroup.add(w2)
  //wallGroup.add(w3)
  wallGroup.add(w4)
  wallGroup.add(w5)
  wallGroup.add(w6)
  wallGroup.add(w7)
  wallGroup.add(w8)
  wallGroup.add(w9)
  wallGroup.add(w10)
  wallGroup.add(w11)
  wallGroup.add(w12)
  wallGroup.add(w13)
  wallGroup.add(w14)
  wallGroup.add(w15)
  wallGroup.add(w16)
  wallGroup.add(w17)
  wallGroup.add(w18)
  keyGroup = new Group();
  key1 = createSprite(770, 595, 10, 10);

  keyGroup.add(key1)
  for(var i = 0; i<keyGroup.length; i++){
    keyGroup.get(i).addImage(keyImg)
  }
  boy = createSprite(750, 675, 10, 10);
  boy.addAnimation("runningl", boyImage2)
  boy.addAnimation("running", boyImage)
  boy.scale = 0.125
  
}

function draw() {
  background("black");  
  boy.collide(wallGroup)
  handleBoyControls();
  drawSprites();
}

function handleBoyControls(){
  if(keyIsDown(LEFT_ARROW)){
    boy.x = boy.x - 2
    boy.changeAnimation("runningl", boyImage2)
  }
  if(keyIsDown(RIGHT_ARROW)){
    boy.x = boy.x + 2
    boy.changeAnimation("running", boyImage)
  }
  if(keyIsDown(UP_ARROW)){
    boy.y = boy.y - 2
  }
  if(keyIsDown(DOWN_ARROW)){
    boy.y = boy.y + 2
  }
}