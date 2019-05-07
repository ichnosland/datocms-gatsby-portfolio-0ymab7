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

HomePageView.propTypes = {
  onSendTicket: PropTypes.func.isRequired,
  spinner: PropTypes.bool.isRequired,
  error_message: PropTypes.string.isRequired,
  confirm_message: PropTypes.string.isRequired,
};

HomePageView.defaultProps = {
  spinner: false,
  error_message: '',
  confirm_message: '',
};

const mapDispatchToProps = (dispatch) => ({
  onSendTicket: (data) => {
    dispatch(homepageSendTicketAction(data));
  },
});

const mapStateToProps = (state) => ({
  spinner: state.get('homePage').spinner,
  error_message: state.get('homePage').error_message,
  confirm_message: state.get('homePage').confirm_message,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'homePage', saga: sagasHomepage });

const HomePage = compose(
  withSaga,
  withConnect,
)(HomePageView);

export default HomePageView;
