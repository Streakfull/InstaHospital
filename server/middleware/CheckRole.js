const { sendError } = require('../utils/send');
const { unauthorized } = require('../constants/StatusCodes');

const checkRole = roles => (req, res, next) => {
  if (roles.includes(req.user.role)) return next();
  return sendError(res, unauthorized);
};

module.exports = checkRole;
