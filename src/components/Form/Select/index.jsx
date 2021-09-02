import React from 'react';
import PropTypes from 'prop-types';

import { MenuItem } from '@material-ui/core';

import * as Styled from './styles';

const Select = ({
  data,
  disabled,
  label,
  name,
  onChange,
  placeholder,
  value,
  variant,
  style,
}) => (
  <Styled.Input
    label={label}
    name={name}
    variant={variant}
    style={{ ...style }}
    select
    value={value}
    onChange={(value) => onChange(value?.target?.value)}
    helperText={placeholder}
    disabled={disabled}
  >
    {data.map((option, index) => (
      <MenuItem key={`${index}_${option.value}`} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </Styled.Input>
);

Select.defaultProps = {
  data: [],
  disabled: false,
  label: '',
  onChange: () => null,
  placeholder: '',
  value: null,
  variant: 'filled',
  style: {}
};

Select.prototype = {
  data: PropTypes.array,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  variant: PropTypes.string,
  style: PropTypes.object
};

export default Select;
