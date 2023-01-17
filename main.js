function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/FacFwWih8/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        r = Math.floor(Math.random()*255)+1;
        g = Math.floor(Math.random()*255)+1;
        b = Math.floor(Math.random()*255)+1;

        document.getElementById("result_class").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result_class").style.color = "rgb("+r+", "+g+", "+b+")";
        document.getElementById("result_confidence").style.color = "rgb("+r+", "+g+", "+b+")";

        img = document.getElementById("ear");

        if(results[0].label=="Bark"){
            img.src = "Dog.png";
        }
        else if(results[0].label=="Meow"){
            img.src = "Cat.png";
        }
        else if(results[0].label=="Moo"){
            img.src = "Cow.png";
        }
        else if(results[0].label=="Roar"){
            img.src = "Lion.png";
        }
        else if(results[0].label=="Trumpet"){
            img.src = "Elephant.png";
        }
        else{
            img.src = "Ear.png";
        }
    }
}