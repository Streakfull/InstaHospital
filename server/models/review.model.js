const Sequelize = require('sequelize');
const db = require('../DB');
const Account = require('./account.model');

const { Model } = Sequelize;

class Review extends Model {}

Review.init(
  {
    userID: {
      type: Sequelize.INTEGER,
      notNull: true
    },
    hospitalID: {
      type: Sequelize.INTEGER,
      notNull: true
    },
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

Review.belongsTo(Account, {
  foreignKey: 'userID',
  targetKey: 'id',
  onDelete: 'cascade'
});

Review.belongsTo(Account, {
  foreignKey: 'hospitalID',
  targetKey: 'id',
  onDelete: 'cascade'
});

module.exports = Review;
