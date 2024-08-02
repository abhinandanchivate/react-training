import { REGISTER_SUCCESS } from "../types";

const initialState = {
  token: "",
  user: null,
  isAuthenticated: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return { ...state, isAuthenticated: true, tokn: payload.token };

    default:
      return state;
  }
};
