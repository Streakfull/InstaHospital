const firebase = require('firebase-admin');
const axios = require('axios');
const serviceAccount = require('../config/adminKey');

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_URL,
  messagingSenderId: process.env.FIREBASE_SENDER_ID
});

const headers = {
  Authorization: process.env.FIREBASE_AUTHORIZATION,
  'Content-Type': 'application/json'
};

const sendNotification = async (tokens, data) => {
  const sent = await axios({
    method: 'post',
    url: 'https://fcm.googleapis.com/fcm/send',
    data: {
      registration_ids: tokens,
      data,
      time_to_live: 2419200
    },
    headers
  });
  return sent;
};

module.exports = { sendNotification };
