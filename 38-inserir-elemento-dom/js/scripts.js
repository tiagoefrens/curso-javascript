//Criar elemento

var el = document.createElement("div");

el.classList = "div-criada";

console.log(el);

 var container = document.querySelector("#container");

 // inserindo elemneto filho

 container.appendChild(el);

 //insertBefore - Insere antes de outro

 var el2 = document.createElement("div");

 el2.classList = "div-before";

 var el3 = document.querySelector("#container .div-criada");

 console.log(el3);

 container.insertBefore( el2, el3);