let cnv;
let dragons = [];
let animating = false;


function preload() {

  for (let i = 0; i <= 5; i++) {
    dragons[i] = loadImage(`Assets/Dragon_${i}.png`)
  }
}

function setup() {
  cnv = createCanvas(500, 500);
  cnv.parent("#canvasDiv");

  background(240);
  strokeWeight(5)

  imageMode(CENTER)


}



function randomizer() {
  animating = false;
  image(random(dragons), width / 2, height / 2);



}



function keyTyped() {

  if (key === 's') {
    saveCanvas('fileName', 'png');
  } else if (key === 'Enter') {

    randomizer();

  } else if (key === 'r') {
    stroke(255, 0, 0)
  } else if (key === 'g') {
    stroke(0, 255, 0)
  } else if (key === 'b') {
    stroke(0, 0, 255)
  } else if (key === 'k') {
    stroke(0)
  } else if (key === '/') {

    refresh();

  }


}

function draw() {
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);


  }
}

function refresh() {
  window.location.reload("refresh")

}
