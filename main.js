song1_status="";
song2_status="";

song1="";
song2="";

function setup() {
    canvas=createCanvas(600 , 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video , modelLoaded);
    poseNet.on('pose ' , gotPoses);

}

function draw() {
    image(video , 0 , 0 , 600 , 500);
    song1_status = song1.isPlaying(); 
    song2_status = song2.isPlaying();
     fill("#FF0000"); stroke("#FF0000");
      if(scoreRightWrist > 0.2)
       { circle(rightWristX,rightWristY,20);
         song2.stop();
          if(song1_status == false) { song1.play(); 
            document.getElementById("song").innerHTML = "Playing - Harry Potter Theme Song"; 
        } }
         if(scoreLeftWrist > 0.2) 
        { circle(leftWristX,leftWristY,20);
                 song1.stop();
                 if(song2_status == false)
                  { song2.play(); 
        document.getElementById("song").innerHTML = "Playing - Peter Pan Song" ;
    } } }



song="";

function preload() {
    song=loadSound("music.mp3");
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded() 
{
    console.log("Posenet Is Initialized");

}

leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function gotPoses(results) 
 
 {
     if(results.length>0)

     {
         console.log(results);
         leftWristX=results[0].pose.leftWrist.X;
         leftWristY=results[0].pose.leftWrist.Y;
         rightWristX=results[0].pose.rightWrist.X;
         rightWristY=results[0].pose.rightWrist.Y;
         console.log("leftWristX=" + leftWristX + "lefttWristY=" + leftWristY );
         console,log("rightWristX=" + rightWristX + "rightWristY=" + rightWristY);
     }
 }

