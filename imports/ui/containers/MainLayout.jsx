import React from 'react';
import Header from '../components/header/Header.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="container">{this.props.children}</main>
      </div>
    );
  }
}
