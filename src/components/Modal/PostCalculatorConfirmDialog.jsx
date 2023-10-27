import { forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { postCalculator } from 'redux/user/userOperations';
import { useDispatch } from 'react-redux';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PostCalculatorConfirmDialog({
  confirmPostCalculator,
  postCalculatorConfirmed,
}) {
  const dispatch = useDispatch();

  const handleSave = (e) => {
    dispatch(postCalculator(confirmPostCalculator.calculator));
    postCalculatorConfirmed(e);
  };

  return (
    <div>
      <Dialog
        open={confirmPostCalculator.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={postCalculatorConfirmed}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Save updated calculator?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Would you like to save this update to your calculator data or discard?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={postCalculatorConfirmed}>Discard</Button>
          <Button onClick={(e) => handleSave(e)}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
