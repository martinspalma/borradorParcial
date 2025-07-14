import express from 'express'
import Router from './router/eRouter.js' 


class Server{
    #port
    #persistencia
    constructor (port, persistencia){
        this.#port=port
        this.#persistencia=persistencia
    }
start(){
const app= express()

//-------------------MIDDLEWARES EXPRESS---------------------
//app.use('/', express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//--------------------API RESTFUL ----------------------------
app.get('/', (req, res) => {
  const hour = new Date().getHours();
  let saludo = (hour >= 6 && hour <= 12)
    ? '¡Buenos días!'
    : (hour >= 13 && hour <= 19)
      ? '¡Buenas tardes!'
      : '¡Buenas noches!';
  res.send(saludo);
});
app.use('/colores', new Router(this.#persistencia).start())

//------------------ SECTOR LISTEN----------------------------
const port = this.#port 
const server= app.listen(port, () => { 
console.log(`Servidor escuchando en http://localhost:${port}`)})
server.on('error', (error)=>{
 console.log(`error en servidor: ${error.message}`)
})
}
}
export default Server
