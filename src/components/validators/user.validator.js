import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-Z]{1,20}$/).required().messages({
        'string.pattern.base': 'Only letters!'
    }),
    username: Joi.string().regex(/^[a-zA-Z\d$]/).required(),
    age: Joi.number().min(18).required()
})

export {userValidator}