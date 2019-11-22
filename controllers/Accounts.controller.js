const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { send, sendError } = require('../utils/send');
const {
  signupValidation,
  loginValidation,
  changePasswordValidation
} = require('../validations/Accounts.validation');
const {
  validation,
  emailExists,
  wrongCredentials,
  nonMatchingPasswords,
  wrongPassword
} = require('../constants/StatusCodes');
const { ROLES } = require('../constants/enums');
const Account = require('../models/account.model');
const User = require('../models/user.model');
const Hospital = require('../models/hospital.model');

const signUp = async (req, res) => {
  const { error } = signupValidation(req.body);
  if (error) return sendError(res, validation, error.details[0].message);
  const { email, password, role } = req.body;
  const emailCheck = await Account.findOne({ where: { email } });
  if (emailCheck) return sendError(res, emailExists);
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  const account = await Account.create({
    email,
    password: hashedPassword,
    role
  });
  if (role === ROLES.USER)
    await User.create({
      accountID: account.id
    });
  if (role === ROLES.HOSPITAL)
    await Hospital.create({
      accountID: account.id
    });
  return send(account, res);
};

const login = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return sendError(res, validation, error.details[0].message);
  const { email, password } = req.body;
  const account = await Account.findOne({ where: { email } });
  if (!account) return sendError(res, wrongCredentials);
  const match = bcrypt.compareSync(password, account.password);
  if (!match) return sendError(res, wrongCredentials);
  const { role, id, img } = account;
  const payload = { accountID: id, email: account.email, img, role };
  payload.token = jwt.sign(payload, process.env.TOKEN_KEY);
  return send(payload, res);
};

const changePassword = async (req, res) => {
  const { error } = changePasswordValidation(req.body);
  if (error) return sendError(res, validation, error.details[0].message);
  const { oldPassword, newPassword, passwordConfirmation } = req.body;
  const { accountID } = req.user;
  const account = await Account.findByPk(accountID);
  const match = bcrypt.compareSync(oldPassword, account.password);
  if (!match) return sendError(res, wrongPassword);
  if (newPassword !== passwordConfirmation)
    return sendError(res, nonMatchingPasswords);
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(newPassword, salt);
  await Account.update(
    {
      password: hashedPassword
    },
    { where: { id: accountID } }
  );

  return send('ok', res);
};

const deleteAccount = async (req, res) => {
  const { accountID } = req.user;
  await Account.destroy({ where: { id: accountID } });
  return send('ok', res);
};

module.exports = {
  signUp,
  login,
  changePassword,
  deleteAccount
};
