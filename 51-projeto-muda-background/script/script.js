document.querySelector("#btn-vermelho").addEventListener("click", function(){
    limpaClasse();
    document.querySelector("body").classList.add('vermelho');
});

document.querySelector("#btn-azul").addEventListener("click", function(){
    limpaClasse();
    document.querySelector("body").classList.add('azul');
});

document.querySelector("#btn-verde").addEventListener("click", function(){
    limpaClasse();
    document.querySelector("body").classList.add('verde');
});

function limpaClasse() {
    document.querySelector("body").setAttribute("class","");
}