import Styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const Input = Styled(TextField)`
  background-color: #fff !important;
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

  @media (max-width: 700px) {
    font-size: 14px; 
  }
`;
