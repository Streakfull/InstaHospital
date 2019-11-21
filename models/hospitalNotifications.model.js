const Sequelize = require('sequelize');
const db = require('../DB');
const Notification = require('./notification.model');
const Hospital = require('./hospital.model');

const { Model } = Sequelize;

class HospitalNotification extends Model {}

HospitalNotification.init({}, { sequelize: db, timestamps: false });

HospitalNotification.belongsTo(Notification, {
  foreignKey: 'notificationID',
  targetKey: 'id',
  onDelete: 'cascade'
});

HospitalNotification.belongsTo(Hospital, {
  foreignKey: 'hospitalID',
  targetKey: 'id',
  onDelete: 'cascade'
});

module.exports = HospitalNotification;
