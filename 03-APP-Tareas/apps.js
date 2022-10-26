const { archivo } = require("./funcionesDeTareas");
let archivoTareas = require("./funcionesDeTareas");
let tareas = archivoTareas.leerArchivo();
let accion = process.argv[2];
console.log(accion);

switch (accion) {
    case 'listar':
        /*for (let i = 0; i < tareas.length; i++) {
            console.log(tareas[i])
        }*/
        

        tareas.forEach((tarea, index) => {
            console.log(index + 1 + " " + tarea.titulo);
            
        });
        break;

    case 'crear':
        console.log('Nueva traea creada');
        const titulo = process.argv[3];
        let tarea = {
            titulo: titulo,
            estado: 'pendiente'
        }
        archivoTareas.guardarTarea(tarea);
        console.log(tarea.titulo,' ',tarea.estado);
        break;

    case 'filtrar':
        const estado = process.argv[3];
        let filtradas = archivoTareas.filtrarPorEstado(estado);
        //console.log('tareas filtradas ', filtradas);
        filtradas.forEach((task, index)=>{
            console.log((index+1)+' '+task.titulo)
        })
        break;

    case undefined:
        console.log('Atención tienes que pasarme una acción');
        break;
    default:
        console.log('No entiendo que acción quieres hacer');
        break;
}

//console.log("Tareas", tareas);

/* for (let i = 0; i < tareas.length; i++) {
    console.log(tareas[i])
} */