/* eslint-disable react/no-danger */
import React from 'react';

// eslint-disable-next-line react/prop-types
export default ({ data }) => (
  <footer>
    <p>{data.datoCmsHome.copyright}</p>
    <p className="mini-p" dangerouslySetInnerHTML={{ __html: data.datoCmsHome.footer }} ></p>
  </footer>
  );
