// import package
import React from 'react'
import { Modal,Box } from '@mui/material'
// import local
import forms from "../styles/Form.module.css"

type Props = {
  login : boolean, 
  handleClose : () => void
}

export const Loginform = (props: Props) => {
  const { login, handleClose } = props;
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
