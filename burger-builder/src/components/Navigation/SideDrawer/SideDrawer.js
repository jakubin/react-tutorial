import React from 'react'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

export default function sideDrawer(props) {
  const attachedClasses = [classes.SideDrawer, props.open ? classes.Open : classes.Close];
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}><Logo /></div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  )
}
