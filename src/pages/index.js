import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from '../utils/injectSaga';
import Layout from '../components/layout';
import { homepageSendTicketAction } from '../containers/HomePage/actions';
import { sagasHomepage } from '../containers/HomePage/saga';

export class IndexPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(values) {
    this.props.onSendTicket(values);
  }

  render() {
    return (
      <div>
        <Layout
          formContatti={{
            onSubmitForm: this.onSubmitForm,
            spinner: this.props.spinner,
            error_message: this.props.error_message,
            confirm_message: this.props.confirm_message,
            ruoli: [{
              key: 'docente',
              value: 'Docente',
            }, {
              key: 'studente',
              value: 'Studente',
            }, {
              key: 'amministrativo',
              value: 'Amministrativo',
            }, {
              key: 'genitore',
              value: 'Genitore',
            }, {
              key: 'altro',
              value: 'Altro',
            }],
          }}
        />
      </div>
    );
  }
}

export default IndexPage;

