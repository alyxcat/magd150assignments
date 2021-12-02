var x = 42.8;
var y = 20
var z = y + 50
var a = y / 2

function setup() {
  createCanvas(400, 400);
  frameRate(10);

}
function draw () {
  background(0,0,0)
   
  //moving circles, variables, math, 
   noStroke();
  fill (246,146,146)
  ellipse (105, 105, x, x)
  x = x * 1.1;
  
     noStroke();
  fill (159, 132, 245)
  ellipse (300, 300, y, y)
  y = y - 2.3;
  
    noStroke();
  fill (217, 243, 104)
  ellipse (45, 205, z, z)
  z = z + 3;
    
    noStroke();
  fill (15, 168, 189)
  ellipse (220, 120, a, a)
  a = a + 3;
  
   noStroke();
  fill (74, 18, 217)
  ellipse (mouseX, mouseY,45, 45)
  
   noStroke();
  fill (118, 244, 156)
  ellipse (pmouseX, pmouseY,45, 45)

   text(frameCount, width / 2, height / 20);
  
  
  //points
  strokeWeight(50);
  stroke(0); 
  point(a, y);
  point(z, x);
  point(x, a);
  point(x, y);
  point(x, z);

  let x1 = 100;
  let y1 = 100;
  let x2 = mouseY;
  let y2 = mouseX;

  // distance 
  strokeWeight(1);
  stroke(255);
  line(x1, y1, x2, y2);
  ellipse(x1, y1, 17, 17);
  ellipse(x2, y2, 17, 17);
  
    
//constrain 
    let leftWall = 10;
  let rightWall = 390;
  
  let b = mouseX;
  let c = constrain (mouseX, leftWall, rightWall);
  
  
 line(leftWall, 0, leftWall, height);
  line(rightWall, 0, rightWall, height);
  
  ellipse(b, 100, 13, 13); // Not Constrained
  ellipse(c, 300, 13, 13); // Constrained
  
       print(frameCount);
      print(mouseY, mouseX);
}


  

