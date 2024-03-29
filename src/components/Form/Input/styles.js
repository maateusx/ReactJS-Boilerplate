import Styled from 'styled-components';
import MuiTextField from '@mui/material/TextField';

export const TextField = Styled(MuiTextField)`
  background-color: #fff;
  border-width: 0px;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 15px;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08);

  :focus {
    outline: none;
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.15), 0px 4px 16px rgba(51, 51, 51, 0.3);
  }
`;
