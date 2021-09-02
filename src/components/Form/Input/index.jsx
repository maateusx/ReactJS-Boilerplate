import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const Input = ({
  onChange,
  style,
  ...props
}) => (
  <Styled.TextField
    {...props}
    onChange={(value) => onChange(value?.target?.value)}
    style={{ ...style }}
  />
);

Input.defaultProps = {
  defaultValue: '',
  label: '',
  placeholder: '',
  type: 'text',
  variant: 'filled',
  style: {}
};

Input.prototype = {
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  style: PropTypes.object
};

export default Input;
