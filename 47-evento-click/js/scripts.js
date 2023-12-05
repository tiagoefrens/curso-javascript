//inserir Click

var btn = document.querySelector("#btn");

console.log(btn);

btn.addEventListener("click", function(){

console.log("clicou");

console.log(this);

this.style.color = "red";

});


//click afetando outros elementos

var title = document.querySelector("#title");

title.addEventListener("click", function(){

    console.log("teste");

var subtitle = document.querySelector(".subtitle");

subtitle.style.display = "none";
});


//double click 

var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("dblclick", function(){


    console.log("double click");
});