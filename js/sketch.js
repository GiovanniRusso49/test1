let kleur;


function setup() {
createCanvas(windowWidth/3,windowHeight/3);
}
function draw() {
    background(240);

    kleur=mouseX;
    kleur=map(kleur,0,width,0,255)
    console.log(kleur);

    fill(mouseX,0,0);
    rect(width/2, 0,width/4,height/3);
    fill(255,0,0);
    rect(3/4*width,2/3*height,width/4,height/3);
    fill(0,255,0);
    rect(width/4,height/3,width/4,height/3);


 
//horizontaal
    line(0,0,width,0);
    line(0,height,width,height);
    line(0,height/3,width,height/3);
    stroke(0,0,0)
    line(0,height/3*2,width,height/3*2);
//verticaal 
    line(0,0,0,height);
    line(width,0,width,height);
    line(width/4,0,width/4,height);
    line(3/4*width,0,width/4*3,height);
    line(width/4*2,0,width/4*2,height);

 
    
}
