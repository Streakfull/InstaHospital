const { send } = require('../utils/send');

const errorHandler = (err, req, res, next) => {
  if (!err) return next();
  return send.sendError(res);
};

module.exports = errorHandler;
