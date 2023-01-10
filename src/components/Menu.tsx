import React, { useState } from 'react'
import { Modal } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Button from '@mui/material/Button';
import { useWidth } from '../hooks/useWidth';
import styles from "../styles/Header.module.css";
import CloseIcon from '@mui/icons-material/Close';
import { Loginform } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export const Menu = (
  { handleRegister, handleLogin, login, handleClose, register} :
  { handleRegister : () => void, handleLogin : () => void, handleClose : () => void, login : boolean, register : boolean}
  ) => {
  const width = useWidth();
  const [menu, setMenu] = useState(false);

  const handleCloseMenu = () => {
    setMenu(false);
  }
  
  return (
  <>
  { width > 480 ?
    <div className={styles.btnContainer}>
      <Button onClick={handleRegister} className={styles.btnLink}>Register</Button>
      <Button onClick={handleLogin} className={styles.btnLink}>Login</Button>
      <Loginform
        login={login}
        handleClose={handleClose}
      />
      <RegisterForm
        register={register}
        handleClose={handleClose}
      />
    </div> : 
    <div>
      <MenuRoundedIcon
        fontSize='large'
        onClick={() => {setMenu(true)}}
        sx={{
          paddingRight : "15px"
        }}
      />
      <Modal
        open={menu}
        onClose={handleCloseMenu}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div className={styles.responsiveMenu}>
          <CloseIcon
            fontSize='large'
            onClick={() => { setMenu(false) }}
            sx={
              { 
                position : "absolute",
                top : 10,
                right : 30,
              }
            }
          />
          <Button className={styles.menuItem} onClick={handleLogin}>Login</Button>
          <Button className={styles.menuItem} onClick={handleRegister}>Register</Button>
          <Loginform
            login={login}
            handleClose={handleClose}
          />
          <RegisterForm
            register={register}
            handleClose={handleClose}
          />
        </div>
      </Modal>
    </div>
  }
  </>
  )
}
