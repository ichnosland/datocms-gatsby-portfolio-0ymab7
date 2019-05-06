import {
  HOMEPAGE_SEND_TICKET,
  HOMEPAGE_SEND_TICKET_ERROR,
  HOMEPAGE_SEND_TICKET_SUCCESS,
} from '../constants';

import {
  homepageSendTicketAction,
  homepageSetTicketSuccessAction,
  homepageSendTicketErrorAction,
} from '../actions';

describe('homepageSendTicketAction', () => {
  it('should return the correct payload', () => {
    const payload = {
      data: 1234,
    };
    const expectedResult = {
      type: HOMEPAGE_SEND_TICKET,
      payload,
    };

    expect(homepageSendTicketAction(payload)).toEqual(expectedResult);
  });
});

describe('homepageSetTicketSuccessAction', () => {
  it('should return the correct message', () => {
    const message = 'feedback message';
    const expectedResult = {
      type: HOMEPAGE_SEND_TICKET_SUCCESS,
      message,
    };

    expect(homepageSetTicketSuccessAction(message)).toEqual(expectedResult);
  });
});

describe('homepageSendTicketErrorAction', () => {
  it('should return the correct message', () => {
    const message = 'feedback error';
    const expectedResult = {
      type: HOMEPAGE_SEND_TICKET_ERROR,
      message,
    };

    expect(homepageSendTicketErrorAction(message)).toEqual(expectedResult);
  });
});
