// Defining status codes and their messages
const statusCodes = {
  succuss: {
    code: '0000',
    message: 'Success',
    httpCode: 200
  },
  unknown: {
    code: '000X',
    message: 'Something went wrong',
    httpCode: 500
  },
  unauthorized: {
    code: '000U',
    message: 'Unauthorized access',
    httpCode: 401
  },
  validation: {
    code: '0001',
    httpCode: 400
  },
  emailExists: {
    code: '0002',
    message: 'This email already exists',
    httpCode: 400
  },
  wrongCredentials: {
    code: '0003',
    message: 'Wrong email or password',
    httpCode: 400
  },
  nonMatchingPasswords: {
    code: '0004',
    message: 'Passwords entered do not match',
    httpCode: 400
  },
  wrongPassword: {
    code: '0005',
    message: 'Old password is incorrect',
    httpCode: 400
  },
  entityNotFound: {
    code: '0006',
    message: 'The entity you are looking for is not found',
    httpCode: 400
  }
};

module.exports = statusCodes;
