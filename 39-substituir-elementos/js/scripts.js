//criar um elemento

var el = document.createElement("h3");

el.classList = "testando-classe";

var text = document.createTextNode("Este é o texto do h3");

el.appendChild(text);

console.log(el);

//selecionar o elemento que quero trocar

var title = document.querySelector("#title");

console.log(title);


//selecionar o pai do elemento el
 var pai = title.parentNode;


 //trocar os elementos

 pai.replaceChild(el, title);
