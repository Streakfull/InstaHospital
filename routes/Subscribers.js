const express = require('express');
const wrap = require('express-async-wrapper');
const passport = require('passport');

const {
  viewAll,
  createSubscriber,
  deleteSubscriber
} = require('../controllers/Subscribers.controller');

const router = express.Router();

router.get('/', wrap(viewAll));

router.post(
  '/create',
  passport.authenticate('jwt', { session: false }),
  wrap(createSubscriber)
);

router.delete('/:firebaseToken', wrap(deleteSubscriber));
