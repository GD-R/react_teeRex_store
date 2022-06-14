import React, { useContext, useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import DisplayMsgContext from '../Context/DisplayMsgContext';

const SnackBar = () => {
 
    // Sharing Snackbar States using Context API
    const { allStates: {openSnack, snackMessage, alertSeverity, handleSnackClose} } = useContext(DisplayMsgContext)

   

  return (
    <>
       <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={openSnack}
        onClose={handleSnackClose}
        autoHideDuration={2000}
      >
        <Alert  severity={alertSeverity}>
          {snackMessage}
        </Alert>
      </Snackbar>
    </>
  )
}

export default SnackBar
