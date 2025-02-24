function setup() {
    createCanvas(400, 400);
  }
  //função draw significa desenhar
  function draw() {
    background(0,255,0);
  
    //desenhando a linha superior 
    circle(350,50, 100)   //primeiro circulo
    circle(250,50, 100)  //segundo circulo
    circle(150,50, 100) //terceiro circulo
    circle(50, 50, 100)//quarto circulo
    
    // desenhando a linha inferior 
    circle(50, 350, 100) //primeiro circulo
    circle(150, 350, 100) //segundo circulo
    circle(250, 350,100) //terceiro circulo
    circle(350, 350,100) //quarto circulo
  } 
    if (mouseIsPressed) {
       console.log(mouseX, mouseY);
  }