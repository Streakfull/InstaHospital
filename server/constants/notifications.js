const signUpNotification = {
  title: 'Welcome to instaHospital',
  body: 'Complete profile now',
  link: 'completeProfile',
  img:
    'https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787__340.png',
  actionTitle: 'Visit'
};

const passwordRecovered = {
  title: 'Passowrd recovered',
  body: 'You can now login using your new password',
  link: 'login',
  img:
    'https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787__340.png',
  actionTitle: 'Visit'
};

const userBooking = (userName, img) => ({
  title: 'Booking received',
  body: `${userName} has made a booking`,
  link: 'bookings',
  img:
    img ||
    'https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787__340.png',
  actionTitle: 'Visit'
});

const bookingConfirmed = (bookingID, img) => ({
  title: 'Booking confirmation',
  body: `Booking number ${bookingID} has been confirmed`,
  link: 'bookings',
  img:
    img ||
    'https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787__340.png',
  actionTitle: 'Visit'
});

const userReview = img => ({
  title: 'Review received',
  body: 'A user has reviewed your profile',
  link: 'profile',
  img:
    img ||
    'https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787__340.png',
  actionTitle: 'Visit'
});

module.exports = {
  signUpNotification,
  passwordRecovered,
  userBooking,
  bookingConfirmed,
  userReview
};
