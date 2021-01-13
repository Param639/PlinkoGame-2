const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var divisions = [];
var plinkos = [];
var particles = [];
var engine,world;
var ground1;
var divisionbottom;
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(240,795,480,12);
  ground2 = new Ground(475,width,12,1000);
  ground3 = new Ground(5,width,12,1000);

  divisionbottom = new Division(240,782,458,14);
  
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }


   for (var j = 55; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,35));
   }

   for (var j = 30; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,135));
   }

    for (var j = 55; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,235));
   }

    for (var j = 30; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,335));
   }


}

function draw() {
  background(0);
  Engine.update(engine); 
  
  
  
  ground1.display();
  ground2.display();
  ground3.display();

  divisionbottom.display();

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }

}