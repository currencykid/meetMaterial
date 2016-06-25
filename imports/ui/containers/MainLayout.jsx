import React from 'react';
import Home from '../pages/Home.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <main>{this.props.children}</main>
      </div>
    );
  }
}
