const fs = require("fs");



let archivoTareas = {
    archivo: "tareas.json",
    
    leerArchivo: function() {
        return JSON.parse(fs.readFileSync(this.archivo,"utf-8"));
    },
   
    escribirJSON: function(tareas) {
        fs.writeFileSync(this.archivo, JSON.stringify(tareas, null, ' ')); // OJO!!
    },

    guardarTarea: function(tarea) {  // es igual si escribo  guardarTarea(tarea) {
        let tareas = this.leerArchivo();
        tareas.push(tarea);
        this.escribirJSON(tareas); 
    },

    filtrarPorEstado: function(estado) {
        let tareas = this.leerArchivo();
        let tareasFiltradas = tareas.filter(function(tarea){
            return tarea.estado === estado;
        });
        return tareasFiltradas;

    }

}
module.exports = archivoTareas