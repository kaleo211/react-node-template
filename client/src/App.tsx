import React, { Component } from 'react';
import { AppBar, Button, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { connect } from 'react-redux'

import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

interface IProps {
}

interface IState {}


class App extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
   return <div>hello</div>
  }
}

const mapStateToProps = (state) => ({
});
const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(App);
