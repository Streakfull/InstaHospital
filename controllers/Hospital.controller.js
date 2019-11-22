const { send, sendError } = require('../utils/send');
const { editValidation } = require('../validations/Hospitals.validation');
const { viewValidation } = require('../validations/Common.validations');
const { validation } = require('../constants/StatusCodes');
const Hospital = require('../models/hospital.model');
const Account = require('../models/account.model');

const viewAll = async (req, res) => {
  const { error } = viewValidation(req.body);
  if (error) return sendError(res, validation, error.details[0].message);
  const { page = 0, perPage = 10 } = req.body;
  const { count, rows } = await Hospital.findAndCountAll(
    { include: [{ model: Account, required: true }] },
    {
      offset: parseInt(page, 2) * perPage,
      limit: parseInt(perPage, 2)
    }
  );
  const lastPage = Math.ceil(count / parseInt(perPage, 2)) - 1;
  return send(
    { hospitals: rows, meta: { totalEntries: count, lastPage } },
    res
  );
};

const viewProfile = async (req, res) => {
  const { id } = req.params;
  const user = await Hospital.findOne({
    where: { accountID: id },
    include: [{ model: Account }]
  });
  return send(user, res);
};

const editProfile = async (req, res) => {
  const { error } = editValidation(req.body);
  if (error) return sendError(res, validation, error.details[0].message);
  const hospital = await Hospital.update(req.body, {
    where: { accountID: req.user.accountID },
    returning: true
  });
  return send(hospital[1][0], res);
};

module.exports = { viewAll, viewProfile, editProfile };
