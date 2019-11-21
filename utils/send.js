const moment = require('moment');
const { succuss, unknown } = require('../constants/StatusCodes');
// defining the message to be sent in all catches

const sendError = (
  res,
  statusCode = unknown.statusCode,
  error = unknown.message,
  status = 500
) => {
  res.set({
    statusCode,
    timestamp: moment().format()
  });
  return res.status(status).send({ error });
};

const send = (data, request, res) => {
  res.set({
    statusCode: succuss.statusCode,
    timestamp: moment().format()
  });
  return res.json({ data });
};

module.exports = { sendError, send };
