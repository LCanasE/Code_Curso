const funcionesDeTareas = require("./funcionesDeTareas3");

let archivoTareas = funcionesDeTareas.leerArchivo("tareas.json")

let accion = process.argv[2];
//console.log(accion);


switch (accion) {

     case 'listar':
        
        //for (let i=0; i< arrayTareas.length; i++) {
        //    console.log(arrayTareas[i].titulo);
        //}
        archivoTareas.forEach(function(task,index) 
            {
            console.log(index+1 + ". " + task.titulo);
            });
    break;
    case 'crear':

            
    break;
    case undefined:
        console.log('Atención tienes que pasarme una acción');
    break;
    default:
        console.log('No entiendo que acción quieres hacer');
    break;
    }


