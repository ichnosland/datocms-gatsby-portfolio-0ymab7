import React from 'react';
import Layout from '../components/layout';

import Privacy from '../Privacy';
import Survey from '../Survey';
import NotFoundPage from '../containers/NotFoundPage/Loadable';
import Footer from '../components/Footer';

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
      <Switch>
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/survey" component={Survey} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      </div>
      
    );
  }
}

export default IndexPage;

