const Joi = require('joi');

const editValidation = request => {
  const schema = {
    name: Joi.string(),
    description: Joi.string(),
    lng: Joi.number(),
    lat: Joi.number(),
    address: Joi.string(),
    phoneNumer: Joi.string()
  };
  return Joi.validate(request, schema);
};

module.exports = { editValidation };
