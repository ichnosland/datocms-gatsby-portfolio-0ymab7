import React from 'react';
import { shallow, mount } from 'enzyme';
import { Form } from 'react-form';

import LoadingIndicator from 'components/LoadingIndicator';
import RichiestaContatti from '../RichiestaContatti';

describe('<Main />', () => {
  it('should render RichiestaContatti component no spinner', () => {
    const props = {
      spinner: false,
      error_message: '',
      confirm_message: '',
      onSubmitForm: () => { },
      ruoli: [{
        key: 'docente',
        value: 'Docente',
      }],
    };
    const renderedComponent = shallow(
      <RichiestaContatti
        {...props}
      />
    );
    expect(renderedComponent.find('section').length).toBe(1);
    expect(renderedComponent.find('section > h2').length).toBe(1);
    expect(renderedComponent.find('section > div.container').length).toBe(1);
    expect(renderedComponent.find('section div.arrow').length).toBe(1);
    expect(renderedComponent.find('section > div.container p').length).toBe(0);
    expect(renderedComponent.find(LoadingIndicator).length).toBe(0);
    expect(renderedComponent.find(Form).length).toBe(1);
  });

  it('should render RichiestaContatti component no spinner', () => {
    const props = {
      spinner: true,
      error_message: '',
      confirm_message: '',
      onSubmitForm: () => { },
      ruoli: [{
        key: 'docente',
        value: 'Docente',
      }],
    };
    const renderedComponent = shallow(
      <RichiestaContatti
        {...props}
      />
    );
    expect(renderedComponent.find('section').length).toBe(1);
    expect(renderedComponent.find('section > h2').length).toBe(1);
    expect(renderedComponent.find('section > div.container').length).toBe(1);
    expect(renderedComponent.find('section div.arrow').length).toBe(1);
    expect(renderedComponent.find('section > div.container p').length).toBe(0);
    expect(renderedComponent.find(LoadingIndicator).length).toBe(1);
    expect(renderedComponent.find(Form).length).toBe(0);
  });

  it('should render RichiestaContatti with error message', () => {
    const props = {
      spinner: false,
      error_message: 'Error message',
      confirm_message: '',
      onSubmitForm: () => { },
      ruoli: [{
        key: 'docente',
        value: 'Docente',
      }],
    };
    const renderedComponent = shallow(
      <RichiestaContatti
        {...props}
      />
    );
    expect(renderedComponent.find('section').length).toBe(1);
    expect(renderedComponent.find('section > h2').length).toBe(1);
    expect(renderedComponent.find('section > div.container').length).toBe(1);
    expect(renderedComponent.find('section div.arrow').length).toBe(1);
    expect(renderedComponent.find('section > div.container p').length).toBe(1);
    expect(renderedComponent.find(LoadingIndicator).length).toBe(0);
    expect(renderedComponent.find(Form).length).toBe(0);
  });

  it('should render RichiestaContatti with confirm message', () => {
    const props = {
      spinner: false,
      error_message: '',
      confirm_message: 'Confirm message',
      onSubmitForm: () => { },
      ruoli: [{
        key: 'docente',
        value: 'Docente',
      }],
    };
    const renderedComponent = shallow(
      <RichiestaContatti
        {...props}
      />
    );
    expect(renderedComponent.find('section').length).toBe(1);
    expect(renderedComponent.find('section > h2').length).toBe(1);
    expect(renderedComponent.find('section > div.container').length).toBe(1);
    expect(renderedComponent.find('section div.arrow').length).toBe(1);
    expect(renderedComponent.find('section > div.container p').length).toBe(1);
    expect(renderedComponent.find(LoadingIndicator).length).toBe(0);
    expect(renderedComponent.find(Form).length).toBe(0);
  });

  it('RichiestaContatti should trigger onSubmitForm function when data is submitted', () => {
    const props = {
      spinner: false,
      error_message: '',
      confirm_message: '',
      onSubmitForm: jest.fn(),
      ruoli: [{
        key: 'docente',
        value: 'Docente',
      }],
    };
    const renderedComponent = shallow(
      <RichiestaContatti
        {...props}
      />
    );
    expect(renderedComponent.find(LoadingIndicator).length).toBe(0);
    expect(renderedComponent.find(Form).length).toBe(1);
    const formStuff = renderedComponent.find(Form);
    expect(props.onSubmitForm).toHaveBeenCalledTimes(0);
    formStuff.node.props.onSubmit({
      nome: 'Nome',
      messaggio: 'messaggio',
      email: 'acme@acme.com',
      ruolo: props.ruoli[0].key,
    });
    expect(props.onSubmitForm).toHaveBeenCalledTimes(1);
  });

  it('RichiestaContatti form should not display error messages', () => {
    const props = {
      spinner: false,
      error_message: '',
      confirm_message: '',
      onSubmitForm: () => { },
      ruoli: [{
        key: 'docente',
        value: 'Docente',
      }],
    };
    const renderedComponent = mount(
      <RichiestaContatti
        {...props}
      />
    );
    expect(renderedComponent.find('form').length).toBe(1);
    expect(renderedComponent.find('form > div.input-line span').length).toBe(0);
  });

  it('RichiestaContatti form should display error messages', () => {
    const props = {
      spinner: false,
      error_message: '',
      confirm_message: '',
      onSubmitForm: jest.fn(),
      ruoli: [{
        key: 'docente',
        value: 'Docente',
      }, {
        key: 'studente',
        value: 'Studente',
      }],
    };
    const renderedComponent = mount(
      <RichiestaContatti
        {...props}
      />
    );

    const formComponent = renderedComponent.find(Form);
    expect(formComponent.find('button').length).toBe(1);

    formComponent.find('form #nome').simulate('change', { target: { value: 'nom' } });
    formComponent.find('form #messaggio').simulate('change', { target: { value: 'messaggio' } });
    formComponent.find('form #email').simulate('change', { target: { value: 'email' } });
    formComponent.find('form #termini_di_servizio').simulate('change', { target: { value: '1' } });
    formComponent.find('form #ruolo').node.selectedIndex = 1;
    formComponent.find('button').simulate('submit');
    expect(renderedComponent.find('form > div.input-line > div.errormessage').length).toBe(1);
  });
});

