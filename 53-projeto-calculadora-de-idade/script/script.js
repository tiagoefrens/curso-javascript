var bt = document.querySelector("#btcalc");

bt.addEventListener("click",calcular);

function calcular(e){
    e.preventDefault()
    var nome = document.getElementById("nome").value;
    var ano = document.getElementById("ano").value;

    let dataAtual = new Date();

    var anoAtual = dataAtual.getFullYear()

    if(ano > anoAtual  || ano == ""){
        alert("Ano inválido")
        return
    }

    if(nome == ""){
        alert("Digite um nome para começar!")
        return
    }
    
    
    var resultado = document.querySelector("#resultado");

    idade = anoAtual - ano;

   

    //resultado.innerText = " Olá " + nome + " você tem " + idade + " de idade";
    resultado.innerText = ` Olá ${nome}! Você tem ${idade} de idade`;

}

let dataAtual = new Date();

var anoAtual = dataAtual.getFullYear()

anoAtualizado.innerText = `Estamos em ${anoAtual}`;


