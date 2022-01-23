nosex=0;
nosey=0;
function preload(){
img=loadImage('https://i.postimg.cc/y85YvgRH/Claun-ccexpress.png');
}

function draw(){
image(video,0,0,300 ,300);
image(img,nosex,nosey,30,30);
}

function setup(){
canvas=createCanvas(300 ,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300 ,300);
video.hide();
posenet=ml5.poseNet(video, modelloaded);
posenet.on('pose', gotposes);
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
   nosex=results[0].pose.nose.x-15;
   nosey=results[0].pose.nose.y-15;
    }
}
function modelloaded(){
    console.log("posenet is initialized")
}

function Take_snap(){
    save('myfilter.png');
}