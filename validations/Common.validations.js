const Joi = require('joi');

const viewValidation = request => {
  const schema = {
    page: Joi.number()
  };
  return Joi.validate(request, schema);
};

module.exports = { viewValidation };
