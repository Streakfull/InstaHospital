const Sequelize = require('sequelize');
const db = require('../DB');
const Hospital = require('./hospital.model');
const { ROOM_STATUS } = require('../constants/enums');

const { Model } = Sequelize;

class Room extends Model {}

Room.init(
  {
    roomNumber: {
      type: Sequelize.STRING
    },
    roomStatus: {
      type: Sequelize.ENUM(ROOM_STATUS.ENUM)
    }
  },
  {
    sequelize: db,
    timestamps: false
  }
);

Room.belongsTo(Hospital, {
  foreignKey: 'hospitalID',
  targetKey: 'id',
  onDelete: 'cascade'
});

module.exports = Room;
