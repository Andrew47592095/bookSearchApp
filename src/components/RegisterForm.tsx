import React from 'react';
import { Modal,Box } from '@mui/material'
import forms from "../styles/Form.module.css"

export const RegisterForm = ({ register, handleClose } : { register : boolean, handleClose : () => void }) => {
  return (
    <>
      <Modal
        open={register}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className={forms.form}>
            <h2 className={forms.title}>Register</h2>
            <div className={forms.formContainer}>
              <input className={forms.textField} type="text" placeholder='Your username'/>
              <input className={forms.textField} type="password" placeholder='Password' />
              <input className={forms.textField} type="password" placeholder='Confirm Password' />
              <input className={forms.submitBtn} type="submit" value="Register" />
            </div>
        </Box>
      </Modal>
    </>
  )
}
