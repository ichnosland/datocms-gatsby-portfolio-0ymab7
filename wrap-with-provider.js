import React from "react"
import { Provider } from "react-redux"
import { createMemoryHistory } from 'history';
import { StaticRouter } from 'react-router'

import configureStore from './src/configureStore';

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts

  // Create redux store with history
    const initialState = {};
    const history = createMemoryHistory();
    const store = configureStore(initialState, history);

  return <Provider store={store} >
      <StaticRouter>
        {element}
      </StaticRouter>
          </Provider>
}