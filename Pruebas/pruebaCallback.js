
let calculadora = (a, b, operacion) => operacion(a, b);

//console.log(calculadora(1, 2, (n1, n2) => n1 + n2));


function agregarHttp(url) {
    return 'http://' + url;
}

function largoString(url) {
    return url.length;
}

function procesar(array,callback){

    let arrayResult = [];

    for (let i = 0; i<array.length; i++) {
        //arrayResult[i] = callback(array[i]);
        arrayResult.push(callback(array[i]));
    }

    return arrayResult;

}
let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
console.log(urlCompletas);

let largoDeElmentos = procesar(["www.google.com","www.yahoo.com"],largoString)
console.log(largoDeElmentos); 