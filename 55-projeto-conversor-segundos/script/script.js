const inputDia = document.querySelector("#dia");
const resultado = document.querySelector("#resultado");



const btn = document.querySelector(".btn").addEventListener('click',function(){
    resultado.innerHTML = "";
    var dia = inputDia.value;
    var segundos = dia * 86400;

    //resultado.innerText = ` ${dia} dias tem ${segundos} segundos `;

    var p = document.createElement('p');
    p.textContent =`${dia} Dias tem ${segundos} Segundos `;
    resultado.appendChild(p);

    p.classList.add('cor');

})