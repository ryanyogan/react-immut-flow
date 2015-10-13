import React from 'react';
import MainNav from './main_nav';

export default class MainHeader extends React.Component {
  render() {
    return (
      <div className='main-header'>
        <div className='logo'>Storekeeper</div>

        <MainNav />
      </div>
    );
  }

  shouldComponentUpdate() {
    return false;
  }
}
