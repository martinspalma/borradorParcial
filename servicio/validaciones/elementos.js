import Joi from 'joi'

export const validar = (elemento) => {

    const esquema =  Joi.object({
      color: Joi.string().required()
    })
  const { error } = esquema.validate(elemento, { convert: false });
  if (error) {
    return { result: false, error };
  } else {
    return { result: true };
  }
}


// el esquema no requiere actualizacion, lo dejo por las dudas
export const validarActualizacion = (elemento) => {
    const eEsquema = Joi.object({
        id: Joi.number().integer().min(1).max(5).required(),
        temperatura: Joi.number().integer().min(-20).max(100).required(),
        //fecha: Joi.date().required(),
    }).min(1);

    const { error } = eEsquema.validate(elemento, { convert: false })
    if (error) {
        return { result: false, error }
    } else {
        return { result: true }
    }
};