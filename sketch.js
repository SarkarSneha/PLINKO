const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var divisions = []
var plinkos = []
var particles = []
var divisionHeight =250
var score = 0

function setup() {
  createCanvas(480,660);
  engine = Engine.create();
  world = engine.world;
 ground0 = new Ground(width, height/2, 10, height);
 ground1= new Ground(0, height/2, 10, height);
 ground2 = new Divisions(240, height, width,20 );
 

 for(var k=0; k<=width; k=k+80 ){
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}

for (var j = 40; j <=width; j=j + 50 ){

plinkos.push(new Plinko(j,175));

}




 for (var j = 15; j <=width-10; j=j + 50 ){

  plinkos.push(new Plinko(j,75));
  
  }

  for (var j = 40; j <=width; j=j + 50 ){

    plinkos.push(new Plinko(j,275));
    
    }



}

function draw() {
  background(0);  
  Engine.update(engine);
  ground0.display();
  ground1.display();
  ground2.display();
  


  for(var k=0; k<divisions.length; k++ ){
    divisions[k].display();
  }

    for(var j=0; j<plinkos.length; j++ ){
      plinkos[j].display();
}

for(var j=0; j<plinkos.length; j++ ){
  plinkos[j].display();
}

for(var j=0; j<plinkos.length; j++ ){
  plinkos[j].display();
}

if(frameCount%60 === 0){


  particles.push(new Particle(random(10,400),random(10,100)));
 // score++;
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }


}