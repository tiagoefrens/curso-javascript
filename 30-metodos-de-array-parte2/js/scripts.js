//splice  Adicionar ou Remover elemento no meio do array

//add
var arr = [1,2,3,4,5];

arr.splice(2,0,999); 
//(2,0,99) - posição 2, apagar 0 elementos, addo elemento 999

console.log(arr);

//remover

arr.splice(4, 1);
//(4, 1) - remove o elemento na posição 4 e 1 elemento só.

console.log(arr);


//indexOf   Identifica o indece  do array

console.log(arr.indexOf(5));


//join  Transforma array em string

var arr2 = ["o ", "Rato", "roeu", "a", "roupa"];

console.log(arr2.join(" ")); // separador (" ") espaço entre as palavras

//reverse  Inverte a ordem do Array

console.log(arr2.reverse());