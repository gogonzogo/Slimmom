import {
  Box,
  Backdrop,
  Fade,
  Modal as MaterialModal,
  useMediaQuery,
} from '@mui/material';

import DailyRateModal from './DailyRateModal';
import DiaryModal from './DiaryModal';

const Modal = ({ handleModalClose, modalState }) => {
  const isMobile = useMediaQuery('(max-width: 480px)');

  return (
    <MaterialModal
      style={{ top: isMobile && 83 }}
      open={modalState.open}
      onClose={handleModalClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: { top: isMobile && 83, backgroundColor: '#2121211f' },
        },
      }}
      disableScrollLock={isMobile ? true : false}
    >
      <Fade in={modalState.open}>
        <Box>
          {modalState.source === 'calculator' ? (
            <DailyRateModal
              handleModalClose={handleModalClose}
              modalState={modalState}
            />
          ) : (
            <DiaryModal handleModalClose={handleModalClose} />
          )}
        </Box>
      </Fade>
    </MaterialModal>
  );
};
export default Modal;
