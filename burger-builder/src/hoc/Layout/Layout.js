import React, { Component } from 'react'

import classes from './Layout.module.css';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

export default class Layout extends Component {

  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  };

  sideDrawerOpenHandler = () => {
    this.setState({showSideDrawer: true});
  };

  render() {
    return (
      <>
        <Toolbar showMenu={this.sideDrawerOpenHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <main className={classes.content}>
          {this.props.children}
        </main>
      </>
    )
  }
}
