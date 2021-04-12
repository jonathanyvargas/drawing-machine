let cnv;
let dragons = false;

function preload(){

  for (let i = 0; i <= 15; i++){
    dragons[i] = loadImage(`assets/dragonDrawings${i}.JPG`)
  }
}

  function setup() {
    cnv = createCanvas(600, 600);
    cnv.parent("#canvasDiv");

    background(220);
    strokeWeight(5)




  }

  function draw() {

if (mouseIsPressed == true){
  line(mouseX, mouseY, pmouseX, pmouseY);


}

}

function keyTyped(){

if (key === 's'){
  saveCanvas('fileName', 'png');
} else if (key === 'd'){

background(255)

}




}
