//toLowerCase e toUpperCase  - Tudo minuscula e tudo maiscula

var frase = "Esta é a frase que vamos manipular";

console.log(frase.toLocaleLowerCase());
console.log(frase.toLocaleUpperCase());

//trim - Retira espaços

var nome = "     Tiago        ";
var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// split  - Transforma em array

console.log(frase.split(" "));

var tags = "PHP, javascript, html ,css";

console.log(tags.split(" , "));

// lastIndexOf -  Pega o indice da ultima palavra da frase

var fraseDois = "Eu quero a ultima palavra teste desta teste";

console.log(fraseDois.lastIndexOf("teste"));