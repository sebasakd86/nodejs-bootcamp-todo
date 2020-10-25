const fs = require('fs')
const path = 'db/data.json'
const rootPath = '../db/data.json'
let listadoToDo = []

const guardarDB = () => {
    // console.log(listadoToDo)
    let data = JSON.stringify(listadoToDo)

    fs.writeFile(path, data, (err) => {
        if (err) throw err;
        return (true);
    })
    return 'Todo Piola'
}

const cargarDB = async () => {
    try {
        listadoToDo = require(rootPath)
    } catch (e) {
        listadoToDo = []
    }
}

const crear = async (descripcion) => {
    let toDo = {
        descripcion,
        completado: false
    }
    cargarDB().then(() => {
        listadoToDo.push(toDo)
        return toDo
    })
}
const getListado = () => {
    cargarDB()
    return listadoToDo
}
const actualizar = (descripcion, completado = true) => {
    cargarDB()
    let ix = listadoToDo.findIndex(t => t.descripcion === descripcion)
    // console.log(descripcion)
    if (ix && ix >= 0) {
        listadoToDo[ix].completado = completado
        guardarDB()
        return true
    }
    return false
}
const borrar = (descripcion) => {
    cargarDB()
    let ix = listadoToDo.findIndex(t => t.descripcion === descripcion)
    if (ix && ix >= 0) {
        listadoToDo.splice(ix,1)
        guardarDB()
        return true
    }
    return false    
}
module.exports = {
    crear,
    guardarDB,
    cargarDB,
    getListado,
    actualizar,
    borrar
}