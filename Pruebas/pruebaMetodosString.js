function reemplazoFastFast(texto, palabraR, palabraParaR) {
    return texto.replace(palabraR, palabraParaR);
}

console.log(reemplazoFastFast('Todo lo que pasa tiene que bajar', 'pasa', 'sube'));


let frase = 'Hola!, soy Carli';
let licenciada = null;

function slice (frase) {
    licenciada = frase.slice(11);
    console.log(licenciada)
    return licenciada;
}

slice(frase);
console.log(licenciada);



let notas = [1, 2, 3, 4];

let nuevasNotas = [5, 6, 7, 8, 9];

notas.push(...nuevasNotas);

console.log(notas);