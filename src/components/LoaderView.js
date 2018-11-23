import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDizzy } from '@fortawesome/free-solid-svg-icons';

import './LoaderView.css';

export default () => (
  <div className="loader-wrapper">
    <FontAwesomeIcon
      className="loader-icon"
      icon={faDizzy}
      pulse
    />
  </div>
);
