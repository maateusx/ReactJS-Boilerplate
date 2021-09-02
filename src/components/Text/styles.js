import Styled from 'styled-components';

export const Text = Styled.Typography`
  color: ${({ color, theme }) => color || theme.white.primary};
  font-family: OpenSansRegular;
  font-style: ${({ italic }) => italic ? 'italic' : 'normal'};
  font-weight: ${({ bold, weight }) => bold ? 'bold' : weight ? weight : '500'};
  font-size: ${({ size }) => size || 14}px;
  line-height: ${({ height }) => height ? (height + 'px') : 'normal'};
  text-align: ${({ align }) => align} !important;
  text-transform: ${({ transform }) => (transform ? transform : 'none')};

  @media (max-width: 959px) {
    text-align: ${({ align, smAlign }) => smAlign ? smAlign : align} !important;
  }
`;
