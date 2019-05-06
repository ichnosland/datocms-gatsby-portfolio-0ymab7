/**
 * Test the HomePage
 */

import React from 'react';
import { shallow } from 'enzyme';

import configureStore from 'configureStore';
import homePageReducer from '../reducer';
import HomePage, { HomePageView } from '../index';

import {
  homepageSetTicketSuccessAction,
  homepageSendTicketErrorAction,
} from '../actions';

describe('<HomePageView />', () => {
  it('should render Main component', () => {
    const props = {
      onSendTicket: () => { },
      spinner: false,
      confirm_message: '',
      error_message: '',
      store: {},
    };
    const renderedComponent = shallow(
      <HomePageView
        {...props}
      />
    );
    expect(renderedComponent.find('div').length).toBe(1);
  });

  it('should trigger onSendTicket function when homepageSendTicketAction function is dispatched', () => {
    const props = {
      onSendTicket: jest.fn(),
      spinner: false,
      confirm_message: '',
      error_message: '',
      store: {},
    };
    const renderedComponent = shallow(
      <HomePageView
        {...props}
      />
    );
    const instance = renderedComponent.instance();
    instance.onSubmitForm({ data: 123 });
    expect(instance.props.onSendTicket).toHaveBeenCalledWith({ data: 123 });
  });
});

describe('<HomePage />', () => {
  it('HomePage success state', () => {
    const initialState = {
      homePage: homePageReducer,
    };
    const store = configureStore(initialState, {});
    store.dispatch(homepageSetTicketSuccessAction());
    const props = {
      onSendTicket: () => { },
    };
    const renderedComponent = shallow(
      <HomePage
        {...props}
      />,
      { context: { store } }
    );
    const instance = renderedComponent.instance();
    expect(instance.context.store.getState().get('homePage')).toEqual({
      error_message: '',
      confirm_message: 'La tua richiesta è stata inviata con successo, riceverai a breve una risposta',
      spinner: false,
    });
  });

  it('HomePage error state', () => {
    const initialState = {
      homePage: homePageReducer,
    };
    const store = configureStore(initialState, {});
    store.dispatch(homepageSendTicketErrorAction());
    const props = {
      onSendTicket: () => { },
    };
    const renderedComponent = shallow(
      <HomePage
        {...props}
      />,
      { context: { store } }
    );
    const instance = renderedComponent.instance();
    expect(instance.context.store.getState().get('homePage')).toEqual({
      confirm_message: '',
      error_message: 'Impossibile inviare il ticket, riprovare più tardi',
      spinner: false,
    });
  });

  it('HomePage call of onSendTicket', () => {
    const initialState = {
      homePage: homePageReducer,
    };
    const store = configureStore(initialState, {});
    store.dispatch = jest.fn();
    const renderedComponent = shallow(
      <HomePage />,
      { context: { store } }
    ).dive();

    expect(store.dispatch).toHaveBeenCalledTimes(0);
    renderedComponent.node.props.onSendTicket({ data: 123 });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
