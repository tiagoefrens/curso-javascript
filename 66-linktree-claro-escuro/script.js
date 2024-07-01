var btn = document.querySelector('#btn');

btn.addEventListener("click",acender);

function acender(){
    var body = document.querySelector('#body');
    body.classList.toggle('escuro');
    btn.innerText = body.classList.contains('escuro')?'Modo Claro':'Modo Escuro';

    if(body.classList.contains('escuro')) {
        btn.innerText = 'Modo Claro';
    } else {
        btn.innerText = 'Modo Escuro';
    }
   
}