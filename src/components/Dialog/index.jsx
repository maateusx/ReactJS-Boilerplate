import React from 'react';
import PropsTypes from 'prop-types';

import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from '@mui/material';

import CloseIcon from '@@mui/icons-material/Close';

import * as Styled from './styles';

const Dialog = ({
  background,
  buttons,
  children,
  customSize,
  dark,
  onClose,
  label,
  open,
  title,
}) => {
  const backgroundColor = background ? background : dark ? '#222' : '#fff';

  return (
    <Styled.Dialog
      open={open}
      onClose={onClose}
      aria-labelledby={label}
      aria-describedby={label}
      customSize={customSize}
    >
      <DialogTitle style={{ backgroundColor }}>
        <Grid container justify="space-between">
          <Styled.Title item dark={dark}>
            {title}
          </Styled.Title>
          <Styled.CloseButton
            item
            container
            alignItems="center"
            justify="center"
            onClick={onClose}
          >
            <CloseIcon style={{ color: 'white' }} />
          </Styled.CloseButton>
        </Grid>
      </DialogTitle>

      <DialogContent style={{ backgroundColor, overflowY: 'initial' }}>
        {children}
      </DialogContent>

      <DialogActions style={{ backgroundColor }}>
        {buttons()}
      </DialogActions>
    </Styled.Dialog>
  );
};

Dialog.defaultProps = {
  background: null,
  buttons: () => null,
  children: null,
  customSize: false,
  dark: false,
  open: false,
}

Dialog.prototype = {
  background: PropsTypes.string,
  buttons: PropsTypes.func,
  children: PropsTypes.element,
  customSize: PropsTypes.bool,
  dark: PropsTypes.bool,
  onClose: PropsTypes.func.isRequired,
  label: PropsTypes.string.isRequired,
  open: PropsTypes.bool,
  title: PropsTypes.string.isRequired,
}

export default Dialog;
