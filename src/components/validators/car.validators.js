import Joi from "joi";

const carValidator = Joi.object({
    model: Joi.string().regex(/^[a-zA-Z\d]{3,20}$/).required().messages({
        'string.pattern.base': 'Only English letters, min 3 and max 20 letters'
    }),
    price: Joi.number().required().min(0).max(2000000),
    year: Joi.number().min(1980).max(new Date().getFullYear())
})

export {carValidator}