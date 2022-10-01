noseX = 0;
noseY = 0;

function preload() {
    mustache_nose = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");

}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);


    
}
function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
        console.log("nose y = " + results[0].pose.nose.y);

    }
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');

}
function draw() {
    


}
function take_snapshot(){
    save('myFilterImage.png');

}