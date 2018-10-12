coins_types = [1,0.5,0.25,0.10,0.05,0.01]
all_coins = []
change = 0.0

var index = 0;
var img1;
var img05;
var img025;
var img010;
var img005;
var img001;

function preload() {

  img1 = loadImage('https://i.imgur.com/IpBWVEq.png');
  img05 = loadImage('https://i.imgur.com/sn9R2Ds.png');
  img025 = loadImage('https://i.imgur.com/kxj6e9s.png');
  img010 = loadImage('https://i.imgur.com/PqpP6mn.png');
  img005 = loadImage('https://i.imgur.com/0mgJRI9.png');
  img001 = loadImage('https://i.imgur.com/zIr7JIx.png');
}

function setup() {

  createCanvas(windowWidth,windowHeight+500);

  input = createInput();
  input.position(20, 20);

  button1 = createButton('Dar Troco');
  button1.position(input.x + input.width, 20);
  button1.mousePressed(chooseValue);


  for(let cont =0;cont<20;cont++){
    all_coins.push(coins_types[Math.floor(Math.random() * 6)]);
  }
  sort(all_coins);
  all_coins = all_coins.reverse()
}

function draw() {
  background(50);
  textSize(32);
  fill("white")
  //image(umReal,0,0,50,50)
  y = 20;
  x =10;
  for(let cont =0;cont<all_coins.length;cont++) {
    x+=500;  
    if(cont%3==0){
      x = 0;
      y += 100;
    }
    switch(all_coins[cont]){
      case 1:
        image(img1,x,y,100,100);
      break
      case 0.5:
        image(img05,x,y,100,100);
      break
      case 0.25:
        image(img025,x,y,100,100);
      break
      case 0.1:
        image(img010,x,y,100,100);
      break
      case 0.05:
        image(img005,x,y,100,100);
      break
      case 0.01:
        image(img001,x,y,100,100);
      break
      default:

    }
  }

  if(change > 0){
    pay()
  }
  else{
    change = 0
  }
}

function pay(){
  if((change - all_coins[index]) >= 0){
    change = (Math.round((change - all_coins[index])*100)/100)
    all_coins[index] = 0
    index++;    
  }
  else{
    index++;
    if(index >= all_coins.length){
      alert("Vamos ficar te devendo" + change +" dessa vez.")
      change = 0;
    }
  }

}

function chooseValue(){
  index = 0;
  change = Number(input.value());
}
