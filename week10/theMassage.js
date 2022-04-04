function revealMessage1(){
    document.getElementById("hiddenMessage1").style.display = 'block';
    document.getElementById("img1").style.display = 'block';
    document.body.style.backgroundColor = 'lightskyblue';
}
function revealMessage2(){
    document.getElementById("hiddenMessage2").style.display = 'block';
    document.getElementById("img2").style.display = 'block';
    document.body.style.backgroundColor = 'darkseagreen';
}

function revealMessage3(){
    document.getElementById("hiddenMessage3").style.display = 'block';
    document.getElementById("img3").style.display = 'block';
    document.body.style.backgroundColor = 'white';
}


function revealMessage4(){
    document.getElementById("hiddenMessage4").style.display = 'block';
    document.getElementById("img4").style.display = 'block';
    document.body.style.backgroundColor = 'red';
}

const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{

    if(btn.innerText === "Did you ever think that one medium is a form of another?"){
        btn.innerText = "Really?";
    }else{
        btn.innerText = "Can you think of other examples?";
    }
});
