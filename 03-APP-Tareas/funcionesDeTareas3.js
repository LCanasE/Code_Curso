
let funcionesDeTareas = {
    
    leerArchivo: function (archivo) {
        const fs = require("fs");
        //let archivoTareas = fs.readFileSync(__dirname + "/tareas.json", "utf-8");
        //let archivoTareasConv = JSON.parse(archivoTareas);
        let archivoTareas = JSON.parse(fs.readFileSync(__dirname + "/" + archivo, "utf-8"));
        return archivoTareas;
    },

    escribirJSON: function(arrayTareas) {
        let arrayString = JSON.stringify(arrayTareas, null, ' ');
        fs.writeFileSync(this.archivo,arrayString)
    } 
}
module.exports = funcionesDeTareas;
