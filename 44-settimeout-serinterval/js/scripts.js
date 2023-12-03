// setTimeout

console.log("Antes do setTimeout");

setTimeout(function(){

    console.log("Testando o setTimeout");
},3000);//  <-- Aparece depois de 3 segundos

console.log("Depois do setTimeout");


//setInterval

setInterval(function(){

    console.log("Testando o setInterval");


},1000);  // <-- Aparece em intervalos de 1 segundo