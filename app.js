const argv = require('./config/yargs').argv
const toDo = require('./to-do/to-do')
const color = require('colors')

let cmd = argv._[0]

switch (cmd) {
    case 'crear':
        let task = toDo.crear(argv.descripcion)
        toDo.cargarDB().then(() => toDo.guardarDB())
        break;
    case 'listar':
        let listado = toDo.getListado()
        console.log(listado)
        listado.forEach(t => {
            console.log(color.green('\t---- Por hacer ----'))
            console.log(`${t.descripcion}`)
            console.log(`Estado: ${t.completado}`)
            console.log(color.green('\t-------------------'))
        });
        break;
    case 'actualizar':
        let actualizado = toDo.actualizar(argv.descripcion, argv.completado)
        if(actualizado)
            console.log('Se actualizo la lista')
        else
            console.log(color.red('NO se actualizo'))
        break;
    case 'borrar':
        let b = toDo.borrar(argv.descripcion)
        if(b)
            console.log('Se borro')
        else
            console.log(color.red('NO se borro'))
        break;
    default:
        console.log('comando no encontrado')
        break;
}