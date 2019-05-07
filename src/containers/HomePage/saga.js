import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { CICERO_ACADEMY_BASE_URL } from 'App/constants';
import { HOMEPAGE_SEND_TICKET, HOMEPAGE_URI_ZENDESK } from './constants';
import {
  homepageSendTicketErrorAction,
  homepageSetTicketSuccessAction,
} from './actions';

export const ZendeskTicketOptions = {
  tecnico: {
    agent: 767746652,
    defaultTag: 'tecnico',
  },
  contenuto: {
    agent: 781872021,
    defaultTag: 'contenuto',
  },
  comunicazione: {
    agent: 767746652,
    defaultTag: 'comunicazione',
  },
};

export function* sendZendsekTicket(data) {
  const urlZendesk = `${CICERO_ACADEMY_BASE_URL}${HOMEPAGE_URI_ZENDESK}`;
  let messaggioCompleto = data.payload.messaggio;


  if (data.payload.scuola) {
    messaggioCompleto += `\n\nscuola: ${data.payload.scuola}`;
  }
  if (data.payload.ruolo) {
    messaggioCompleto += `\n\nruolo: ${data.payload.ruolo}`;
  }

  const ticketOptions = ZendeskTicketOptions.comunicazione;
  const response = yield call(
    axios.post,
    urlZendesk, {
      ticket: {
        subject: ticketOptions.defaultTag,
        tags: ['maieuticallabs', ticketOptions.defaultTag],
        comment: {
          body: messaggioCompleto,
        },
        requester: {
          locale_id: 22,
          name: data.payload.nome,
          email: data.payload.email,
        },
        assignee_id: ticketOptions.agent,
      },
    }
  );

  if (response.status === 201) {
    yield put(homepageSetTicketSuccessAction());
  } else {
    yield put(homepageSendTicketErrorAction());
  }
}

export function* sagasHomepage() {
  yield takeEvery(HOMEPAGE_SEND_TICKET, sendZendsekTicket);
}
