const Sequelize = require('sequelize');
const db = require('../DB');

const { Model } = Sequelize;

class Notification extends Model {}

Notification.init(
  {
    isRead: {
      type: Sequelize.BOOLEAN
    },
    text: {
      type: Sequelize.STRING
    },
    img: {
      type: Sequelize.STRING
    }
  },
  {
    sequelize: db
  }
);

module.exports = Notification;
