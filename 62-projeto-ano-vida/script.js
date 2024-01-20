const inputNome = document.querySelector('#nome');
const inputNascimento = document.querySelector('#nascimento');
const inputMorte = document.querySelector('#morte');
const calcular = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');


function calcularidade(){

    var nome = inputNome.value;
    
    var anoNascimento = inputNascimento.value;
    var anoMorte = inputMorte.value;

    idade = anoMorte - anoNascimento;

    

     resultado.textContent = `${nome} nasceu em ${anoNascimento} e morreu em ${anoMorte} com ${idade} anos de idade! Descanse em PAZ!`;
    

   
}

calcular.addEventListener('click', calcularidade);

