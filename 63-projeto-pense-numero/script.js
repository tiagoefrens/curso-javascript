const btn = document.querySelector('.btn');
var title = document.querySelector('#title')
const div = document.querySelector('#div');
var nivel = 0 ;



btn.addEventListener('click',()=>{
    
    nivel ++;

    switch(nivel){

        case 1 : title.innerHTML = ('Ele mais ele');
        break;

        case 2 : title.innerHTML = ('Mais 4');
        break;

        case 3 : title.innerHTML = ('Divide por 2');
        break;

        case  4: title.innerHTML = ('Menos o número que você pensou');
        break;

        case  5: title.innerHTML = ('Resultado 2? CERTO?');
        break;
    }
    
   


})

