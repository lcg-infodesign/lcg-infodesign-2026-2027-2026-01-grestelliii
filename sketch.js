let xMax = 700
let yMax = 700
let xbunny = xMax/2
let ybunny = yMax/2.3

// animazione occhi
let spostamentoX = 0;
let spostamentoY = 0;
let direzione = 1;

// animazione carota
let movimentoCarota = 0;
let direzioneCarota = 1;

function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  background(219,232,198);

  //coniglio
  push();
   translate(-140, 40);

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

  //occho destro
  fill(255);
  stroke (40);
  strokeWeight(2);
  ellipse(xbunny+50, ybunny-15, 65, 65);
  
  // pupille - movimento automatico verso l'alto a destra
  spostamentoX = spostamentoX + 0.2 * direzione;
  spostamentoY = spostamentoY - 0.2 * direzione;
    // quando raggiungono il limite, inverti la direzione
    if (spostamentoX >= 8) {
    spostamentoX = 8;
    direzione = -1;
    }
    if (spostamentoX <= 0) {
    spostamentoX = 0;
    direzione = 1;
    }
  disegnaPupille();

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
  //nuvoletta
  push();

  fill(255, 255, 255);
  stroke (40);
  strokeWeight(2);
  ellipse(xbunny+170, ybunny-130, 250, 200);  

  fill(255, 255, 255);
  stroke (40);
  strokeWeight(2);
  ellipse(xbunny+52, ybunny-25, 75, 50); 

  fill(255, 255, 255);
  stroke (40);
  strokeWeight(2);
  ellipse(xbunny-5, ybunny, 35, 20); 

  pop();

  // movimento verticale della carota
  movimentoCarota += 0.3 * direzioneCarota;
    if (movimentoCarota >= 7) {
    movimentoCarota = 7;
    direzioneCarota = -1;
    }
    if (movimentoCarota <= -7) {
    movimentoCarota = -7;
    direzioneCarota = 1;
    }
  
  //carota
  push();
  translate(0, movimentoCarota);

  //foglie della carota
  fill(53, 130, 59);
  stroke(40);
  strokeWeight(2);
  triangle (xbunny+200, ybunny-170,xbunny+170, ybunny-130, xbunny+200, ybunny-200);
  
  fill(53, 100, 59);
  stroke(40);
  strokeWeight(2);
  triangle (xbunny+200, ybunny-170,xbunny+170, ybunny-130, xbunny+250, ybunny-180);

  //carota
  fill(255, 116, 32);
  stroke(40);
  strokeWeight(2);
  triangle (xbunny+87, ybunny-85,xbunny+205, ybunny-130, xbunny+170, ybunny-170);
  
  pop();
}

  //movimento pupille
  function disegnaPupille() {
  fill(0);
  stroke(40);
  strokeWeight(2);
  let xOcchi = [xbunny - 50, xbunny + 50];
  let yOcchi = [ybunny - 15, ybunny - 15];
  for (let i = 0; i < 2; i++) {
    ellipse(
      xOcchi[i] + spostamentoX,
      yOcchi[i] + spostamentoY,
      15,
      15
    );
  }
}
