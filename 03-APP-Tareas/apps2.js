const fs = require("fs");
//console.log(fs)

let archivoTareas = fs.readFileSync(__dirname + "/tareas.json", "utf-8");
//console.log(archivoTareas);

let archivoTareasConv = JSON.parse(archivoTareas);
//console.log(archivoTareasConv);

let accion = process.argv[2];
//console.log(accion);

switch (accion) {

     case 'listar':
        
        //for (let i=0; i< arrayTareas.length; i++) {
        //    console.log(arrayTareas[i].titulo);
        //}
        archivoTareasConv.forEach(function(task,index) 
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
