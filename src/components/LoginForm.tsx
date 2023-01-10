import React from 'react'
import { Modal,Box } from '@mui/material'
import forms from "../styles/Form.module.css"

export const Loginform = ({login, handleClose} : {login : boolean, handleClose : () => void}) => {
  return (
    <>
     <Modal
        open={login}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className={forms.form}>
          <h1 className={forms.title}>Login</h1>
          <div className={forms.formContainer}>
            <input className={forms.textField} type="text" placeholder='Your username'/>
            <input className={forms.textField} type="password" placeholder='Password' />
            <input className={forms.submitBtn} type="submit" value="Login" />
          </div>
        </Box>
      </Modal>
    </>
  )
}
