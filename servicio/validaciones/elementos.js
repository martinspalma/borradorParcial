import Joi from 'joi'

export const validar = (elemento) => {

    const eEsquema = Joi.object({

        usuario: Joi.string().alphanum().min(5).max(18).required(),
        email: Joi.string().email({ tlds: { allow: false } }).required(),
        fechaNac: Joi.date().less('now').required(),
        contrasenia: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z0-9])(?=.{8,})'))
            .message('La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial')
            .required()
    })
    const { error } = eEsquema.validate(elemento, { convert: false })
    if (error) {
        return { result: false, error }
    }
    else {
        return { result: true }
    }
}

export const validarActualizacion = (elemento) => {
    const eEsquema = Joi.object({
        usuario: Joi.string().alphanum().min(5).max(18).required(),
        email: Joi.string().email({ tlds: { allow: false } }).required(),
        fechaNac: Joi.date().less('now').required(),
        contrasenia: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z0-9])(?=.{8,})'))
            .message('La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial')
            .required()
    }).min(1);

    const { error } = eEsquema.validate(elemento, { convert: false })
    if (error) {
        return { result: false, error }
    } else {
        return { result: true }
    }
};