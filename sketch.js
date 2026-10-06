let xMax = 400
let yMax = 700
let xbunny = xMax/2
let ybunny = yMax/2.3

function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  background(255,255,255);

  push();
   translate(0, 40);

  //orecchia sinistra
  fill(220);
  stroke(40);
  strokeWeight(2);
  triangle (xbunny-25, ybunny-28,xbunny-30, ybunny-270, xbunny-130, ybunny-180);

  //orecchia sinistra (rosa)
  fill(215, 118, 162);
  stroke(40);
  strokeWeight(2);
  triangle (xbunny-25, ybunny-28,xbunny-50, ybunny-200, xbunny-90, ybunny-160);

  //orecchia destra
  fill(220);
  stroke(40);
  strokeWeight(2);
  triangle (xbunny+5, ybunny+10,xbunny+50, ybunny-300, xbunny+170, ybunny-250);

  //orecchia destra (rosa)
  fill(215, 118, 162);
  stroke(40);
  strokeWeight(2);
  triangle (xbunny+5, ybunny+10,xbunny+67, ybunny-250, xbunny+130, ybunny-230);

  //zampe posteriori
  fill(220);
  stroke(40);
  strokeWeight(2);
  rectMode(CENTER);
  rect(xbunny, ybunny+280, 300, 40)

  line(xbunny-135, ybunny+280, xbunny-135, ybunny+300);
  line(xbunny-123, ybunny+280, xbunny-123, ybunny+300);

  line(xbunny+135, ybunny+280, xbunny+135, ybunny+300);
  line(xbunny+123, ybunny+280, xbunny+123, ybunny+300);

  //gamba sinistra
  fill(220);
  stroke(40);
  strokeWeight(2);
  triangle (xbunny-100, ybunny+298,xbunny-30, ybunny+170, xbunny-125, ybunny+150);

  line(xbunny-30, ybunny+200, xbunny-100, ybunny+180);

  //gamba destra
  fill(220);
  stroke(40);
  strokeWeight(2);
  triangle (xbunny+100, ybunny+298,xbunny+30, ybunny+170, xbunny+125, ybunny+150);

  line(xbunny+30, ybunny+200, xbunny+100, ybunny+180);
  
  //corpo
  fill(220);
  stroke(40);
  strokeWeight(2);
  triangle (xbunny-100, ybunny+300,xbunny, ybunny-10, xbunny+100, ybunny+300);
  
  //testa
  fill(220);
  stroke(40);
  strokeWeight(2);
  rectMode(CENTER);
  rect(xbunny, ybunny, 130, 150)

  //occho sinistro
  fill(255);
  stroke (40);
  strokeWeight(2);
  ellipse(xbunny-50, ybunny-15, 65, 65);

  //pupilla sinistra
  fill(0);
  stroke (40);
  strokeWeight(2);
  ellipse(xbunny-42, ybunny-15, 15, 15);

  //occho destro
  fill(255);
  stroke (40);
  strokeWeight(2);
  ellipse(xbunny+50, ybunny-15, 65, 65);

  //pupilla destra
  fill(0);
  stroke (40);
  strokeWeight(2);
  ellipse(xbunny+42, ybunny-15, 15, 15);

  //baffi sinistri
  line(xbunny+15, ybunny+30, xbunny+130, ybunny+70);
  line(xbunny+15, ybunny+30, xbunny+145, ybunny+50);
  line(xbunny+15, ybunny+30, xbunny+160, ybunny+30);

  //baffi sinistri
  line(xbunny-15, ybunny+30, xbunny-130, ybunny+70);
  line(xbunny-15, ybunny+30, xbunny-145, ybunny+50);
  line(xbunny-15, ybunny+30, xbunny-160, ybunny+30);

  //naso
  fill(215, 118, 162);
  stroke (40);
  strokeWeight(2);
  ellipse(xbunny, ybunny+30, 40, 22);  

  //dente sinitro
  fill(255);
  stroke(40);
  strokeWeight(2);
  rectMode(CENTER);
  rect(xbunny-20, ybunny+88.5, 40, 27)

  //dente destro
  fill(255);
  stroke(40);
  strokeWeight(2);
  rectMode(CENTER);
  rect(xbunny+20, ybunny+88.5, 40, 27)

  //zampa anteriore sinistra
  fill(220);
  stroke(40);
  strokeWeight(2);
  rectMode(CENTER);
  rect(xbunny-27.5, ybunny+288, 55, 40)

  line(xbunny-33, ybunny+290, xbunny-33, ybunny+308);
  line(xbunny-45, ybunny+290, xbunny-45, ybunny+308);

  //zampa anteriore destra
  fill(220);
  stroke(40);
  strokeWeight(2);
  rectMode(CENTER);
  rect(xbunny+27.5, ybunny+288, 55, 40)

  line(xbunny+33, ybunny+290, xbunny+33, ybunny+308);
  line(xbunny+45, ybunny+290, xbunny+45, ybunny+308);
  
  pop();

}

