const Sequelize = require('sequelize');
const db = require('../DB');
const Notification = require('./notification.model');
const User = require('./user.model');

const { Model } = Sequelize;

class UserNotification extends Model {}

UserNotification.init({}, { sequelize: db, timestamps: false });

UserNotification.belongsTo(Notification, {
  foreignKey: 'notificationID',
  targetKey: 'id',
  onDelete: 'cascade'
});

UserNotification.belongsTo(User, {
  foreignKey: 'UserlID',
  targetKey: 'id',
  onDelete: 'cascade'
});

module.exports = UserNotification;
