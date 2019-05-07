import React from 'react';
import PropTypes from 'prop-types';
import { Form, Text, Select, TextArea, Checkbox } from 'react-form';
import isEmail from 'validator/lib/isEmail';
import LoadingIndicator from '../LoadingIndicator';

const errorValidator = (values) => ({
  email: values.email && !isEmail(values.email) ? 'Il campo email non è formattato correttamente' : null,
});

class RichiestaContatti extends React.PureComponent {
  render() {
    return (
      <section id="contatti">
        <h2>Richiesta informazioni</h2>
        <div className="arrow">
          <div className="arrow-wrap">
            <div className="outer-arrow"></div>
          </div>
        </div>
        <div className="container">
          {this.props.spinner && <LoadingIndicator />}
          {this.props.error_message &&
            <div className="form-feedback">
              <p className="error">{this.props.error_message}</p>
            </div>
          }
          {this.props.confirm_message &&
            <div className="form-feedback">
              <p>{this.props.confirm_message}</p>
            </div>
          }
          {!this.props.spinner && !this.props.error_message && !this.props.confirm_message && <Form
            validateError={errorValidator}
            onSubmit={(values) => {
              this.props.onSubmitForm(values);
            }}
          >
            {(formApi) => (
              <form
                onSubmit={formApi.submitForm}
                id="form"
                name="form"
              >
                <div className="form-note"><small>* campi obbligatori</small></div>
                <div className="input-line">
                  <Text
                    field="nome"
                    id="nome"
                    className="input-field"
                    name="nome"
                    placeholder="Nome e cognome*"
                    minLength="3"
                    required
                  />
                  <Text
                    field="email"
                    id="email"
                    className="input-field"
                    name="email"
                    placeholder="Email*"
                    required
                  />
                  {formApi.errors.email && <div className="errormessage">{formApi.errors.email}</div>}
                  <Text
                    field="scuola"
                    id="scuola"
                    className="input-field"
                    name="scuola"
                    placeholder="Scuola"
                  />
                  <div className="selectwrap">
                    <Select
                      field="ruolo"
                      name="ruolo"
                      id="ruolo"
                      placeholder="Ruolo"
                      className="input-field select"
                      aria-label="Ruolo"
                      options={this.props.ruoli.map(
                        (ruolo) => ({
                          label: ruolo.key,
                          value: ruolo.key,
                        }))
                      }
                    />
                  </div>
                </div>
                <TextArea
                  field="messaggio"
                  name="messaggio"
                  id="messaggio"
                  className="input-field text-area"
                  placeholder="Scrivi qui*"
                  minLength="5"
                  required
                />
                <div className="check-row">
                  <div>
                    <Checkbox
                      field="termini_di_servizio"
                      id="termini_di_servizio"
                      name="termini_di_servizio"
                      className="checkbox"
                      required
                    />
                    <small>Ho letto e accetto le <a href="/privacy">normative sulla Privacy</a></small>
                  </div>
                  <button type="submit" className="btn form__btn"><span>Invia</span></button>
                </div>
              </form>
            )}
          </Form>
          }
        </div>
      </section>
    );
  }
}

export default RichiestaContatti;

RichiestaContatti.propTypes = {
  spinner: PropTypes.bool.isRequired,
  error_message: PropTypes.string.isRequired,
  confirm_message: PropTypes.string.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  ruoli: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};


