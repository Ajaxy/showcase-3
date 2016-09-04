import React from 'react';

const Error = ({ children }) => (
  <div className="container">
    <div id="error-message" className={!children ? 'hidden' : ''}>{children}</div>
  </div>
);

export default Error;
