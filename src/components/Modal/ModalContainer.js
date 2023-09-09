import { useState } from 'react';
import Modal from './Modal';

export default function ModalContainer(props) {
  const { handleClose, open } = props;
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const [modalState, setModalState] = useState({
    totalCalories: 2800,
    foodNotToEat: ['asd', 'aassa', 'kdsd'],
  });

  //add useEffect to grab data from redux, when it will be set
  return (
    <Modal handleClose={handleClose} open={open} modalState={modalState} />
  );
}
