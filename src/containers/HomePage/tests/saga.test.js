import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { CICERO_ACADEMY_BASE_URL } from 'containers/App/constants';
import * as actions from '../actions';
import * as constants from '../constants';
import * as sagas from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('sendZendsekTicket saga', () => {
  const payloadMock = {
    nome: 'nome',
    messaggio: 'testo del messaggio',
    email: 'acme@acme.com',
    scuola: 'Scuola',
    ruolo: 'Ruolo',
  };
  const urlZendesk = `${CICERO_ACADEMY_BASE_URL}${constants.HOMEPAGE_URI_ZENDESK}`;
  const ticketOptions = sagas.ZendeskTicketOptions.comunicazione;
  const responseMock = {
    ticket: {
      subject: ticketOptions.defaultTag,
      tags: ['maieuticallabs', ticketOptions.defaultTag],
      comment: {
        body: `${payloadMock.messaggio}\n\nscuola: ${payloadMock.scuola}\n\nruolo: ${payloadMock.ruolo}`,
      },
      requester: {
        locale_id: 22,
        name: payloadMock.nome,
        email: payloadMock.email,
      },
      assignee_id: ticketOptions.agent,
    },
  };

  it('sendZendsekTicket saga performs call axios.post', () => {
    const gen = sagas.sendZendsekTicket({ payload: payloadMock });
    expect(gen.next().value).toEqual(call(
      axios.post,
      urlZendesk,
      responseMock
    ));
  });

  it('sendZendsekTicket saga performs call axios.post with empty school and role fields', () => {
    const gen = sagas.sendZendsekTicket({ payload: { ...payloadMock, scuola: '', ruolo: '' } });
    expect(gen.next().value).toEqual(call(
      axios.post,
      urlZendesk, {
        ticket: { ...responseMock.ticket, comment: { body: payloadMock.messaggio } },
      }
    ));
  });

  it('sendZendsekTicket saga performs homepageSetTicketSuccessAction action on success', () => {
    const gen = sagas.sendZendsekTicket({ payload: payloadMock });
    expect(gen.next().value).toEqual(call(
      axios.post,
      urlZendesk,
      responseMock
    ));

    expect(
      gen.next({ status: 201 }).value
    ).toEqual(put(actions.homepageSetTicketSuccessAction()));
  });

  it('sendZendsekTicket saga performs homepageSendTicketErrorAction action on falure response', () => {
    const gen = sagas.sendZendsekTicket({ payload: payloadMock });
    expect(gen.next().value).toEqual(call(
      axios.post,
      urlZendesk,
      responseMock
    ));

    expect(
      gen.next({ status: 404 }).value
    ).toEqual(put(actions.homepageSendTicketErrorAction()));
  });
});

describe('sagasHomepage saga watcher', () => {
  it('on HOMEPAGE_SEND_TICKET action sendZendsekTicket function must be triggered', () => {
    const gen = sagas.sagasHomepage();

    expect(gen.next().value).toEqual(takeEvery(
      constants.HOMEPAGE_SEND_TICKET,
      sagas.sendZendsekTicket
    ));
  });
});
