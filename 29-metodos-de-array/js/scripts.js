//length  Mostra o numero de elementos do array

var arr = [1,2,3,4,5];

console.log(arr.length);



//push Adiciona elemento no fim do array

arr.push(6);
arr.push("tiago");

console.log(arr);



//pop Remove elemento no fim do array

arr.pop();
console.log(arr);


//unshift Adicionan elemento no inicio do array

arr.unshift(0);
console.log(arr);
arr.unshift('Teste');
console.log(arr);


//shift Remove elemento no inicio do array

arr.shift();
console.log(arr);


//Acessa o ultimo elemento do Array

console.log(arr[arr.length-1]);



//isArray   Verifica se é um array

console.log(Array.isArray(5));

console.log(Array.isArray(arr));


