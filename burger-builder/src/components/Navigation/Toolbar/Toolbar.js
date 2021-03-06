import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

export default function toolbar(props) {
  return (
    <header className={classes.Toolbar}>
      <div onClick={props.showMenu} className={classes.MenuIcon}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={classes.Logo}><Logo /></div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems/>
      </nav>
    </header>
  )
}
