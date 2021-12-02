let camera;


var cols, rows;
var scl = 35;
var w = 1700;
var h = 700;

var mountains = 0;

var terrain = [];

function setup() {
  createCanvas(700, 400, WEBGL);
camera = createCamera();
  cols = w / scl;
  rows = h / scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 3;
    }
  }
}

function draw() {
  background(40);
  
  
  
  camera.lookAt(0, 0, 0);
  camera.setPosition(sin(frameCount / 60) * 200, 0, 200);
  //The camera is meant to show the skyline of the city from all angles. 
  
  
  push();
 // rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial();
  box(50, 200, 50);
  pop();
  
   
  push();
 // rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial();
   translate(70, 20);
  box(50, 200, 50);
  pop();
  
   
  push();
 // rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
   translate(200, 30);
  normalMaterial();
  box(50, 200, 50);
  pop();
  
    push();
 // rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
   translate(270, 90);
  normalMaterial();
  box(50, 200, 50);
  pop();
  
   push();
 // rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
   translate(500, 15);
  normalMaterial();
  box(50, 200, 50);
  pop();
  
     push();
 // rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
   translate(400, 5);
  normalMaterial();
  box(50, 200, 50);
  pop();
  
     push();
 // rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
   translate(600, -10);
  normalMaterial();
  box(50, 200, 50);
  pop();
  //These normal material coated shapes are my buildings. ^
   
  push();
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  noStroke();
   ambientLight('#FF03CD');
  ambientMaterial('#FF03CD');
  translate(10, -200);
  torus(50);
  pop();
  //the torus shape has a hot pink, ambient glow. It's really noticable when the shape approaches the normal material buildings. 
  
  
  push();
  ambientLight(60);
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(255, 255, 255, locX, locY, 50);
  specularMaterial(250);
  shininess(70);
  rotateZ(frameCount * 0.04);
  noStroke();
  fill('#00FFE1');
  translate(10, -200);
  cone(40, 70);
  pop();
  //The teal cone has ambient lighting. 
  
  mountains += 0.015;
  var yoff = mountains;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
    }
    yoff += 0.2;
  }
//I added mountains to my city to give it a vaporwave vibe.  
  //I made the mountians using Coding Train's tutorial (https://www.youtube.com/watch?v=IKB1hWWedMk). 
  
  translate(0, 50);
  rotateX(PI / 3);
  fill('#360049');
  stroke('#15FF00');
    ambientLight(0);
  emissiveMaterial('#360049');
  translate(-w / 2, -h / 8);
  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
      
      
      
      
      
    }
    endShape();
    
    
    
  }
}






