const Joi = require('joi');

const bookSchema = {
    book: {
        body: Joi.object().keys({
            name: Joi.string().required().min(3).max(25),
            imageUrl: Joi.string(),
            author: Joi.string().required().min(3).max(25),
            pages: Joi.number().min(50),
            price: Joi.number().min(100),
        }),
    },

    queryParams: {
        query: Joi.object().keys({
            size: Joi.number().integer().min(1).max(100).default(5),
            page: Joi.number().integer().default(0),
        }),
    },
};

module.exports = { bookSchema };
