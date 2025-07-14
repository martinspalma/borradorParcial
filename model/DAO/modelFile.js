import fs from 'fs'
import ArchivoPersistencia from './archivoPersistencia.js'

class ModelFile extends ArchivoPersistencia{
    
    constructor() {

        super('./data/colores.json')
    }


    obtenerElemento = async (id) => {

        const elementos = await this.leer()
        const elementoBuscado = elementos.filter(e => Number(e.id) == Number(id))
        return (elementoBuscado.length > 0) ? elementoBuscado : { mensaje: "no existe el numero" }
    }

    obtenerElementos = async () => {
        return await this.leer() || {}
    }

    guardarElemento = async (elemento) => {
        const elementos = await this.leer()
        if (elementos.some(el => el.color === elemento.color)) {
    throw new Error('color ya ingresado');
  }
        elementos.push(elemento)
        await this.escribir(elementos)
        return elemento
    }

    modificarElemento = async (id, elemento) => {
        const elementos = await this.leer()
        const index = elementos.findIndex(e => e.id === id)

        if (index != -1) {
            const elementoAnterior = elementos[index]
            const elementoActualizado = { ...elementoAnterior, ...elemento }
            elementos.splice(index, 1, elementoActualizado)
            await this.escribir(elementos)
            return elementoActualizado
        }
        else {
            let mensaje = "error en la actualizacion del archivo"
            return mensaje
        }
    }

    eliminarElementos = async (id) => {
        const elementos = await this.leer()
        const index = elementos.findIndex(e => e.id === id)

        if (index != -1) {
            const elementoEliminado = elementos.splice(index, 1)[0]
            await this.escribir(elementos)
            return elementoEliminado
        }
        else {
            let mensaje = "error al eliminar el archivo"
            return mensaje
        }
    }


}
export default ModelFile 