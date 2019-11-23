export const logIn = auth => ({
  type: 'LOG_IN',
  auth
});

export const logOut = () => ({
  type: 'LOG_OUT'
});
