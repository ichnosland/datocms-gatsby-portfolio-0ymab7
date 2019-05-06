import {
  HOMEPAGE_SEND_TICKET,
  HOMEPAGE_SEND_TICKET_ERROR,
  HOMEPAGE_SEND_TICKET_SUCCESS,
} from './constants';

export function homepageSendTicketAction(payload) {
  return {
    type: HOMEPAGE_SEND_TICKET,
    payload,
  };
}

export function homepageSetTicketSuccessAction(message = 'La tua richiesta è stata inviata con successo, riceverai a breve una risposta') {
  return {
    type: HOMEPAGE_SEND_TICKET_SUCCESS,
    message,
  };
}

export function homepageSendTicketErrorAction(message = 'Impossibile inviare il ticket, riprovare più tardi') {
  return {
    type: HOMEPAGE_SEND_TICKET_ERROR,
    message,
  };
}
