// import package
import React, { useState } from 'react'
// import local
import styles from "../styles/Header.module.css";
import { Menu } from './Menu';

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
      <Menu
        login={login}
        register={register}
        handleLogin={handleLogin}
        handleClose={handleClose}
        handleRegister={handleRegister}
      />
    </div>
  )
}
