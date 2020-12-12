function preload(){

}

function setup() {
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
ml5_classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/q4rV8XqYw/model.json",modeloaded);
} 
function modeloaded() {
console.log("model loaded!")
}

function draw() {
image(video,0,0,300,300);
ml5_classifier.classify(video,getresult);
}

function getresult(error,results) {
if (error) {
console.log(error);
}
else {
console.log(results);
document.getElementById("result_object_name").innerHTML=results[0].label;
document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}