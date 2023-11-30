import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ModalAcct from 'components/Modal/ModalAcct';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { getArchive, } from '../../redux/user/userOperations';
import { useNavigate } from 'react-router-dom';




export default function FooterAcct() {
  const dispatch = useDispatch();
  const nav = useNavigate(); // react router hook

  const [modalState, setModalState] = useState({
    open: false,
    myValue: null,
  });
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleOpenModal = myValue => {
    setModalState({
      open: true,
      myValue: myValue,
    });
  }


  const handleCloseModal = () => {
    setModalState(prev => {
      return {
        ...prev,
        open: false
      }
    })
  };


  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleReview = async () => {
    const response = await dispatch(getArchive())
    if (response.payload.code === 200) {
      toast.success('Archive Info received', {
        position: 'top-right',
        autoClose: 3000,
        className: 'success-toast',
      });
      const data = response.payload;
      nav('/archive', { state: data });
    }
    setOpen(false);
  }

  const handleClose = (event) => {

    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    if (event.currentTarget.dataset) {
      const { myValue } = event.currentTarget.dataset;
      if (myValue === 'archive' || myValue === 'dairy' || myValue === 'acct') {
        handleOpenModal(myValue)
      }
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Account Settings
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="top-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem data-my-value="archive" onClick={handleClose}>Archive Dairy Data</MenuItem>
                    <MenuItem data-my-value="review" onClick={handleReview}>Review Previous Archives Data</MenuItem>
                    <MenuItem data-my-value="dairy" onClick={handleClose}>Delete Dairy and Caculator Data</MenuItem>
                    <MenuItem data-my-value="acct" onClick={handleClose}>Delete Accout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
      <ModalAcct handleClose={handleCloseModal} modalState={modalState} />

    </>
  );
}
