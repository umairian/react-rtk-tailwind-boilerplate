export default {
  login: (state, action) => {
    return { isLoggedIn: true, token: action.payload.token };
  },
  logout: (state, payload) => {
    return { isLoggedIn: false, token: null };
  },
};
