const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const green = document.querySelector('#green');
const auto = document.querySelector('#auto');
const semaforo = document.querySelector('#semaforo');


function redOn(){
    semaforo.src = './img/vermelho.png';

}

function yellowOn(){
    semaforo.src = './img/amarelo.png';

}
function greenOn(){
    semaforo.src = './img/verde.png';

}

function autoOn(){
    
    var vermelho = setInterval(function(){
        redOn();
    }, 1000);
    setTimeout(()=>{
        clearInterval(vermelho);
    },1000);

    var amarelo = setInterval(function(){
        yellowOn();
    }, 2000);
    setTimeout(()=>{
        clearInterval(amarelo);
    },2000);


    var verde = setInterval(function(){
        greenOn();
    }, 3000);
    setTimeout(()=>{
        clearInterval(verde);
    },3000);
    
    
}



red.addEventListener('click', redOn);
yellow.addEventListener('click', yellowOn);
green.addEventListener('click', greenOn);
auto.addEventListener('click', autoOn);

