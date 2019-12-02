const initialState = {
  auth: false
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'LOG_IN':
      newState.auth = action.auth;
      break;
    case 'LOG_OUT':
      newState.auth = false;
      break;
    default:
      break;
  }
  return newState;
};

export default reducer;
