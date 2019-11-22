/* eslint-disable no-param-reassign */
const Notification = require('../models/notification.model');
const Subscriber = require('../models/subscriber.model');
const Account = require('../models/account.model');
const {
  sendDirectEmail,
  setNotificationMail
} = require('../services/SendGrid');
const { sendNotification } = require('../services/FireBase');

const createNotification = async data => {
  const notification = await Notification.create(data);
  return notification;
};

// data: {
//     title: "Welcome to LirtenHub",
//     body: "You have been approved to join us as a partner",
//     link: "/Partners",
//     actionTitle: "Visit",
//     img:
//       "https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787__340.png"
//   }
const notify = async (accountIDs, data) => {
  let accountPromises = [];
  accountIDs.forEach(async account => {
    accountPromises.push(Account.findByPk(account));
    const { actionTitle, ...notification } = data;
    notification.accountID = account;
    await createNotification(notification);
  });
  accountPromises = await Promise.all(accountPromises);
  const subscribers = await Subscriber.findAll({
    accountID: { $in: accountIDs }
  });
  const tokens = subscribers.map(subscriber => subscriber.firebaseToken);
  const emails = accountPromises.map(account => account.email);
  const requests = setNotificationMail(emails, data);
  requests.forEach(request => sendDirectEmail(request));
  data.accountIDs = accountIDs;
  sendNotification(tokens, data);
};

module.exports = notify;
