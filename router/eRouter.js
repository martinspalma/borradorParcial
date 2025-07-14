import express from 'express'
import Controlador from '../controlador/eController.js'

class Router {
#cb=null
constructor (persistencia){
    this.#cb = new Controlador(persistencia)
}

start (){
    const router = express.Router()
//GET
//router.get('/estadisticas', this.#cb.obtenerEstadisticas)
router.get('/', this.#cb.obtenerElementos)
//router.get('/estadisticas', this.#cb.obtenerEstadisticas)
//POST
router.post('/', this.#cb.guardarElementos)
//PUT
router.put('/:id', this.#cb.actualizarElementos)
//DELETE
router.delete('/:id', this.#cb.borrarElementos)
//------------------ SECTOR endpoint por default--------------------------
router.use(this.#cb.porError)

return router
}
}
export default Router
