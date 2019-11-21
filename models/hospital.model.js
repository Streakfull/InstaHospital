const Sequelize = require('sequelize');
const db = require('../DB');

const { Model } = Sequelize;

class Hospital extends Model {}

Hospital.init(
  {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    lng: {
      type: Sequelize.DOUBLE
    },
    lat: {
      type: Sequelize.DOUBLE
    },
    address: {
      type: Sequelize.STRING
    }
  },
  {
    sequelize: db,
    timestamps: false
  }
);

module.exports = Hospital;
