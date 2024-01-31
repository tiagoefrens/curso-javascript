const number = document.querySelector('#number');
const btn = document.querySelector('.btn');
const res = document.querySelector('#resultado');
var c = 0;
const btnLimpar = document.querySelector('#btn-limpar');

btn.addEventListener('click',()=>{

    res.style.display = 'block';
    
    
    var numero = number.value;
    if(numero == ""){
        res.textContent = 'O campo não pode estar vazio!!!'
        return;
    }

    res.innerHTML = ""
    
   for(c = 0 ; c <= 10; c++){

        const resultado = numero * c;

        res.innerHTML += `<p>${numero} X ${c} = ${resultado}</p>`;

   }

   

})

btnLimpar.addEventListener('click',()=>{
    res.innerHTML = '';
    res.style.display = 'none';
    number.value = '';
})