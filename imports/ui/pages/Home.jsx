import React from 'react';
import classNames from 'classnames';
import Header from '../components/Header.jsx';

function Home() {
  return (
    <div className={classNames('Home', 'foo', 'bar')} >
      <Header /> 
      <h1>Welcome to Meteor!</h1>


    </div>
  );
}

export default Home;
