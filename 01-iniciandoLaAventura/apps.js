const lili_canas = require("./lili_canas")

    console.log('Hola, soy ' + lili_canas.nombre + ', disfruto ' + lili_canas.pasaTiempo + ' y soy de ' + lili_canas.lugar + '.')

const ivan_soria = require("./ivan_soria")

    console.log('Hola, soy ' + ivan_soria.nombre + ', disfruto ' + ivan_soria.pasaTiempo + ' y soy de ' + ivan_soria.lugar + '.')

const diego_gonzalez = require("./diego_gonzalez")

    console.log('Hola, soy ' + diego_gonzalez.nombre + ', disfruto ' + diego_gonzalez.pasaTiempo + ' y soy de ' + diego_gonzalez.lugar + '.')

const fs = require('fs');

let mensaje = fs.readFileSync(__dirname + '/mensaje.txt', 'Utf-8');

    console.log(mensaje);