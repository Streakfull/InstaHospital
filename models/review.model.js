const Sequelize = require('sequelize');
const db = require('../DB');
const User = require('./user.model');
const Hospital = require('./hospital.model');

const { Model } = Sequelize;

class Review extends Model {}

Review.init(
  {
    rating: {
      type: Sequelize.DOUBLE
    },
    text: {
      type: Sequelize.STRING
    }
  },
  {
    sequelize: db,
    timestamps: false
  }
);

Review.belongsTo(User, {
  foreignKey: 'userID',
  targetKey: 'id',
  onDelete: 'cascade'
});

Review.belongsTo(Hospital, {
  foreignKey: 'hospitalID',
  targetKey: 'id',
  onDelete: 'cascade'
});

module.exports = Review;
