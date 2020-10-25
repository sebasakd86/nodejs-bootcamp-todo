const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un tarea', { descripcion })
    .command('actualizar', 'Completa una tarea', { descripcion, completado })
    .command('listar', 'Muestra las tareas')
    .command('borrar', 'Borra un todo', { descripcion })
    .help()
    .argv

module.exports = {
    argv
}