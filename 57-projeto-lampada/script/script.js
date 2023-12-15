const  turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken(){
    return (lamp.src.indexOf ('quebrada') > -1)
}

function lampBroken(){
    lamp.src="./img/quebrada.jpg";
    
}

function lampOff(){
    if( !isLampBroken () ){
        lamp.src="./img/desligada.jpg";
        
    } 
    
}

function lampOn(){
    if( !isLampBroken () ){
    lamp.src ="./img/ligada.jpg";
    }
}



turnOn.addEventListener('click', lampOn);

turnOff.addEventListener('click', lampOff);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);