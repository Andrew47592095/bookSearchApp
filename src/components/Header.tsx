import React, { useState } from 'react'
import styles from "../styles/Header.module.css";
import forms from "../styles/Form.module.css"
import { Modal, Box } from '@mui/material';
import Button from '@mui/material/Button';

export const Header = () => {
  const [login, setLogin] = useState(false);
  const [register,setRegister] = useState(false);

  const handleLogin = () => {
    setLogin(true);
  }

  const handleRegister = () => {
    setRegister(true);
  }

  const handleClose = () => {
    setLogin(false);
    setRegister(false);
  };

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Book Search App</h1>
      <div className={styles.btnContainer}>
        <Button onClick={handleRegister} className={styles.btnLink}>Register</Button>
        <Button onClick={handleLogin} className={styles.btnLink}>Login</Button>
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
      </div>
    </div>
  )
}
