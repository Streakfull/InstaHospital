const initialState = {
  auth: {}
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'LOG_IN':
      newState.auth = action.auth;
      break;
    case 'LOG_OUT':
      newState.auth = {};
      break;
    default:
      break;
  }
  return newState;
};

export default reducer;
