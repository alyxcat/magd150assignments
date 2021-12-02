var pdf;
var font;
var font2;
let value = 0;
let result;
var img; 
var img2;

function preload() {}
result = "moviepostercredits.txt";

function preload() {
  font = loadFont("RobotoMono-VariableFont_wght.ttf");
  function preload() {}
  font2 = loadFont("RobotoMono-SemiBold.ttf"); //I'm uploading my chosen fonts here, which are both different fonts from the same family.
  

  
  
  function loadFile() {}
}

function setup() {
  createCanvas(350, 500, P2D);
  
    
   img2 = loadImage('Expo-Logo-2020.png');
  img = loadImage('sunset.jpg');
      loadStrings("moviepostercredits.txt", pickString); //These are my two images and string.
  function pickString(result) {
    text(result, 70, 10, 200, 100);}
   
  pdf = createPDF();
  pdf.beginRecord();


}
function draw() {

  image(img, 10, 10, 350, 500);
  img.filter(INVERT); //This filter is used to animate the poster.
  tint('#ff78e7');
   image(img2, 10, 30);
  
  push ();
  textFont(font);
      text(result, 70, 10, 200, 100);
  pop ();
 
  
  push();
  fill('#36ff1a');
  textSize(80);
  textFont(font);
  text("150", 150, 370);
  pop();

  push();
  fill("magenta");
  textSize(80);
  textFont(font);
  text("150", 160, 360);
  pop();

  push();
  fill('#6e45e6');
  textSize(80);
  textFont(font);
  text("150", 170, 350);
  pop();

  push();
  fill(' #dcfb49');
  textSize(80);
  textFont(font);
  text("150", 180, 340);
  pop();

  push();
  fill("blue");
  textSize(80);
  textFont(font);
  text("150", 190, 330);
  pop();

  push();
  textAlign(LEFT);
  textSize(90);
  textFont(font2);
  fill(value);
  text("MAGD", 70, 315); //This displays the movie title.
  pop();


  
function draw () {

 push ();
  loadStrings("moviepostercredits.txt", pickString);
  function pickString(result) {
    text(result, 70, 10, 200, 100);}
  pop ();
}

function mouseDragged() {
  value = (random(0, 255), random(0, 255), random(0, 255));
  //The user can drag their mouse to change the MAGD movie title.
}

function mousePressed() {
  pdf.save();

}
}