import ModelFactory from '../model/DAO/factory.js'
import { validar, validarActualizacion } from './validaciones/elementos.js'



class Servicio{
#model
constructor(persistencia){
    this.#model = ModelFactory.get(persistencia)
    
}
 
// obtenerEstadisticas = async () =>{
//     const elemento = await this.#model.obtenerElementos()
//     const cantidadTotal= elemento.length
     

//     const datosSondasIntermedios  = elemento.reduce((acc, {id, temperatura})=>{
//         if (!acc[id]){
//             acc[id] ={ cantidad: 0, suma: 0}
//         }
//         acc[id].cantidad +=1
//         acc[id].suma +=temperatura

//         return acc
//     } , {});

//     const temperaturaSondas = Object.keys(datosSondasIntermedios).map(id => {
//         const { cantidad, suma } = datosSondasIntermedios[id];
        
//         const promedio = suma / cantidad;
        
//         return {
//             id: parseInt(id), 
//             promedio: parseFloat(promedio.toFixed(2)) 
//         };
//     });
//     const promediosFormateados = temperaturaSondas
//         .map(sonda => `- ID: ${sonda.id}, Promedio: ${sonda.promedio}°C`)
//         .join('\n');

// return `Cantidad total de elementos: ${cantidadTotal}\n\nPromedios por sonda:\n${promediosFormateados}`;
// }



obtenerElementos = async () => {
    
        return await this.#model.obtenerElementos()
    }


guardarElemento = async (elemento) => {
   // jugador.fecha= new Date (elemento.fecha)
    
    const val= validar({color:elemento})
    if(val.result){
    
    const elementoNuevo= await this.#model.guardarElemento(elemento)
   
    return elementoNuevo
    }
    else{
        throw new Error(val.error.details[0].message)
    }
 }


actualizarElementos = async (id, elemento) => {
    const val= validarActualizacion(elemento)
    if(val.result){
    const elementoActualizado= await this.#model.actualizarElementos(id, elemento)
    return elementoActualizado
    }
    else{
        throw new Error(val.error.details[0].message)
    }
 }


borrarElementos = async (id) => {
        const eliminado = await this.#model.borrarElementos(id)
        
      return eliminado
    } 
   


}

export default Servicio