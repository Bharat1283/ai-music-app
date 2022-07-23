starwarsbgm="";
interstellarbgm="";

function preload(){
starwarsbgm= loadSound("sw.mp3");
interstellarbgm= loadSound("inter.mp3");
}

function setup(){
    canvas = createCanvas(500,430);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide()
}

function draw(){
 image(video, 0, 0, 500, 430);
}

console.log('Made by Bharat -- copyright 2022');