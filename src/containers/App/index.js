/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../components/Footer';

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - Maieutical Labs"
        defaultTitle="Maieutical Labs"
      >
        <meta name="description" content="Maieutical Labs è un centro di ricerca privato sulla didattica online e l'e-learning" />
      </Helmet>
      <Footer />
    </div>
  );
}
