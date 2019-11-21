const Sequelize = require('sequelize');
const db = require('../DB');
const User = require('./user.model');
const Condition = require('./condition.model');

const { Model } = Sequelize;

class UserCondition extends Model {}

UserCondition.init({}, { sequelize: db, timestamps: false });

UserCondition.belongsTo(User, {
  foreignKey: 'userID',
  targetKey: 'id',
  onDelete: 'cascade'
});

UserCondition.belongsTo(Condition, {
  foreignKey: 'conditionID',
  targetKey: 'id',
  onDelete: 'cascade'
});

module.exports = UserCondition;
