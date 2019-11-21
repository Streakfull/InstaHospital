const Sequelize = require('sequelize');
const db = require('../DB');
const User = require('./user.model');
const Hospital = require('./hospital.model');
const { BOOKING_STATUS } = require('../constants/enums');

const { Model } = Sequelize;

class Booking extends Model {}

Booking.init(
  {
    status: {
      type: Sequelize.ENUM(BOOKING_STATUS.ENUM),
      defaultValue: BOOKING_STATUS.PENDING
    },
    date: {
      type: Sequelize.DATE
    },
    emergency: {
      type: Sequelize.BOOLEAN
    },
    additionalNotes: {
      type: Sequelize.STRING
    },
    case: {
      type: Sequelize.STRING
    }
  },
  {
    sequelize: db,
    timestamps: false
  }
);

Booking.belongsTo(User, {
  foreignKey: 'userID',
  targetKey: 'id',
  onDelete: 'cascade'
});

Booking.belongsTo(Hospital, {
  foreignKey: 'hospitalID',
  targetKey: 'id',
  onDelete: 'cascade'
});

module.exports = Booking;
