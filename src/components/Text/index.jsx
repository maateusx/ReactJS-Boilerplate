import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';
import Theme from 'style/Theme';

const Text = ({
  align,
  bold,
  children,
  color,
  height,
  italic,
  noWrap,
  paragraph,
  smAlign,
  size,
  style,
  transform,
  weight,
  ...props
}) => {
  return (
    <Styled.Text
      align={align}
      smAlign={smAlign}
      color={color}
      noWrap={noWrap}
      paragraph={paragraph}
      size={size}
      bold={bold}
      italic={italic}
      transform={transform}
      height={height}
      weight={weight}
      style={style}
      {...props}
    >
      {children}
    </Styled.Text>
  )
};

Text.defaultProps = {
  align: 'inherit',
  bold: false,
  color: Theme.white.primary,
  height: null,
  italic: false,
  noWrap: false,
  paragraph: false,
  smAlign: null,
  size: 14,
  style: {},
  transform: 'none',
  weight: null,
}

Text.propTypes = {
  align: PropTypes.string,
  bold: PropTypes.bool,
  color: PropTypes.string,
  height: PropTypes.any,
  italic: PropTypes.bool,
  noWrap: PropTypes.bool,
  paragraph: PropTypes.bool,
  smAlign: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  transform: PropTypes.string,
  weight: PropTypes.any,
};

export default Text;