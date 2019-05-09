import {
  HOMEPAGE_SEND_TICKET_ERROR,
  HOMEPAGE_SEND_TICKET_SUCCESS,
  HOMEPAGE_SEND_TICKET,
} from './constants';

export const defaultState = {
  spinner: false,
  error_message: '',
  confirm_message: '',
};

function homePageReducer(state = defaultState, action) {
  switch (action.type) {
    case HOMEPAGE_SEND_TICKET_SUCCESS:
      return {
        ...state,
        error_message: '',
        confirm_message: action.message,
        spinner: false,
      };
    case HOMEPAGE_SEND_TICKET_ERROR:
      return {
        ...state,
        error_message: action.message,
        confirm_message: '',
        spinner: false,
      };
    case HOMEPAGE_SEND_TICKET:
      return {
        ...state,
        error_message: '',
        confirm_message: '',
        spinner: true,
      };
    default:
      return state;
  }
}

export default homePageReducer;
