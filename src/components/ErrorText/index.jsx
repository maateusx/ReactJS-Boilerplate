import React from 'react';
import PropTypes from 'prop-types';

import Text from 'components/Text';

import Theme from 'style/Theme';

const ErrorText = ({ text, style }) => (
  <Text
    color={Theme.red.primary}
    style={{ marginTop: 10, ...style }}
  >
    {text}
  </Text>
);

ErrorText.defaultProps = {
  style: {},
  text: '',
};

ErrorText.prototype = {
  style: PropTypes.object,
  text: PropTypes.string,
};

export default ErrorText;
