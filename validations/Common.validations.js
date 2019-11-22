const Joi = require('joi');

const viewValidation = request => {
  const schema = {
    page: Joi.number()
  };
  return Joi.validate(request, schema);
};

const idValidation = (request, param = 'id') => {
  const schema = {
    [param]: Joi.number().required()
  };
  return Joi.validate(request, schema);
};

module.exports = { viewValidation, idValidation };
