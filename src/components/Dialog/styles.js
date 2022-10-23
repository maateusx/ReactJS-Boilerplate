import Styled from 'styled-components';
import { Dialog as MuiDialog, Grid } from '@mui/material';

export const CloseButton = Styled(Grid)`
  background-color: #91A3AD;
  border-radius: 25px;
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08);
  cursor: pointer;
  height: 50px;
  width: 50px;

  :hover {
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.15), 0px 4px 16px rgba(51, 51, 51, 0.3);
    outline: none;
  }
`;

export const Dialog = Styled(MuiDialog)`
  ${({ customSize }) => customSize ? `
    .MuiDialog-paperScrollPaper {
      display: initial !important;
    };

    .MuiDialog-paperWidthSm {
      max-width: none !important;
    };
  ` : ''}
`;

export const Title = Styled(Grid)`
  color: ${({ dark }) => dark ? '#fff' : '#222'};
  max-width: 70%;
`;
