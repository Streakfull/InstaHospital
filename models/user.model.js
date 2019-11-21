const Sequelize = require('sequelize');
const db = require('../DB');
const Account = require('./account.model');
const { GENDERS, BLOOD_TYPES } = require('../constants/enums');

const { Model } = Sequelize;

class User extends Model {}

User.init(
  {
    name: {
      type: Sequelize.STRING
    },
    birth_date: {
      type: Sequelize.DATE
    },
    weight: {
      type: Sequelize.DOUBLE
    },
    gender: {
      type: Sequelize.ENUM(GENDERS.ENUM)
    },
    mobile: {
      type: Sequelize.STRING
    },
    allergies: {
      type: Sequelize.STRING
    },
    diabetes: {
      type: Sequelize.BOOLEAN
    },
    bloodType: {
      type: Sequelize.ENUM(BLOOD_TYPES)
    },
    surgicalHistory: {
      type: Sequelize.STRING
    }
  },
  {
    sequelize: db,
    timestamps: false
  }
);

User.belongsTo(Account, {
  foreignKey: 'accountID',
  targetKey: 'id',
  onDelete: 'cascade'
});

module.exports = User;
