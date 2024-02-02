const number = document.querySelector('#number');
const btn = document.querySelector('#btn');

const resultado = document.querySelector('#resultado');


btn.addEventListener('click',()=>{


    if(number.value == ''){
        alert('O Campo não pode estar vazio!!!');
        return;
    }

    resultado.innerHTML = '<h1>Resultado Final</h1>'
    var num = number.value;
    var quadrada = Math.sqrt(num);
    var cubica = Math.cbrt(num);


    resultado.innerHTML += `<p> Analisando o <strong> número ${num} </strong> , temos: </p>
    <ul><li>A sua raiz quadrada é <strong> ${quadrada} </strong></li>
    <li>A sua raiz Cúbica é <strong> ${cubica} </strong></li></ul>
    `

   


})



