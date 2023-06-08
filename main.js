
noseX=0;
noseY=0;
leftwristX=0;
rightwristX=0;
difference=0;

function setup()
{
    canvas=createCanvas(500,250)
    canvas.position(800,70)
    video=createCapture(VIDEO);
    video.size(500,250);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw()
{
    background("black")
    fill("white");
    stroke("blue")
    square(noseX, noseY, difference)
    document.getElementById("squre_id").innerHTML="size of square = "+difference+" px";
}
function modelLoaded()
{
    console.log("Model is Initialized")
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX= "+noseX+" , noseY="+noseY)
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX - rightwristX)
        console.log("leftwristX= "+leftwristX+" , rightwristX="+rightwristX+" , difference="+difference);
    }
}