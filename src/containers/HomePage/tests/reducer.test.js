import homeReducer, { defaultState } from '../reducer';
import * as actions from '../actions';

describe('homeReducer reducer', () => {
  it('should return the initial state when no state is provided', () => {
    expect(homeReducer(undefined, { type: undefined })).toEqual(defaultState);
  });

  it('should return the initial state when HOMEPAGE_SEND_TICKET action is provided', () => {
    const mockData = {
      nome: 'nome',
      messaggio: 'messaggio',
    };
    expect(homeReducer(
      undefined,
      actions.homepageSendTicketAction(mockData))
    ).toEqual({ ...defaultState, spinner: true });
  });

  it('should return the initial state when HOMEPAGE_SEND_TICKET_SUCCESS action is provided', () => {
    expect(homeReducer(
      undefined,
      actions.homepageSetTicketSuccessAction())
    ).toEqual({
      ...defaultState,
      confirm_message: 'La tua richiesta è stata inviata con successo, riceverai a breve una risposta',
    });
  });

  it('should return the initial state when HOMEPAGE_SEND_TICKET_ERROR action is provided', () => {
    expect(homeReducer(
      undefined,
      actions.homepageSendTicketErrorAction())
    ).toEqual({
      ...defaultState,
      error_message: 'Impossibile inviare il ticket, riprovare più tardi',
    });
  });
});
