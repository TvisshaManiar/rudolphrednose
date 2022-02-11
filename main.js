noseX=0;
noseY=0;


function preload(){
    clownnose =  loadImage("https://media.us1.twilio.com/ME9ba6fb28bb9b0276c62fdfca75615865?Expires=1644581867&Signature=RKCsvk9tg9fqljbX2WjsgQkYisxsy2FATVceAbud4cPtyOGhIER5vj7S2ddOfjAJSE4oIXSYR4rTJfBro72SoTgbN5ojeiPqzwLWofeBsk~SGg5oBXA~DEJ0jGfeC7E6frKspGb5AmueU~NsShmLY-MOn5PggBIGwdLDVLi~SQGy817W~d0wmADpBx3jUdNEQ95piYPUjAf27HFk7dWZ4U81SkK5Nwuze7C9NadkgkSFonOwGCYOGi9QKL3WtZOILjbbj0xz15nN5tRO-y9U4sk5s9ak-L9ASXLC94V5XtyT5qaMDcv2TZAO~PY~pZdV8B4tis1mZrjtwnxkAT4-sw__&Key-Pair-Id=APKAJWF6YVTMIIYOF3AA");
}

function setup(){
canvas= createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on("pose", gotPoses);
}

function draw(){
    image(video,0,0,300,300);
    image(clownnose, noseX, noseY,30,30);
}

function take_snapshot(){
    save("myfilterimage.png0");
}

function modelLoaded(){
    console.log("poseNet is Initialized");

}

function gotPoses(results){
        if(results.length > 0){
            console.log(results);
            noseX= results[0].pose.nose.x-15;
            noseY= results[0].pose.nose.y-15;
        }
}


