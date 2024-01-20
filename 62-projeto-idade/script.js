const inputNome = document.querySelector('#nome');
const inputAno = document.querySelector('#ano');
const calcular = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');


function calcularidade(){

    var nome = inputNome.value;
    var ano = inputAno.value;
    idade = 2024 - ano ;
    
    resultado.textContent = `${nome} sua idade é ${idade} `;
   
}

calcular.addEventListener('click', calcularidade);

