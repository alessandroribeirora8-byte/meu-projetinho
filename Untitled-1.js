let nome = prompt("digite seu nome:");
let idade = number(prompt("digite sua idade:"));

if (idade >= 18) {
    console.log("maior de idade"); 
} else if (idade <= 16) {
    console.log("pode entrar com um responsavel");
} else {
    console.log("entrada proibida");
}
