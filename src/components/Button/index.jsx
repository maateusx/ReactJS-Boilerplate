import Styled from 'styled-components';
import { Button as MuiButton } from '@material-ui/core';

const Button = Styled(MuiButton)`
  background-color: ${({ background, theme }) => background ? background : theme.white.primary} !important;
  border-radius: ${({ rounded }) => rounded ? '54px' : '4px'};
  color:  ${({ color, theme }) => color ? color : theme.black.primary} !important;
  height: ${({ height }) => height || 'auto'};
  padding:  ${({ padding }) => padding || '15px 25'}px;
  width: ${({ width }) => width || 'auto'};
`

export default Button;
