import { CHANGE_THEME } from "../actions";

const INITIAL_STATE = {
  theme: 'light',
}

const theme = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_THEME:
    return ({
      theme: action.theme
    });
  default:
    return state;
  }
};

export default theme;