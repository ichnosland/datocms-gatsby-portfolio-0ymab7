import React from 'react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { StaticRouter } from 'react-router';
import ReactGA from 'react-ga';
import Cookies from 'universal-cookie';
import { CookieBanner } from '@palmabit/react-cookie-law';
import configureStore from './src/configureStore';


// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts

  // Create redux store with history
  const initialState = {};
  const context = {};
  const history = createMemoryHistory();
  const store = configureStore(initialState, history);
  const cookies = new Cookies();

  // init Analytics if analytics cookie is true
  if (typeof window !== 'undefined' && cookies.get('analytics') === 'true') {
    ReactGA.initialize('UA-000000-01');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  function acceptAnalyticsCookie() {
    ReactGA.initialize('UA-000000-01');
    ReactGA.pageview(window.location.pathname + window.location.search);
    cookies.set('analytics', 'true');
    history.go(0);
  }

  function declineAnalyticsCookie() {
    cookies.set('analytics', 'false');
  }

  return (<Provider store={store} >
    <StaticRouter context={context}>
      {element}
      <CookieBanner
        message={"Al fine di offrire il miglior servizio possibile questo sito utilizza cookies tecnici e di terze parti per funzionalità quali l'accesso tramite social network e/o la visualizzazione di media. Se non acconsenti all'utilizzo dei cookie di terze parti, alcune di queste funzionalità potrebbero essere non disponibili. Chiudendo questo banner o proseguendo con la navigazione acconsentirai al loro impiego."}
        policyLink="/privacy"
        privacyPolicyLinkText="Consulta l'informativa sulla privacy"
        necessaryOptionText="Funzionali"
        showPreferencesOption={false}
        showMarketingOption={false}
        statisticsOptionText="Statistiche"
        acceptButtonText="Acconsento"
        declineButtonText="Non acconsento"
        showDeclineButton={false}
        dismissOnScroll={false}
        onAccept={() => (console.log('onAccept'))}
        onAcceptStatistics={() => { acceptAnalyticsCookie(); }}
        onDeclineStatistics={() => { declineAnalyticsCookie(); }}
        styles={{
          dialog: {},
        }}
      >
      </CookieBanner>
    </StaticRouter>
  </Provider>
  );
};
