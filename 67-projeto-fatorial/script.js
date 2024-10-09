const numero = document.querySelector('#number')
const btn = document.querySelector('#btn')
const resultado = document.querySelector('#resultado');

btn.addEventListener('click',()=>{

var num = numero.value
var f  = 1

for(i = num; i >= 1; i--){
     f *= i
}





resultado.innerHTML = `O Fatorial de ${num} é ${f}`

})