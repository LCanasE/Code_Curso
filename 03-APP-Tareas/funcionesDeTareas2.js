const fs = require("fs");

let archivoTareas = {

    archivo : 'tareas.json',
    
    leerArchivo: function() {
        
        //let tareas = JSON.parse(fs.readFileSync('tareas.json', 'utf-8'));
        //console.log(tareas);
        //return tareas;
        let tareas = fs.readFileSync('tareas.json', 'utf-8');
        return JSON.parse(tareas);
        
    } 
    escribirJSON: function(arrayDeTareas)

    guardarArchivo: function()

    }
    //console.log(archivoTareas.leerArchivo());
    module.exports = archivoTareas;