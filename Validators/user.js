const joi=require("joi");

module.export.addressValidationSchema = Joi.object({
    username: Joi.string().required().messages({
        'string.base': 'Name must be a string',
        'any.required': 'Name is required',
    }),
    email: Joi.string().required().messages({
        'string.base': 'Street must be a string',
        'any.required': 'Street is required',
    }),
    password: Joi.string().required().messages({
        'string.base': 'City must be a string',
        'any.required': 'City is required',
    }),
    role: Joi.string().messages({
        'string.base': 'role must be a string',
    }),
    email: Joi.string().email().required().messages({
        'string.base': 'Email must be a string',
        'string.email': 'Email must be a valid email address',
        'any.required': 'Email is required',
    }),
    
});
